import { SEO_CONFIG } from '@/config/seo';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean; // Para páginas que não devem ser indexadas
}

export function MetaTags({ 
  title, 
  description, 
  keywords = [],
  canonical,
  ogImage,
  noindex = false
}: MetaTagsProps) {
  const fullTitle = `${title} | ${SEO_CONFIG.siteName}`;
  const isAbsolute = (u?: string) => !!u && /^https?:\/\//i.test(u);
  const canonicalHref = canonical
    ? isAbsolute(canonical)
      ? canonical
      : `${SEO_CONFIG.siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={[...SEO_CONFIG.keywords.secondary, ...keywords].join(', ')} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {canonicalHref && (
        <link rel="canonical" href={canonicalHref} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalHref || SEO_CONFIG.siteUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
}
