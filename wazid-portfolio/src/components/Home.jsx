import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const SOCIAL_LINKS = [
  { href: 'https://www.facebook.com/Wazid.Official1', icon: 'bxl-facebook', label: 'Facebook' },
  { href: 'https://instagram.com/hasanwazid', icon: 'bxl-instagram', label: 'Instagram' },
  { href: 'https://www.tiktok.com/@wazidhasan07', icon: 'bxl-tiktok', label: 'TikTok' },
  { href: 'https://github.com/Likhons', icon: 'bxl-github', label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UCyM6jYpH5CgvLDOHUL7vHng', icon: 'bxl-youtube', label: 'YouTube' },
];

function Home() {
  const typedElRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElRef.current, {
      strings: ['Frontend Developer', 'UI/UX Enthusiast', 'YouTuber', 'CSE Student'],
      typeSpeed: 80,
      backSpeed: 55,
      backDelay: 1600,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="home-greeting">Hello, It's Me 👋</p>
        <h1>Wazid Hasan <span>Likhon</span></h1>
        <h3>I'm a <span className="multiple-text" ref={typedElRef}></span></h3>
        <p className="home-desc">
          CSE student at Daffodil International University, passionate about building
          beautiful and functional web experiences. Always eager to learn and grow in the tech world.
        </p>
         <div className="social-media">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
              <i className={`bx ${s.icon}`}></i>
            </a>
          ))}
        </div>
        <div className="home-buttons">
  <a href={`${import.meta.env.BASE_URL}download-cv.pdf`} className="btn" download>
    <i className="bx bx-download"></i> Download CV
  </a>
  <a href="#contact" className="btn btn-outline">Hire Me</a>
</div>
      </div>

      <div className="home-img">
        <div className="img-glow"></div>
        <img src={`${import.meta.env.BASE_URL}dev-5.png`} alt="Wazid Hasan Likhon" loading="eager" />
      </div>
    </section>
  );
}

export default Home;