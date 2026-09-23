import { useEffect, useRef } from 'react';

function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cursor = cursorRef.current;
    let cursorX = 0, cursorY = 0, raf;

    function handleMouseMove(e) {
      cursorX = e.clientX;
      cursorY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          cursor.style.left = cursorX + 'px';
          cursor.style.top = cursorY + 'px';
          raf = null;
        });
      }
    }

    function handleEnter() {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.opacity = '0.5';
    }
    function handleLeave() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = '1';
    }

    const targets = document.querySelectorAll('a, button, .btn, .tool-card, .portfolio-box, .filter-btn');
    document.addEventListener('mousemove', handleMouseMove);
    targets.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return <div className="cursor-glow" ref={cursorRef}></div>;
}

export default CursorGlow;