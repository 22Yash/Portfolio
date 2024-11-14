import React, { useEffect, useRef } from "react";
import "./MovingCircle.css";

const Logo = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const characters = text.textContent.split("");
    text.innerHTML = "";

    const angleStep = 360 / characters.length;
    characters.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      const rotationAngle = angleStep * index;
      span.style.transform = `rotate(${rotationAngle}deg) translateY(-70px)`;
      text.appendChild(span);
    });
  }, []);

  return (
    <div id="circle">
    <div ref={textRef} className="moving-circle">
      Yash Doke {/* Text for animation */}
    </div>
  </div>
  );
};

export default Logo;
