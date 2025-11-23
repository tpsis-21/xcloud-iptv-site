const fetch = global.fetch || require('node-fetch');

const site = process.env.SITE_URL || 'https://xcloudiptv.com.br';
const startPaths = ['/', '/planos-xcloud-iptv', '/teste-gratis-xcloud-iptv', '/contato', '/download', '/sobre-nos', '/termos-de-uso', '/politica-de-privacidade', '/politica-de-reembolso'];

function abs(u) {
  try { return new URL(u, site).href; } catch { return null; }
}

async function get(url) {
  const res = await fetch(url, { method: 'GET' });
  const text = await res.text();
  return { status: res.status, text };
}

function extractAnchors(html) {
  const anchors = [];
  const re = /<a\s[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gims;
  let m; while ((m = re.exec(html)) !== null) anchors.push({ href: m[1], text: m[2].replace(/<[^>]+>/g, '').trim() });
  return anchors;
}

function extractCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

async function audit() {
  const results = { pages: [], broken: [], redirects: [], externalIssues: [], canonicals: [] };
  const visited = new Set();
  for (const p of startPaths) {
    const url = abs(p);
    const page = await get(url);
    const canonical = extractCanonical(page.text);
    if (canonical && !canonical.startsWith(site)) results.canonicals.push({ page: url, canonical });
    const anchors = extractAnchors(page.text);
    const internal = anchors.filter(a => {
      const h = a.href || '';
      if (!h || h.startsWith('#') || h.startsWith('mailto:') || h.startsWith('tel:')) return false;
      return h.startsWith('/') || h.startsWith(site);
    });
    const normalized = internal.map(a => ({ url: abs(a.href), text: a.text }));
    const unique = normalized.filter(a => a.url && !visited.has(a.url));
    unique.forEach(a => visited.add(a.url));
    const checks = await Promise.all(unique.map(async a => {
      try {
        const r = await fetch(a.url, { method: 'GET', redirect: 'manual' });
        return { url: a.url, text: a.text, status: r.status, location: r.headers.get('location') };
      } catch (e) {
        return { url: a.url, text: a.text, error: String(e) };
      }
    }));
    checks.forEach(c => {
      if (c.error) results.broken.push(c);
      else if (c.status >= 400) results.broken.push(c);
      else if (c.status >= 300 && c.status < 400) results.redirects.push(c);
    });
    const externalBad = anchors.filter(a => (a.href || '').includes('vercel.app') || (a.href || '').includes('xcloudtv.com.br'));
    externalBad.forEach(a => results.externalIssues.push({ page: url, href: a.href, text: a.text }));
    results.pages.push({ page: url, linksChecked: checks.length, canonical });
  }
  let sitemapOK = [];
  try {
    const sm = await get(abs('/sitemap.xml'));
    const locs = Array.from(sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1]);
    sitemapOK = startPaths.map(p => ({ path: p, present: locs.some(l => l.endsWith(p)) }));
  } catch {}
  const out = {
    summary: {
      pagesAudited: results.pages.length,
      brokenCount: results.broken.length,
      redirectCount: results.redirects.length,
      canonicalIssues: results.canonicals.length,
      externalIssues: results.externalIssues.length
    },
    canonicals: results.canonicals,
    broken: results.broken,
    redirects: results.redirects,
    externalIssues: results.externalIssues,
    sitemap: sitemapOK
  };
  console.log(JSON.stringify(out, null, 2));
}

audit().catch(e => { console.error(e); process.exit(1); });