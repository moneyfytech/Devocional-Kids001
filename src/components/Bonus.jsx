import React from 'react';
import './Bonus.css';

const bonuses = [
  {
    icon: '🃏',
    num: '01',
    title: 'Cartões de Versículos Kids',
    desc: '30 cartões digitais coloridos e lindos para imprimir, fixar no quarto e ajudar a criança a memorizar a Palavra de Deus com alegria.',
    color: '#0088C9',
    value: 'R$ 17,00',
    image: '/cartoes_versiculos_kids.png',
    imageAlt: 'Cartões de versículos bíblicos infantis',
  },
  {
    icon: '📅',
    num: '02',
    title: 'Planner de Oração Infantil',
    desc: 'Um diário de orações fofinho para a criança registrar o que pede a Deus e o que Ele já respondeu — forma o hábito de orar todo dia.',
    color: '#FF6B9D',
    value: 'R$ 12,00',
    image: '/planner_oracao_infantil.png',
    imageAlt: 'Planner de oração infantil cristão',
  },
  {
    icon: '🏆',
    num: '03',
    title: 'Certificado de Conclusão',
    desc: 'Uma surpresa especial para celebrar os 30 dias! A criança se sente incrível — e você vai querer emoldurar.',
    color: '#FFD21F',
    value: 'R$ 10,00',
    image: '/certificado_conclusao_kids.png',
    imageAlt: 'Certificado de conclusão dos 30 dias',
  },
];

const Bonus = () => {
  return (
    <section className="bonus">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="#FFFFFF"/>
        </svg>
      </div>

      <div className="bonus-inner section-padding">
        <div className="section-container">
          <div className="bonus-header">
            <span className="badge badge-yellow">🎁 Surpresa incluída</span>
            <h2 className="bonus-title">Bônus especiais que vêm junto — sem custo extra</h2>
            <p className="bonus-desc">
              Além do devocional completo, você recebe esses materiais que vão complementar ainda mais a rotina do seu filho com Deus.
            </p>
          </div>

          <div className="bonus-grid">
            {bonuses.map((b, i) => (
              <div className="bonus-card" key={i}>
                {/* Number badge */}
                <div className="bonus-num" style={{ background: b.color }}>{b.num}</div>

                {/* Product image */}
                <div className="bonus-img-wrap">
                  <img
                    src={b.image}
                    alt={b.imageAlt}
                    className="bonus-img"
                    loading="lazy"
                  />
                  <div className="bonus-img-glow" style={{ background: b.color + '30' }}></div>
                </div>

                {/* Value tag */}
                <div className="bonus-value-row">
                  <span className="bonus-value-label">Valeria</span>
                  <strong className="bonus-value-price" style={{ color: b.color }}>{b.value}</strong>
                </div>

                <h3 className="bonus-card-title" style={{ color: b.color }}>{b.title}</h3>
                <p className="bonus-card-desc">{b.desc}</p>
                <div className="bonus-free-tag">
                  <span>✅ Grátis para você hoje!</span>
                </div>

                {/* Color accent bar */}
                <div className="bonus-bottom-bar" style={{ background: b.color }}></div>
              </div>
            ))}
          </div>

          <div className="bonus-total-banner">
            <div className="btb-content">
              <p className="btb-label">Valor total de tudo isso</p>
              <div className="btb-prices">
                <span className="btb-original">R$ 86,00</span>
                <span className="btb-arrow">→</span>
                <span className="btb-price">apenas R$ 19,90</span>
              </div>
              <p className="btb-sub">Acesso imediato · PDF completo · Garantia de 7 dias sem risco</p>
            </div>
            <a href="#comprar" className="btn-cta">
              🎁 QUERO APROVEITAR ESSA OFERTA
            </a>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="#FFD21F"/>
        </svg>
      </div>
    </section>
  );
};

export default Bonus;
