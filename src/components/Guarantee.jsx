import React from 'react';
import './Guarantee.css';

const Guarantee = () => {
  return (
    <section className="guarantee">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z" fill="#E8F7FF"/>
        </svg>
      </div>

      <div className="guarantee-inner section-padding">
        <div className="section-container">
          <div className="guarantee-layout">

            {/* Shield illustration */}
            <div className="guarantee-shield float-slow">
              <div className="shield-outer">
                <div className="shield-inner">
                  <div className="shield-icon">🛡️</div>
                  <div className="shield-days">7</div>
                  <div className="shield-label">DIAS</div>
                  <div className="shield-sub">GARANTIA</div>
                </div>
              </div>
              <div className="shield-glow"></div>

              <div className="orbit-dot orbit-dot-1">✅</div>
              <div className="orbit-dot orbit-dot-2">🔒</div>
              <div className="orbit-dot orbit-dot-3">💰</div>
            </div>

            {/* Content */}
            <div className="guarantee-content">
              <span className="badge badge-yellow">🛡️ Você não tem nada a perder</span>
              <h2 className="guarantee-title">
                Teste por 7 dias —<br />sem risco nenhum
              </h2>
              <p className="guarantee-text">
                Baixe agora, abra o PDF com seu filho e faça o primeiro devocional hoje mesmo. 
                Se dentro de <strong>7 dias</strong> você sentir que não foi o que esperava, 
                basta nos avisar e devolvemos cada centavo.
              </p>
              <p className="guarantee-text">
                <strong>Sem perguntas, sem burocracia, sem enrolação.</strong>{' '}
                Porque a gente sabe que quando você experimenta, vai se apaixonar.
              </p>

              <div className="guarantee-points">
                <div className="gp-item">
                  <span>✅</span>
                  <span>Reembolso integral — é só pedir</span>
                </div>
                <div className="gp-item">
                  <span>✅</span>
                  <span>Processo simples e rápido, sem burocracia</span>
                </div>
                <div className="gp-item">
                  <span>✅</span>
                  <span>Zero risco — todo o risco é nosso</span>
                </div>
              </div>

              <a href="#comprar" className="btn-cta">
                🙏 QUERO COMEÇAR AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
