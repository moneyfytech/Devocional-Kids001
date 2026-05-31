import React from 'react';
import './BeforeAfter.css';

const beforeItems = [
  'A criança cresce sem uma rotina com Deus',
  'Você não sabe por onde começar',
  'O dia passa e a fé fica em segundo plano',
  'Dificuldade de tornar a Bíblia divertida em casa',
];

const afterItems = [
  '10 minutinhos por dia de conexão com Deus',
  'Material pronto — é só abrir e começar',
  'A fé faz parte da rotina da família',
  'Seu filho pede para fazer de novo amanhã',
];

const BeforeAfter = () => {
  return (
    <section className="before-after">
      <div className="wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#FFD21F"/>
        </svg>
      </div>

      <div className="ba-inner section-padding">
        <div className="section-container">
          <div className="ba-header">
            <span className="badge badge-blue">🔄 Antes e depois</span>
            <h2 className="ba-title">Essa realidade é familiar para você?</h2>
            <p className="ba-desc">
              Muitas mães cristãs sentem que deveriam fazer algo, mas não sabem como começar. 
              O Devocional Kids é a ponte entre a vontade e a ação.
            </p>
          </div>

          <div className="ba-comparison">
            <div className="ba-side ba-before">
              <div className="ba-label ba-label-before">
                <span>😔</span>
                <span>HOJE, SEM O MATERIAL</span>
              </div>
              <div className="ba-card">
                <ul className="ba-list">
                  {beforeItems.map((item, i) => (
                    <li key={i} className="ba-item ba-item-before">
                      <span className="ba-item-icon">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="ba-child-sad">😔</div>
              </div>
            </div>

            <div className="ba-arrow-center">
              <div className="ba-arrow-circle">
                <span>→</span>
              </div>
              <div className="ba-arrow-product">
                <div className="ba-mini-mockup">
                  <span>📖</span>
                  <p>Devocional<br />Kids</p>
                </div>
              </div>
            </div>

            <div className="ba-side ba-after">
              <div className="ba-label ba-label-after">
                <span>😊</span>
                <span>COM O DEVOCIONAL KIDS</span>
              </div>
              <div className="ba-card">
                <ul className="ba-list">
                  {afterItems.map((item, i) => (
                    <li key={i} className="ba-item ba-item-after">
                      <span className="ba-item-icon">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="ba-child-happy">😄</div>
              </div>
            </div>
          </div>

          <div className="ba-cta">
            <a href="#comprar" className="btn-cta btn-pulse">
              🙏 QUERO APROXIMAR MEU FILHO DE DEUS
            </a>
          </div>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#F5F7FA"/>
        </svg>
      </div>
    </section>
  );
};

export default BeforeAfter;
