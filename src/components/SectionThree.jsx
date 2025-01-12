import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function SectionThree() {
  const sectionRef = useRef();

  useGSAP(() => {
    // Row 2 animation
    gsap.from(".row-2", {
      height: "0%",
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    // List items animation
    gsap.from(".row li", {
      y: 200,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".row",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-3 bg-black relative overflow-hidden w-screen h-screen shrink-0"
    >
      <div className="rows flex flex-col items-center justify-center h-full gap-2">
        <ul className="row list-none flex items-center justify-center gap-20 h-[33.33%] text-white row-1">
          {Array(4)
            .fill("kove")
            .map((text, index) => (
              <li
                key={index}
                className="text-8xl lg:text-[220px] transform translate-x-[50%]"
              >
                {text}
              </li>
            ))}
        </ul>
        <ul className="row list-none flex items-center justify-center gap-20 h-[33.33%] text-black row-2 bg-white">
          {Array(4)
            .fill("kove")
            .map((text, index) => (
              <li
                key={index}
                className="text-8xl lg:text-[220px] transform translate-x-[50%]"
              >
                {text}
              </li>
            ))}
        </ul>
        <ul className="row list-none flex items-center justify-center gap-20 h-[33.33%] text-white row-3">
          {Array(4)
            .fill("kove")
            .map((text, index) => (
              <li
                key={index}
                className="text-8xl lg:text-[220px] transform translate-x-[50%]"
              >
                {text}
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default SectionThree;
