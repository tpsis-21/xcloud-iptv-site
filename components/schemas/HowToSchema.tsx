import React from 'react';

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  estimatedCost?: string;
  supply?: string[];
  tool?: string[];
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  supply,
  tool
}: HowToSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image })
    })),
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost }),
    ...(supply && { supply: supply.map(item => ({ "@type": "HowToSupply", name: item })) }),
    ...(tool && { tool: tool.map(item => ({ "@type": "HowToTool", name: item })) })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Schema específico para instalação do XCloud IPTV
export function XCloudInstallationHowToSchema() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "HowTo",
    name: "Como Instalar XCloud IPTV - Guia Completo de Instalação",
    description: "Aprenda a instalar XCloud IPTV em Android TV, Fire Stick, celular Android, iOS e Windows com nosso guia passo a passo completo.",
    totalTime: "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "BRL",
      value: "0"
    },
    supply: [
      { "@type": "HowToSupply", name: "Conexão com internet" },
      { "@type": "HowToSupply", name: "Dispositivo compatível" }
    ],
    tool: [
      { "@type": "HowToTool", name: "Smartphone" },
      { "@type": "HowToTool", name: "Smart TV" },
      { "@type": "HowToTool", name: "Fire Stick" },
      { "@type": "HowToTool", name: "Computador" }
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Escolher seu dispositivo",
        text: "Selecione o dispositivo onde deseja instalar o XCloud IPTV: Android TV, Fire Stick, celular Android, iOS ou Windows."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Baixar o aplicativo",
        text: "Acesse a página de download do XCloud IPTV e baixe o aplicativo correspondente ao seu dispositivo."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Instalar o aplicativo",
        text: "Siga as instruções específicas do seu dispositivo para instalar o aplicativo XCloud IPTV corretamente."
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Configurar o acesso",
        text: "Após a instalação, configure seu acesso usando as credenciais fornecidas após a assinatura do serviço."
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Começar a assistir",
        text: "Pronto! Agora você pode começar a assistir seus conteúdos favoritos através do XCloud IPTV.",
        image: "https://xcloudiptv.com.br/xcloud-iptv-interface-streaming-app.webp"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Schema para instalação específica do Android TV
export function AndroidTVInstallationHowToSchema() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "HowTo",
    name: "Como Instalar XCloud IPTV no Android TV - Passo a Passo",
    description: "Guia completo para instalar XCloud IPTV em Android TV usando o aplicativo Downloader. Aprenda a ativar fontes desconhecidas e instalar o aplicativo.",
    totalTime: "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "BRL",
      value: "0"
    },
    supply: [
      { "@type": "HowToSupply", name: "Android TV" },
      { "@type": "HowToSupply", name: "Conexão com internet" }
    ],
    tool: [
      { "@type": "HowToTool", name: "Controle remoto" },
      { "@type": "HowToTool", name: "Downloader app" }
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Instalar Downloader",
        text: "Vá para a Google Play Store da sua Android TV e instale o aplicativo 'Downloader'."
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Ativar fontes desconhecidas",
        text: "Vá em Configurações > Segurança e restrições > Ativar 'Fontes desconhecidas' para o Downloader."
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Abrir o Downloader",
        text: "Abra o aplicativo Downloader e insira a URL do XCloud IPTV fornecida no site oficial."
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Fazer download e instalar",
        text: "Clique em 'Go' para baixar o aplicativo XCloud IPTV e depois clique em 'Instalar'."
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Abrir o XCloud IPTV",
        text: "Após a instalação, abra o aplicativo XCloud IPTV e configure com suas credenciais.",
        image: "https://xcloudiptv.com.br/xcloud-iptv-interface-streaming-app.webp"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}