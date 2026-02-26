'use client';

import { useState } from 'react';

const helpLinks = [
  {
    href: "https://ajude.io/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnrOrs7KRTE2WHvtzueKm1Q2dxm8L0YOr4bXhXNI1SRqhXv3ohQXC5ZZgJ9XU_aem_ArGA5Vy4UDecevty3kBziQ",
    icon: "💝",
    title: "Faça sua Doação",
    description: "Ajude através da plataforma Ajude.io"
  },
  {
    href: "https://sosminas.growberry.com.br/",
    icon: "🆘",
    title: "SOS Minas",
    description: "Plataforma de ajuda para as cidades de minas"
  },
  {
    href: "https://sosjf.org",
    icon: "🙏",
    title: "SOS JF",
    description: "Portal de ajuda para Juiz de Fora"
  },
  {
    href: "https://ajudajf.arctei.com.br/",
    icon: "🤝",
    title: "Ajuda JF",
    description: "Plataforma de coordenação de ajuda humanitária"
  },
  {
    href: "https://ajuda-imediata.vercel.app/",
    icon: "⚡",
    title: "Ajuda Imediata",
    description: "Sistema de ajuda rápida e emergencial"
  },
  {
    href: "https://studio--studio-9117009730-5014f.us-central1.hosted.app",
    icon: "🤖",
    title: "IA Monitoramento",
    description: "Inteligência artificial para monitoramento de áreas de risco"
  },
  {
    href: "https://emergencia-mg.netlify.app",
    icon: "🚨",
    title: "Emergência MG",
    description: "Portal de emergências para Minas Gerais"
  }
];

export function HelpLinksSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedLinks = showAll ? helpLinks : helpLinks.slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 shadow-2xl">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          🤝 Sites parceiros
        </h2>
        <div className="space-y-4">
          {displayedLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white hover:bg-gray-50 rounded-lg p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{link.title}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
                <span className="text-gray-400">→</span>
              </div>
            </a>
          ))}

          {helpLinks.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg p-3 transition-all duration-200"
            >
              {showAll ? "Ver menos ↑" : "Ver mais ↓"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
