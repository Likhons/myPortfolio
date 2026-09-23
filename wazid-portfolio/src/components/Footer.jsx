
const FOOTER_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const FOOTER_SOCIAL = [
  { href: 'https://www.facebook.com/Wazid.Official1', icon: 'bxl-facebook', label: 'Facebook' },
  { href: 'https://instagram.com/hasanwazid', icon: 'bxl-instagram', label: 'Instagram' },
  { href: 'https://github.com/Likhons', icon: 'bxl-github', label: 'GitHub' },
  { href: 'https://www.youtube.com/channel/UCyM6jYpH5CgvLDOHUL7vHng', icon: 'bxl-youtube', label: 'YouTube' },
];
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#" className="logo">W<span>.</span>Likhon</a>
          <p>Frontend Developer & CSE Student passionate about creating beautiful web experiences.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            {FOOTER_SOCIAL.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                <i className={`bx ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright &copy; 2024 Wazid Hasan Likhon. All Rights Reserved.</p>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;