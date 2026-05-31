import React from 'react';
import './Transformation.css';

const Transformation = () => {
  return (
    <section className="transformation section-padding">
      <div className="section-container">
        <div className="transformation-layout">

          {/* LEFT: Illustration */}
          <div className="transformation-visual">
            <div className="transformation-card-visual float-slow">
              <div className="tv-inner">
                <div className="tv-top-band"></div>
                <div className="tv-scene">
                  <div className="tv-child">👧</div>
                  <div className="tv-bible float-fast">📖</div>
                  <div className="tv-pencil float">✏️</div>
                  <div className="tv-heart">❤️</div>
                  <div className="tv-star">⭐</div>
                  <div className="tv-cross">✝️</div>
                </div>
                <div className="tv-caption">
                  <span>📖</span>
                  <span>10 minutinhos que mudam tudo</span>
                </div>
              </div>
            </div>
            <div className="transformation-bg-circle transformation-bg-circle-1"></div>
            <div className="transformation-bg-circle transformation-bg-circle-2"></div>

            <div className="transformation-stat transformation-stat-1 float">
              <span className="stat-emoji">🙏</span>
              <div>
                <p className="stat-num">10 min</p>
                <p className="stat-label">por dia</p>
              </div>
            </div>
            <div className="transformation-stat transformation-stat-2 float" style={{ animationDelay: '1s' }}>
              <span className="stat-emoji">❤️</span>
              <div>
                <p className="stat-num">30 dias</p>
                <p className="stat-label">de transformação</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="transformation-content">
            <span className="badge badge-blue">🌱 O que realmente muda</span>
            <h2 className="transformation-title">
              O que acontece quando<br />você começa essa rotina
            </h2>
            <p className="transformation-intro">
              Não precisa ser pastor, professora de escola bíblica ou ter tempo sobrando. 
              Com 10 minutos por dia, você planta uma semente que vai crescer para sempre no coração do seu filho.
            </p>

            <ul className="transformation-list">
              <li>
                <div className="tl-icon" style={{ background: '#0088C9' }}>📖</div>
                <div>
                  <strong>Seu filho começa a entender quem é Deus — do jeito dele</strong>
                  <p>Com linguagem simples e exemplos do dia a dia, a fé deixa de ser abstrata e vira algo real.</p>
                </div>
              </li>
              <li>
                <div className="tl-icon" style={{ background: '#8CCB2E' }}>🏠</div>
                <div>
                  <strong>A fé entra na rotina da casa de forma natural</strong>
                  <p>Sem pressão, sem obrigação. Uma leiturinha por dia que vira o momento favorito da criança.</p>
                </div>
              </li>
              <li>
                <div className="tl-icon" style={{ background: '#FF6B9D' }}>💛</div>
                <div>
                  <strong>Seu filho aprende a orar, agradecer e amar</strong>
                  <p>Valores cristãos que entram pelo coração — não pelo sermão, mas pela experiência.</p>
                </div>
              </li>
              <li>
                <div className="tl-icon" style={{ background: '#FFD21F' }}>📵</div>
                <div>
                  <strong>Um momento com propósito no lugar do tempo de tela</strong>
                  <p>Atividades que envolvem, divertem e ensinam — sem precisar de celular ou tablet.</p>
                </div>
              </li>
            </ul>

            <a href="#comprar" className="btn-cta">
              🌱 QUERO PLANTAR ESSA SEMENTE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
