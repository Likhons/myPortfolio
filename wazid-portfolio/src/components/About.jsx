function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
      <img src={`${import.meta.env.BASE_URL}about.png`} alt="About Wazid" loading="lazy" />
      </div>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer & CSE Student</h3>
        <p>
          I'm a passionate frontend developer currently pursuing my B.Sc. in Computer Science
          and Engineering at Daffodil International University. I specialize in crafting
          clean, responsive, and user-friendly web interfaces.
        </p>
        <p>
          I love turning ideas into reality through code. When I'm not coding,
          you'll find me creating content on YouTube or exploring the latest tech trends.
        </p>
        <div className="about-stats">
          <div className="stat-box">
            <h4>1+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h4>10+</h4>
            <p>Projects Done</p>
          </div>
          <div className="stat-box">
            <h4>5+</h4>
            <p>Happy Clients</p>
          </div>
        </div>
        <a href="#contact" className="btn">Let's Talk</a>
      </div>
    </section>
  );
}

export default About;