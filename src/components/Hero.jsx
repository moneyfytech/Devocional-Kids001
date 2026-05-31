import React from 'react';
import './Hero.css';

const floatingDecorations = [
  { emoji: '☁️', className: 'deco-cloud deco-1' },
  { emoji: '☁️', className: 'deco-cloud deco-2' },
  { emoji: '☁️', className: 'deco-cloud deco-3' },
  { emoji: '⭐', className: 'deco-star deco-4' },
  { emoji: '✨', className: 'deco-star deco-5' },
  { emoji: '⭐', className: 'deco-star deco-6' },
  { emoji: '💛', className: 'deco-heart deco-7' },
  { emoji: '💙', className: 'deco-heart deco-8' },
  { emoji: '❤️', className: 'deco-heart deco-9' },
  { emoji: '✝️', className: 'deco-cross deco-10' },
  { emoji: '🌈', className: 'deco-misc deco-11' },
];

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="bg-dots"></div>

      <div className="hero-decos" aria-hidden="true">
        {floatingDecorations.map((d, i) => (
          <span key={i} className={`hero-deco ${d.className}`}>{d.emoji}</span>
        ))}
      </div>

      <div className="hero-container section-container">

        {/* ——— LEFT: Content ——— */}
        <div className="hero-content">

          <div className="hero-top-badge">
            <span className="htb-dot"></span>
            <span>Para mães, pais e ministérios infantis</span>
            <span className="htb-dot"></span>
          </div>

          <h1 className="hero-headline">
            Seu filho pode crescer com Deus no coração —{' '}
            <span className="hero-highlight">
              <span className="hero-highlight-inner">em apenas 10 minutos por dia</span>
            </span>
          </h1>

          <p className="hero-subheadline">
            O <strong>Devocional Kids</strong> é um material cristão em PDF, pronto para usar,
            com <strong>30 dias</strong> de versículos, reflexões, orações e atividades simples
            — para você não precisar saber por onde começar.
          </p>

          <ul className="hero-bullets" role="list">
            {[
              { icon: '📖', text: '30 devocionais completos, um por dia' },
              { icon: '🙏', text: 'Orações no nível da criança, fáceis de repetir' },
              { icon: '✏️', text: 'Atividades que tornam o aprendizado divertido' },
              { icon: '⚡', text: 'Baixe agora e comece hoje mesmo' },
            ].map((b, i) => (
              <li key={i}>
                <span className="bullet-chip">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          <div className="hero-cta-group">
            <a href="#comprar" className="btn-cta btn-pulse hero-btn" id="hero-cta-btn">
              🙏 QUERO APROXIMAR MEU FILHO DE DEUS
            </a>
            <p className="hero-cta-note">🔒 Compra segura · Acesso imediato · Garantia de 7 dias</p>
          </div>

          <div className="hero-trust">
            <div className="trust-pill">⭐⭐⭐⭐⭐ <strong>+500 famílias</strong></div>
            <div className="trust-pill">🛡️ <strong>Garantia 7 dias</strong></div>
            <div className="trust-pill">📲 <strong>PDF instantâneo</strong></div>
          </div>
        </div>

        {/* ——— RIGHT: Mockup ——— */}
        <div className="hero-mockup-col">
          <div className="hero-mockup-wrap float-slow">
            <div className="mockup-halo"></div>

            <div className="mockup-book-card">
              <img
                src="/capa_devocional_kids.png"
                alt="Capa do Devocional Kids — 30 Dias Aprendendo com Deus"
                className="mockup-book-img"
                loading="eager"
              />
              <div className="mockup-book-badge">📥 PDF · Acesso Imediato</div>
            </div>

            <div className="mockup-shadow-blur"></div>
          </div>

          <div className="fbadge fbadge-1 float" style={{ animationDelay: '0.2s' }}>
            <span>🎯</span><span>10 min/dia</span>
          </div>
          <div className="fbadge fbadge-2 float" style={{ animationDelay: '1.1s' }}>
            <span>❤️</span><span>30 dias</span>
          </div>
          <div className="fbadge fbadge-3 float" style={{ animationDelay: '0.6s' }}>
            <span>⭐</span><span>Para crianças</span>
          </div>
        </div>
      </div>

      <div className="hero-wave-stack" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hw-layer hw-layer-1">
          <path d="M0,60 C180,110 360,10 540,60 C720,110 900,10 1080,60 C1260,110 1380,40 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.08)"/>
        </svg>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hw-layer hw-layer-2">
          <path d="M0,70 C200,20 400,110 600,70 C800,20 1000,110 1200,70 C1320,46 1400,80 1440,70 L1440,120 L0,120 Z" fill="rgba(140,203,46,0.25)"/>
        </svg>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="hw-layer hw-layer-3">
          <path d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z" fill="#8CCB2E"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
