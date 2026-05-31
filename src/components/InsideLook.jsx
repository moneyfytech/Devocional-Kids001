import React from 'react';
import './InsideLook.css';

const pages = [
  {
    id: 'daily',
    icon: '📖',
    label: 'Devocional do Dia',
    color: '#0088C9',
    image: '/paginas_internas_pdf.png',
    imageAlt: 'Página de devocional diário do Devocional Kids',
  },
  {
    id: 'prayer',
    icon: '🙏',
    label: 'Oração do Dia',
    color: '#FF6B9D',
    image: '/planner_oracao_infantil.png',
    imageAlt: 'Página de oração infantil do Devocional Kids',
  },
  {
    id: 'activity',
    icon: '✏️',
    label: 'Atividade Bíblica',
    color: '#8CCB2E',
    image: '/atividades_biblicas_kit.png',
    imageAlt: 'Página de atividades bíblicas do Devocional Kids',
  },
  {
    id: 'cards',
    icon: '🃏',
    label: 'Cartões de Versículos',
    color: '#FFD21F',
    image: '/cartoes_versiculos_kids.png',
    imageAlt: 'Cartões de versículos bíblicos do Devocional Kids',
  },
];

const InsideLook = () => {
  return (
    <section className="inside-look">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#FFD21F"/>
        </svg>
      </div>

      <div className="inside-inner section-padding">
        <div className="section-container">
          <div className="inside-header">
            <span className="badge badge-blue">👀 Veja como é por dentro</span>
            <h2 className="inside-title">
              Material pronto, bonito e fácil de usar — já no primeiro dia
            </h2>
            <p className="inside-desc">
              Abra o PDF, sente com seu filho e comece. Não precisa de nenhuma preparação prévia.
            </p>
          </div>

          <div className="inside-grid">
            {pages.map((page) => (
              <div className="page-preview" key={page.id}>
                <div className="page-tab" style={{ background: page.color }}>
                  <span>{page.icon}</span>
                  <span>{page.label}</span>
                </div>
                <div className="page-card-img">
                  <div className="pci-frame" style={{ borderColor: page.color + '50' }}>
                    <div className="pci-topbar" style={{ background: page.color }}></div>
                    <img
                      src={page.image}
                      alt={page.imageAlt}
                      className="pci-img"
                      loading="lazy"
                    />
                    <div className="pci-overlay">
                      <span className="pci-overlay-badge" style={{ background: page.color }}>
                        {page.icon} {page.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="inside-cta">
            <a href="#comprar" className="btn-cta">
              ⚡ QUERO COMEÇAR A ROTINA COM DEUS
            </a>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#005A7A"/>
        </svg>
      </div>
    </section>
  );
};

export default InsideLook;
