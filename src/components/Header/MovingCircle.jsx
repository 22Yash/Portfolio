import React, { useEffect } from "react";
import "./MovingCircle.css"; // Import the CSS file for animations


const MovingCircle = () => {
  useEffect(() => {
    const text = document.getElementById("text");
    const characters = text.textContent.split("");
    text.innerHTML = ""; // Clear the text content

    // Calculate the angle between characters
    const angleStep = 360 / characters.length;

    // Create span elements for each character and position them in a circle
    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      // Add an offset to the rotation angle to create space between the first and last characters
      const rotationAngle = angleStep * index;
      span.style.transform = `rotate(${rotationAngle}deg) translateY(-70px)`;
      text.appendChild(span);
    });
  }, []);

  return (
    <div id="circle" className="">
      <div id="text" className="moving-circle">
        Yash Doke Yash Doke <span></span>
      </div>
    </div>
  );
};

export default MovingCircle;
