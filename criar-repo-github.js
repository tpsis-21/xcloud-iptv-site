// Script para criar repositório no GitHub via API
// Execute: node criar-repo-github.js

const https = require('https');

// Configurações - você precisa preencher seu token
const TOKEN = process.env.GITHUB_TOKEN || 'SEU_TOKEN_AQUI';
const USERNAME = process.env.GITHUB_USERNAME || 'SEU_USUARIO_AQUI';

const repoData = {
  name: 'xcloud-iptv-site',
  description: 'Site oficial XCloud IPTV - Streaming com SEO otimizado',
  private: false,
  has_issues: true,
  has_projects: false,
  has_wiki: false,
  auto_init: false
};

const options = {
  hostname: 'api.github.com',
  path: '/user/repos',
  method: 'POST',
  headers: {
    'Authorization': `token ${TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'Node.js'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      
      if (res.statusCode === 201) {
        console.log('✅ Repositório criado com sucesso!');
        console.log('📍 URL:', response.html_url);
        console.log('🔗 Clone URL:', response.clone_url);
        console.log('📊 Tamanho:', response.size + ' KB');
        
        // Gerar comandos Git
        console.log('\n🚀 Comandos para conectar seu repositório local:');
        console.log(`git remote add origin https://github.com/${USERNAME}/xcloud-iptv-site.git`);
        console.log('git branch -M main');
        console.log('git push -u origin main');
        
      } else if (res.statusCode === 422) {
        console.log('⚠️  Repositório já existe!');
        console.log('🔗 URL: https://github.com/' + USERNAME + '/xcloud-iptv-site');
        
        console.log('\n🚀 Comandos para conectar:');
        console.log(`git remote add origin https://github.com/${USERNAME}/xcloud-iptv-site.git`);
        console.log('git branch -M main');
        console.log('git push -u origin main');
        
      } else {
        console.log('❌ Erro:', res.statusCode);
        console.log('📄 Resposta:', data);
      }
      
    } catch (error) {
      console.log('❌ Erro ao processar resposta:', error);
      console.log('📄 Resposta raw:', data);
    }
  });
});

req.on('error', (error) => {
  console.log('❌ Erro na requisição:', error);
});

req.write(JSON.stringify(repoData));
req.end();

console.log('🔄 Criando repositório...');
console.log('📋 Nome:', repoData.name);
console.log('📝 Descrição:', repoData.description);