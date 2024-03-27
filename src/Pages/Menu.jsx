import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Menu = () => {
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const items = menu.querySelectorAll(".menu__item");

    gsap.set(menu, { autoAlpha: 1 });

    gsap.timeline()
      .from(".menu__item-innertext", {
        delay: 1,
        duration: 0.85,
        yPercent: 125,
        stagger: 0.095,
        skewY: gsap.utils.wrap([-8, 8]),
        ease: "expo.out",
      })
      .set(menu, { pointerEvents: "all" });

    items.forEach((item) => {
      const imageWrapper = item.querySelector(".menu__item-image_wrapper");
      const imageWrapperBounds = imageWrapper.getBoundingClientRect();
      let itemBounds = item.getBoundingClientRect();

      const onMouseEnter = () => {
        gsap.set(imageWrapper, { scale: 0.8, yPercent: 50, rotation: -15 });
        gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
      };

      const onMouseLeave = () => {
        gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: -15 });
      };

      const onMouseMove = ({ clientX, clientY }) => {
        let yOffset = itemBounds.top / imageWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
        gsap.to(imageWrapper, {
          duration: 1.25,
          x: Math.abs(clientX - itemBounds.left) - imageWrapperBounds.width / 1.55,
          y: Math.abs(clientY - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
        });
      };

      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
      item.addEventListener("mousemove", onMouseMove);

      return () => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
        item.removeEventListener("mousemove", onMouseMove);
      };
    });

    return () => {
      gsap.set(menu, { autoAlpha: 0 });
    };
  }, []);

  return (
    <main>
      <nav ref={menuRef} className="menu opacity-0 pointer-events-none">
        <a className="menu__item bg-red-400 w-[200px] h-[200px]">
          <div className="menu__item-image_wrapper ">
            <div className="menu__item-image_inner" >
              <img className="menu__item-image" src="https://source.unsplash.com/tLKOj6cNwe0/280x400" alt="" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">Lizzy</span>
          </span>
        </a>
        <a className="menu__item bg-red-400 w-[200px] h-[200px]">
          <div className="menu__item-image_wrapper ">
            <div className="menu__item-image_inner" >
              <img className="menu__item-image" src="https://source.unsplash.com/tLKOj6cNwe0/280x400" alt="" />
            </div>
          </div>
          <span className="menu__item-text">
            <span className="menu__item-innertext">Lsev</span>
          </span>
        </a>
        {/* Add more menu items here */}
      </nav>
      <div className="support">
        <a href="https://twitter.com/DevLoop01" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://dribbble.com/devloop01" target="_blank">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </main>
  );
};

export default Menu;
