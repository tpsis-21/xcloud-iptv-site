/**
 * Teste de integração com webhook XCloud IPTV
 * Use este arquivo para testar a integração do webhook
 */

import { enviarDadosTeste, validarDadosTeste } from './webhook-service';

// Dados de teste
const dadosTeste = {
  nome: 'Teste Usuário',
  email: 'teste@example.com',
  telefone: '(11) 98765-4321'
};

// Função para testar o webhook
async function testarWebhook() {
  console.log('🧪 Iniciando teste de webhook...');
  console.log('📊 Dados de teste:', dadosTeste);
  
  try {
    // Validação
    console.log('\n✅ Validando dados...');
    const validacao = validarDadosTeste(dadosTeste);
    
    if (!validacao.valido) {
      console.error('❌ Erro de validação:', validacao.erros);
      return;
    }
    
    console.log('✅ Dados válidos!');
    
    // Envio para webhook
    console.log('\n🚀 Enviando para webhook...');
    console.log('📡 URL:', 'https://n8n.tplay21.in/webhook/teste-xcloudtv');
    
    const resposta = await enviarDadosTeste(dadosTeste);
    
    console.log('\n📨 Resposta do webhook:');
    console.log('✅ Sucesso:', resposta.success);
    console.log('📝 Mensagem:', resposta.message);
    
    if (resposta.data) {
      console.log('📊 Dados retornados:');
      console.log('  👤 Usuário:', resposta.data.usuario);
      console.log('  🔑 Senha:', resposta.data.senha);
      console.log('  🔗 URL:', resposta.data.url_acesso);
      console.log('  ⏰ Validade:', resposta.data.validade);
      console.log('  📋 Instruções:', resposta.data.instrucoes);
    }
    
    if (resposta.error) {
      console.log('❌ Erro:', resposta.error);
    }
    
    console.log('\n✅ Teste concluído com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro durante o teste:', error);
  }
}

// Executar teste se este arquivo for rodado diretamente
if (typeof window === 'undefined') {
  // Estamos em ambiente Node.js
  testarWebhook().catch(console.error);
}

export { testarWebhook };