import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner section-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">✝️</span>
              <div>
                <h2 className="footer-logo-name">Devocional Kids</h2>
                <p className="footer-logo-sub">30 dias aprendendo com Deus</p>
              </div>
            </div>
            <p className="footer-brand-desc">
              Produto digital em PDF. Acesso enviado imediatamente após a confirmação da compra.
              Ideal para mães, pais, avós, professoras e líderes de ministério infantil.
            </p>
          </div>

          <div className="footer-info">
            <h4 className="footer-info-title">Links</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">📄 Termos de uso</a></li>
              <li><a href="#" className="footer-link">🔒 Política de privacidade</a></li>
              <li><a href="#" className="footer-link">💬 Falar com o suporte</a></li>
              <li><a href="#comprar" className="footer-link">🛒 Comprar agora</a></li>
            </ul>
          </div>

          <div className="footer-cta-col">
            <h4 className="footer-info-title">Comece ainda hoje!</h4>
            <div className="footer-price">
              <span className="footer-price-from">De R$ 47,00 por apenas</span>
              <span className="footer-price-now">R$ 19,90</span>
            </div>
            <a href="#comprar" className="btn-cta footer-cta-btn">
              🙏 QUERO O DEVOCIONAL KIDS
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Devocional Kids · Todos os direitos reservados.
          </p>
          <p className="footer-disclaimer">
            Este é um produto digital entregue em formato PDF. Após a confirmação do pagamento, 
            o acesso é enviado automaticamente para o e-mail cadastrado. Garantia de 7 dias conforme o Código do Consumidor.
          </p>
          <div className="footer-seals">
            <span>🔒 Compra segura</span>
            <span>•</span>
            <span>⚡ Acesso imediato</span>
            <span>•</span>
            <span>🛡️ Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
