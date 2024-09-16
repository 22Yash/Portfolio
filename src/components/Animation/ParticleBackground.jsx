import React, { useEffect } from 'react';
import './ParticlesComponent.css';

const ParticlesComponent = () => {
  useEffect(() => {
    // Load particles.js
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 200,  // Increased density of stars
            "density": { "enable": true, "value_area": 800 }
          },
          "color": { "value": "#ffffff" },
          "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 },
            "image": { "src": "img/github.svg", "width": 100, "height": 100 }
          },
          "opacity": {
            "value": 1, "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false }
          },
          "size": {
            "value": 1.5,  // Smaller star size
            "random": true,
            "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false }
          },
          "line_linked": {
            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
          },
          "move": {
            "enable": true, "speed": 1, "direction": "none", "random": true,
            "straight": false, "out_mode": "out", "bounce": false,
            "attract": { "enable": false, "rotateX": 600, "rotateY": 600 }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": true, "mode": "grab" },  // Grab effect
            "onclick": { "enable": true, "mode": "repulse" },  // Repulse on click
            "resize": true
          },
          "modes": {
            "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 0, "size": 0 },  // Disable bubble effect
            "repulse": { "distance": 400, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
          }
        },
        "retina_detect": true
      });
    };
    document.body.appendChild(scriptParticles);

    // Parallax Effect - Move the background based on mouse position
    const handleMouseMove = (e) => {
      const particles = document.getElementById('particles-js');
      const moveX = (e.clientX / window.innerWidth) * 50;
      const moveY = (e.clientY / window.innerHeight) * 50;
      particles.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="particles-js"></div>
      
    </>
  );
};

export default ParticlesComponent;
