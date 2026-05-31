import React from 'react';
import './Benefits.css';

const benefits = [
  {
    icon: '🙏',
    color: '#0088C9',
    title: 'Sem precisar improvisar',
    text: 'O material já vem pronto. Você abre, lê com seu filho e pronto — sem preparação, sem complicação.',
  },
  {
    icon: '📚',
    color: '#8CCB2E',
    title: 'Linguagem que a criança entende',
    text: 'Cada devocional foi escrito de forma simples, leve e adaptada para crianças — sem termos difíceis.',
  },
  {
    icon: '👨‍👩‍👧',
    color: '#FF6B9D',
    title: 'Fortalece o vínculo em família',
    text: 'Pais, avós e filhos oram e aprendem juntos. 10 minutos que criam uma memória afetiva e espiritual.',
  },
  {
    icon: '🎨',
    color: '#FFD21F',
    title: 'A criança quer fazer de novo',
    text: 'Cada dia tem uma atividade diferente. A criança se envolve, desenha, escreve e aprende brincando.',
  },
];

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#8CCB2E"/>
        </svg>
      </div>

      <div className="benefits-inner section-padding">
        <div className="section-container">
          <div className="benefits-header">
            <span className="badge badge-yellow">🌟 Por que funciona</span>
            <h2 className="benefits-title">
              Simples para você.<br />Transformador para seu filho.
            </h2>
            <p className="benefits-desc">
              Você não precisa ser professora de teologia. Precisa apenas de 10 minutos e vontade de plantar a fé no coração do seu filho.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card card" key={i}>
                <div className="benefit-icon" style={{ background: b.color + '20', borderColor: b.color + '40' }}>
                  <span className="benefit-emoji">{b.icon}</span>
                </div>
                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-text">{b.text}</p>
                <div className="benefit-card-bar" style={{ background: b.color }}></div>
              </div>
            ))}
          </div>

          <div className="benefits-mockup">
            <div className="benefits-mockup-inner float">
              <div className="bm-cover">
                <div className="bm-top-band"></div>
                <div className="bm-content">
                  <div style={{ fontSize: '3rem' }}>✝️</div>
                  <h3 style={{ fontFamily: 'Fredoka One, cursive', color: '#005A7A', fontSize: '1.8rem', lineHeight: 1.2 }}>
                    Devocional<br />Kids
                  </h3>
                  <div style={{ fontSize: '2.5rem', margin: '8px 0' }}>👧📖✏️</div>
                  <div className="bm-badge">30 Dias com Deus</div>
                </div>
              </div>
            </div>
            <div className="benefits-mockup-glow"></div>
          </div>

          <div className="benefits-cta">
            <a href="#comprar" className="btn-cta">
              🙏 QUERO O DEVOCIONAL KIDS
            </a>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#FFD21F"/>
        </svg>
      </div>
    </section>
  );
};

export default Benefits;
