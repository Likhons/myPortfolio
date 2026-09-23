import { useState } from 'react';

const projects = [
  { id: 1, category: 'web', img: `${import.meta.env.BASE_URL}portfolio1.jpg`, title: 'Web Design', desc: 'A modern responsive website with clean UI design.' },
  { id: 2, category: 'web', img: `${import.meta.env.BASE_URL}portfolio2.jpg`, title: 'Landing Page', desc: 'Fully responsive landing page with animations.' },
  { id: 3, category: 'graphic', img: `${import.meta.env.BASE_URL}portfolio3.jpg`, title: 'Graphic Design', desc: 'Creative poster and banner design for social media.' },
  { id: 4, category: 'web', img: `${import.meta.env.BASE_URL}portfolio4.jpg`, title: 'Portfolio Site', desc: 'Personal portfolio with dark theme and smooth animations.' },
  { id: 5, category: 'graphic', img: `${import.meta.env.BASE_URL}portfolio5.jpg`, title: 'Brand Identity', desc: 'Logo and branding design for a local business.' },
];

function Portfolio() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>
      <p className="section-subtitle">Some of my recent work</p>

      <div className="portfolio-filter">
        <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`filter-btn ${filter === 'web' ? 'active' : ''}`} onClick={() => setFilter('web')}>Web Design</button>
        <button className={`filter-btn ${filter === 'graphic' ? 'active' : ''}`} onClick={() => setFilter('graphic')}>Graphic</button>
      </div>

      <div className="portfolio-container">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`portfolio-box ${filter !== 'all' && filter !== p.category ? 'hidden' : ''}`}
            data-category={p.category}
          >
            <img src={p.img} alt={p.title} loading="lazy" />
            <div className="portfolio-layer">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <a href="https://github.com/Likhons" target="_blank" rel="noopener" aria-label="View project">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;