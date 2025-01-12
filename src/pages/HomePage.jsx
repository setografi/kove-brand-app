import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

function HomePage() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef();
  const horizontalRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    let ctx = gsap.context(() => {
      // Calculate the width for horizontal scrolling
      const horizontalScrollWidth = horizontal.scrollWidth;

      // Create the horizontal scroll animation
      gsap.to(horizontal, {
        x: -horizontalScrollWidth + window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: horizontal,
          start: "top top",
          end: `+=${horizontalScrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Reset ScrollTrigger on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="main-container">
      <div ref={horizontalRef} className="horizontal-wrapper">
        <SectionOne />
      </div>
      <div className="vertical-sections">
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
}

export default HomePage;
