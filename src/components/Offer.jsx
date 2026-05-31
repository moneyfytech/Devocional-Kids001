import React from 'react';
import './Offer.css';

const checklist = [
  { icon: '📕', text: 'Devocional Kids — 30 dias completo' },
  { icon: '🙏', text: 'Orações prontas para rezar junto com seu filho' },
  { icon: '✏️', text: 'Atividades bíblicas divertidas para cada dia' },
  { icon: '🃏', text: 'Cartões de versículos para memorizar a Palavra' },
  { icon: '📅', text: 'Planner de oração infantil' },
  { icon: '🏆', text: 'Certificado de conclusão dos 30 dias' },
  { icon: '⚡', text: 'Baixe agora e comece ainda hoje' },
];

const seals = [
  { icon: '🔒', label: 'Compra segura', sub: '100% protegida' },
  { icon: '⚡', label: 'Acesso imediato', sub: 'Baixe agora' },
  { icon: '🛡️', label: 'Garantia 7 dias', sub: 'Sem risco nenhum' },
];

const Offer = () => {
  return (
    <section className="offer" id="comprar">
      <div className="offer-dots"></div>

      <div className="offer-inner section-padding">
        <div className="section-container">

          {/* Pre-headline */}
          <div className="offer-pre-headline">
            <p>Você chegou até aqui porque quer isso para o seu filho. ❤️</p>
            <p>Agora é só dar um passo.</p>
          </div>

          <div className="offer-super-badge">
            <span className="offer-fire">🔥</span>
            <span>OFERTA ESPECIAL</span>
            <span className="offer-fire">🔥</span>
          </div>

          <div className="offer-card">
            {/* LEFT: Mockup */}
            <div className="offer-mockup">
              <div className="offer-product float-slow">
                {/* Main product */}
                <div className="op-main-img-wrap">
                  <img
                    src="/capa_devocional_kids.png"
                    alt="Devocional Kids — 30 Dias Aprendendo com Deus"
                    className="op-main-img"
                    loading="eager"
                  />
                  <div className="op-main-badge">📥 PDF · Acesso Imediato</div>
                </div>

                {/* Bonus thumbnails */}
                <div className="op-bonus-cards">
                  <div className="op-bonus-card">
                    <img src="/cartoes_versiculos_kids.png" alt="Cartões de versículos" className="op-bonus-img" />
                    <span className="op-bonus-label" style={{ color: '#0088C9' }}>Cartões<br />Versículos</span>
                  </div>
                  <div className="op-bonus-card">
                    <img src="/planner_oracao_infantil.png" alt="Planner de oração" className="op-bonus-img" />
                    <span className="op-bonus-label" style={{ color: '#880E4F' }}>Planner<br />Oração</span>
                  </div>
                  <div className="op-bonus-card">
                    <img src="/certificado_conclusao_kids.png" alt="Certificado de conclusão" className="op-bonus-img" />
                    <span className="op-bonus-label" style={{ color: '#B8860B' }}>Certificado<br />Conclusão</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Offer details */}
            <div className="offer-details">
              <h2 className="offer-headline">
                Tudo que você precisa para começar a rotina de fé do seu filho — agora mesmo
              </h2>

              <ul className="offer-checklist">
                {checklist.map((item, i) => (
                  <li key={i}>
                    <span className="ocl-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="offer-pricing">
                <div className="offer-old-price">
                  <span className="oop-label">Valor total dos materiais</span>
                  <span className="oop-value">R$ 47,00</span>
                </div>
                <div className="offer-new-price">
                  <span className="onp-label">Hoje por apenas</span>
                  <span className="onp-value">R$ 19,90</span>
                </div>
                <div className="offer-installments">
                  ou 2x de R$ 9,95 sem juros
                </div>
              </div>

              <a href="https://pay.cakto.com.br/386hz2m_905953" className="btn-cta offer-cta-btn btn-pulse" id="comprar-btn">
                🙏 QUERO APROXIMAR MEU FILHO DE DEUS
              </a>

              <p className="offer-cta-note">
                🔒 Pagamento seguro · PDF enviado imediatamente após a confirmação
              </p>

              <div className="offer-seals">
                {seals.map((seal, i) => (
                  <div className="offer-seal" key={i}>
                    <span className="seal-icon">{seal.icon}</span>
                    <div>
                      <p className="seal-label">{seal.label}</p>
                      <p className="seal-sub">{seal.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
