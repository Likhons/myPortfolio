import { useEffect, useRef } from 'react';

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.skill-progress').forEach((bar) => {
              bar.style.width = bar.getAttribute('data-width') + '%';
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      {/* everything below is unchanged from Step 4 — keep it as-is */}
      <h2 className="heading">My <span>Skills</span></h2>
      <p className="section-subtitle">Technologies I work with</p>

      <div className="skills-container">
        <div className="skills-left">
          <h3>Technical Skills</h3>

          <div className="skill-item">
            <div className="skill-info"><span>HTML5</span><span>90%</span></div>
            <div className="skill-bar"><div className="skill-progress" data-width="90"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>CSS3</span><span>85%</span></div>
            <div className="skill-bar"><div className="skill-progress" data-width="85"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>JavaScript</span><span>75%</span></div>
            <div className="skill-bar"><div className="skill-progress" data-width="75"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>Responsive Design</span><span>88%</span></div>
            <div className="skill-bar"><div className="skill-progress" data-width="88"></div></div>
          </div>
          <div className="skill-item">
            <div className="skill-info"><span>Graphic Design</span><span>70%</span></div>
            <div className="skill-bar"><div className="skill-progress" data-width="70"></div></div>
          </div>
        </div>

        <div className="skills-right">
          <h3>Tools &amp; Technologies</h3>
          <div className="tools-grid">
            <div className="tool-card"><i className="bx bxl-html5"></i><span>HTML5</span></div>
            <div className="tool-card"><i className="bx bxl-css3"></i><span>CSS3</span></div>
            <div className="tool-card"><i className="bx bxl-javascript"></i><span>JavaScript</span></div>
            <div className="tool-card"><i className="bx bxl-git"></i><span>Git</span></div>
            <div className="tool-card"><i className="bx bxl-github"></i><span>GitHub</span></div>
            <div className="tool-card"><i className="bx bxl-figma"></i><span>Figma</span></div>
            <div className="tool-card"><i className="bx bxl-bootstrap"></i><span>Bootstrap</span></div>
            <div className="tool-card"><i className="bx bx-code-curly"></i><span>VS Code</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;