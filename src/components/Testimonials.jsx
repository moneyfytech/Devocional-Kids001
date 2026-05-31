import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    avatar: '👩',
    name: 'Camila M.',
    role: 'Mãe da Sofia, 6 anos',
    stars: 5,
    text: '"Eu não sabia por onde começar. Comprei, abri o PDF e na mesma noite fizemos o primeiro devocional. Minha filha amou tanto que agora ela que me chama para orar antes de dormir. Isso não tem preço!"',
    color: '#0088C9',
  },
  {
    id: 2,
    avatar: '👩‍🦱',
    name: 'Renata S.',
    role: 'Mãe do Miguel, 8 anos',
    stars: 5,
    text: '"Simples, bonito e muito fácil de usar. Meu filho entende tudo, se envolve com as atividades e pede para fazer todo dia. É o material que eu precisava e não sabia que existia."',
    color: '#8CCB2E',
  },
  {
    id: 3,
    avatar: '👩‍🏫',
    name: 'Ana Paula R.',
    role: 'Coordenadora do ministério infantil',
    stars: 5,
    text: '"Usei com as crianças da escola bíblica e a turma inteira participou. As atividades são criativas, o conteúdo é bíblico e o visual é muito atrativo. Recomendo para todo líder de ministério infantil!"',
    color: '#FF6B9D',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials section-padding">
      <div className="wave-top testimonials-wave-top">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z" fill="#F5F7FA"/>
        </svg>
      </div>

      <div className="section-container">
        <div className="testimonials-header">
          <span className="badge badge-blue">💬 Quem já começou</span>
          <h2 className="testimonials-title">Elas não sabiam por onde começar.<br />Hoje não conseguem parar.</h2>
          <p className="testimonials-desc">
            Mais de 500 famílias — incluindo mães, avós, professoras e líderes de ministério — já estão vivendo isso.
          </p>
        </div>

        <div className="testimonials-stars-row">
          <span>⭐⭐⭐⭐⭐</span>
          <strong>+500 famílias transformadas</strong>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="tc-top">
                <div className="tc-avatar" style={{ background: t.color + '20', borderColor: t.color }}>
                  <span>{t.avatar}</span>
                </div>
                <div className="tc-info">
                  <p className="tc-name" style={{ color: t.color }}>{t.name}</p>
                  <p className="tc-role">{t.role}</p>
                  <div className="tc-stars">{'⭐'.repeat(t.stars)}</div>
                </div>
              </div>
              <div className="tc-quote-icon" style={{ color: t.color }}>❝</div>
              <p className="tc-text">{t.text}</p>
              <div className="tc-verified">
                <span>✅</span>
                <span>Compra verificada</span>
              </div>
              <div className="tc-color-bar" style={{ background: t.color }}></div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <p className="testimonials-cta-text">
            A próxima história pode ser a sua — e a do seu filho. ❤️
          </p>
          <a href="#comprar" className="btn-cta">
            🙏 QUERO COMEÇAR A ROTINA COM DEUS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
