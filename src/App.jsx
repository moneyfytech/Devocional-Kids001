import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import InsideLook from './components/InsideLook';
import WhatYouGet from './components/WhatYouGet';
import Transformation from './components/Transformation';
import Bonus from './components/Bonus';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

const StickyBar = () => (
  <div className="sticky-bar" id="sticky-bar" role="complementary" aria-label="Oferta rápida">
    <div className="sticky-bar-inner">
      <div className="sticky-bar-text">
        <span className="sticky-emoji">📖</span>
        <span><strong>Devocional Kids</strong> — 30 dias com Deus</span>
        <span className="sticky-divider">|</span>
        <span className="sticky-price">R$ 19,90</span>
      </div>
      <a href="#comprar" className="btn-cta sticky-cta" id="sticky-cta-btn">
        🙏 QUERO COMEÇAR AGORA
      </a>
    </div>
  </div>
);

function App() {
  return (
    <>
      <StickyBar />
      <main>
        <Hero />
        <Benefits />
        <InsideLook />
        <WhatYouGet />
        <Transformation />
        <Bonus />
        <BeforeAfter />
        <Testimonials />
        <Offer />
        <Guarantee />
      </main>
      <Footer />

      <style>{`
        /* ===== STICKY BAR ===== */
        .sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
          padding: 12px 24px;
          background: linear-gradient(90deg, #003D55 0%, #005A7A 60%, #006FA8 100%);
          border-top: 3px solid #FFD21F;
          box-shadow: 0 -4px 32px rgba(0,0,0,0.28);
        }

        .sticky-bar-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .sticky-bar-text {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          font-weight: 700;
          font-size: 0.95rem;
          flex-wrap: wrap;
        }

        .sticky-emoji { font-size: 1.3rem; }

        .sticky-divider {
          color: rgba(255,255,255,0.3);
        }

        .sticky-price {
          font-family: 'Fredoka One', cursive;
          font-size: 1.3rem;
          color: #FFD21F;
          line-height: 1;
        }

        .sticky-cta {
          font-size: 0.92rem;
          padding: 13px 26px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* ===== OFFER PRE-HEADLINE ===== */
        .offer-pre-headline {
          text-align: center;
          margin-bottom: 20px;
        }

        .offer-pre-headline p {
          font-size: 1.05rem;
          color: #3A5068;
          font-weight: 600;
          line-height: 1.6;
        }

        .offer-pre-headline p:first-child {
          font-size: 1.15rem;
          color: #005A7A;
          font-weight: 800;
          margin-bottom: 4px;
        }

        /* ===== PAGE BOTTOM PADDING ===== */
        body { padding-bottom: 68px; }

        /* ===== RESPONSIVE STICKY ===== */
        @media (max-width: 640px) {
          .sticky-bar { padding: 10px 16px; }

          .sticky-bar-inner {
            flex-direction: column;
            gap: 10px;
          }

          .sticky-bar-text {
            justify-content: center;
            font-size: 0.88rem;
          }

          .sticky-cta {
            width: 100%;
            text-align: center;
            padding: 15px 20px;
            font-size: 1rem;
          }

          body { padding-bottom: 130px; }
        }
      `}</style>
    </>
  );
}

export default App;
