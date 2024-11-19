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
            "value": 300,  // Increased density of stars
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
            "onhover": { "enable": true, "mode": "bubble" }, // Bubble effect on hover
            "onclick": { "enable": true, "mode": "repulse" }, // Repulse effect on click
            "mousemove": { "enable": true }, // Enable particle movement on mouse move
            "resize": true
          },
          "modes": {
            "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 },
            "repulse": { "distance": 400, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
          }
        },
        "retina_detect": true
      });
    };
    document.body.appendChild(scriptParticles);



    const handleMouseMove = (e) => {
      const particles = document.getElementById('particles-js');
      const moveX = (e.clientX / window.innerWidth) * 10;
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
      <div id="particles-js"
      className='w-[700px]  h-[180vh] sm:w-full lg:w-full xl:w-full'
      ></div>
      
    </>
  );
};

export default ParticlesComponent;
