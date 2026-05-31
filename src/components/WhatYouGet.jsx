import React from 'react';
import './WhatYouGet.css';

const items = [
  {
    icon: '📕',
    title: '30 Devocionais Completos',
    desc: 'Um devocional por dia, com versículo, reflexão e oração — tudo pronto para você ler em voz alta com seu filho.',
    color: '#0088C9',
    badge: 'Principal',
    image: '/capa_devocional_kids.png',
    imageAlt: 'Capa do Devocional Kids',
  },
  {
    icon: '✏️',
    title: 'Atividades Bíblicas para Crianças',
    desc: 'Exercícios criativos que fixam a lição do dia de forma leve e divertida — sem precisar comprar nada extra.',
    color: '#8CCB2E',
    badge: 'Incluso',
    image: '/atividades_biblicas_kit.png',
    imageAlt: 'Kit de atividades bíblicas',
  },
  {
    icon: '🙏',
    title: 'Orações Prontas para Rezar Junto',
    desc: 'Orações simples, escritas na linguagem da criança, para ela aprender a falar com Deus desde cedo.',
    color: '#FF6B9D',
    badge: 'Incluso',
    image: '/paginas_internas_pdf.png',
    imageAlt: 'Páginas de oração do Devocional Kids',
  },
  {
    icon: '⭐',
    title: '30 Versículos para Memorizar',
    desc: 'Versículos selecionados, um por dia, para a criança guardar no coração e levar para a vida toda.',
    color: '#FF8C42',
    badge: 'Incluso',
    image: '/cartoes_versiculos_kids.png',
    imageAlt: 'Cartões de versículos bíblicos',
  },
  {
    icon: '📅',
    title: 'Planner de Oração Infantil',
    desc: 'Caderninho digital para registrar pedidos, respostas e motivos de gratidão — forma hábito de orar todo dia.',
    color: '#9B59B6',
    badge: 'Bônus',
    image: '/planner_oracao_infantil.png',
    imageAlt: 'Planner de oração infantil',
  },
  {
    icon: '🏆',
    title: 'Certificado de Conclusão',
    desc: 'Um presente especial para celebrar os 30 dias! A criança fica orgulhosa — e você também.',
    color: '#FFD21F',
    badge: 'Bônus',
    image: '/certificado_conclusao_kids.png',
    imageAlt: 'Certificado de conclusão dos 30 dias',
  },
];

const WhatYouGet = () => {
  return (
    <section className="wyg">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#005A7A"/>
        </svg>
      </div>

      <div className="wyg-inner section-padding">
        <div className="section-container">
          <div className="wyg-header">
            <span className="badge badge-yellow">🎁 Tudo que você recebe</span>
            <h2 className="wyg-title">
              Tudo pronto para você começar —<br />hoje mesmo, sem complicação
            </h2>
            <p className="wyg-desc">
              Não é um curso. Não é uma assinatura. É um material completo, em PDF, que você baixa agora e usa na mesma hora.
            </p>
          </div>

          <div className="wyg-grid">
            {items.map((item, i) => (
              <div className="wyg-card" key={i}>
                {/* Product image thumbnail */}
                <div className="wyg-img-wrap">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="wyg-img"
                    loading="lazy"
                  />
                  <div className="wyg-img-overlay" style={{ background: item.color + 'CC' }}>
                    <span className="wyg-img-icon">{item.icon}</span>
                  </div>
                </div>

                <div className="wyg-card-body">
                  <div className="wyg-badge-row">
                    <span
                      className="wyg-item-badge"
                      style={{
                        background: item.badge === 'Bônus' ? '#FFD21F' : item.badge === 'Principal' ? '#FF6B9D' : item.color + '22',
                        color: item.badge === 'Bônus' ? '#3A5068' : item.badge === 'Principal' ? 'white' : item.color,
                      }}
                    >
                      {item.badge === 'Bônus' ? '🎁 BÔNUS' : item.badge === 'Principal' ? '⭐ PRINCIPAL' : '✅ INCLUSO'}
                    </span>
                  </div>
                  <h3 className="wyg-card-title" style={{ color: item.color }}>{item.title}</h3>
                  <p className="wyg-card-desc">{item.desc}</p>
                </div>

                <div className="wyg-card-line" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}></div>
              </div>
            ))}
          </div>

          <div className="wyg-cta">
            <a href="#comprar" className="btn-cta">
              🚀 QUERO TUDO ISSO AGORA
            </a>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
  );
};

export default WhatYouGet;
