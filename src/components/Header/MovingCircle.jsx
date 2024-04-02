import React, { useEffect } from 'react';
import './MovingCircle.css'; // Import the CSS file for animations

const MovingCircle = () => {
  useEffect(() => {
    const text = document.getElementById('text');
    const characters = text.textContent.split('');
    text.innerHTML = ''; // Clear the text content

    // Calculate the angle between characters
    const angleStep = 360 / characters.length;

    // Create span elements for each character and position them in a circle
    characters.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.transform = `rotate(${angleStep * index}deg) translateY(-50px)`;
      text.appendChild(span);
    });
  }, []);

  return (
    <div id="text" className='moving-circle'>
      circular text effect
    </div>
  );
};

export default MovingCircle;
