function Services() {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <p className="section-subtitle">What I can do for you</p>

      <div className="services-container">
        <div className="services-box">
          <div className="services-icon"><i className="bx bx-code-alt"></i></div>
          <h3>Web Development</h3>
          <p>Building fast, responsive, and accessible websites using modern HTML, CSS, and JavaScript best practices.</p>
          <a href="https://www.codestackr.com/blog/web-development-roadmap-2023" className="btn" target="_blank" rel="noopener">Learn More</a>
        </div>
        <div className="services-box">
          <div className="services-icon"><i className="bx bx-paint"></i></div>
          <h3>UI/UX Design</h3>
          <p>Creating visually appealing interfaces with clean layouts, thoughtful typography, and great user experience.</p>
          <a href="https://dribbble.com/resources/2023-graphic-design-trends" className="btn" target="_blank" rel="noopener">Learn More</a>
        </div>
        <div className="services-box">
          <div className="services-icon"><i className="bx bx-line-chart"></i></div>
          <h3>Digital Marketing</h3>
          <p>Growing online presence through Social Media Marketing, Content Strategy, and Search Engine Optimization.</p>
          <a href="https://digitalmarketinginstitute.com/blog/what-are-the-top-digital-marketing-trends-for-2023" className="btn" target="_blank" rel="noopener">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Services;