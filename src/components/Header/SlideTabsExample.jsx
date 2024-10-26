import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export const SlideTabsExample = () => {
  return (
    <div className="bg-neutral-100 py-20">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prevValue) => ({
          ...prevValue,
          opacity: 0,
        }));
      }}
      className="relative hidden sm:opacity-100 mx-auto sm:flex w-fit rounded-full border-2 border-black  p-1"
    >
      <Tab setPosition={setPosition}>Work</Tab>
      <Tab setPosition={setPosition}>Skills</Tab>
      <Tab setPosition={setPosition}>Experience</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (position.opacity === 0) {
      // Hide the cursor when it's not hovering on any item
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Animate the cursor to the new position and width
      gsap.to(cursorRef.current, {
        left: position.left,
        width: position.width,
        opacity: position.opacity,
        duration: 0.5,
        ease: "power3.out",
      });
    }
  }, [position]);

  return (
    <li
      ref={cursorRef}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
      style={{ opacity: 0, left: 0, width: 0 }}
    />
  );
};

export default SlideTabsExample;
