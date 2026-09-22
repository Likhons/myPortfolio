import { useEffect, useRef, useState } from 'react';
const NAV_LINKS = [
  { href: '#home', label: 'Home', active: true },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];
function Header() {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const menuIconRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [spin, setSpin] = useState(false);

  const closeNavbar = () => setNavOpen(false);

  // Apply theme to <body> and persist it
  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  // Outside click / Escape key / swipe-left to close the mobile menu
  useEffect(() => {
    if (!navOpen) return;

    function handleOutsideClick(e) {
      if (
        navbarRef.current &&
        menuIconRef.current &&
        !navbarRef.current.contains(e.target) &&
        !menuIconRef.current.contains(e.target)
      ) {
        closeNavbar();
      }
    }

    function handleEscape(e) {
      if (e.key === 'Escape') closeNavbar();
    }

    let touchStartX = 0;
    function handleTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
    }
    function handleTouchEnd(e) {
      const deltaX = touchStartX - e.changedTouches[0].screenX;
      if (deltaX > 60) closeNavbar();
    }

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navOpen]);

  // Sticky header, hide-on-scroll, active nav link, scroll progress bar
  useEffect(() => {
    const header = headerRef.current;
    const sections = document.querySelectorAll('section');
    const navLinks = header.querySelectorAll('nav a');
    let lastScrollY = 0;

    function handleScroll() {
      const scrollY = window.scrollY;

      header.classList.toggle('sticky', scrollY > 80);

      if (scrollY > 300) {
        if (scrollY > lastScrollY + 5 && !navOpen) {
          header.style.transform = 'translateY(-100%)';
        } else if (lastScrollY > scrollY + 5) {
          header.style.transform = 'translateY(0)';
        }
      } else {
        header.style.transform = 'translateY(0)';
      }
      lastScrollY = scrollY;

      let current = '';
      sections.forEach((sec) => {
        if (scrollY >= sec.offsetTop - 250) {
          current = sec.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
      });

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / totalHeight) * 100;
      const bar = document.getElementById('progress-bar');
      if (bar) bar.style.width = progress + '%';
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navOpen]);

  function handleThemeToggle() {
    setSpin(true);
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  }

  return (
    <header className="header" id="header" ref={headerRef}>
      <a href="#" className="logo">W<span>.</span>Likhon</a>

    <nav className={`navbar ${navOpen ? 'active' : ''}`} id="navbar" ref={navbarRef}>
  {NAV_LINKS.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className={link.active ? 'active' : ''}
      onClick={closeNavbar}
    >
      {link.label}
    </a>
  ))}
</nav>

      <div className="header-right">
        <button
          className={`theme-toggle ${spin ? 'spin' : ''}`}
          id="theme-toggle"
          aria-label="Toggle theme"
          onClick={handleThemeToggle}
          onAnimationEnd={() => setSpin(false)}
        >
          <i className={`bx ${theme === 'light' ? 'bx-sun' : 'bx-moon'}`} id="theme-icon"></i>
        </button>
        <div
          id="menu-icon"
          ref={menuIconRef}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onClick={() => setNavOpen((open) => !open)}
        >
          <i className={`bx ${navOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </div>
      </div>
    </header>
  );
}

export default Header;