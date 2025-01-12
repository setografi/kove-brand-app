import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import ImageTwo from "../assets/im2.jpg";
import ImageOne from "../assets/img-1.jpg";

function SectionTwo() {
  const sectionRef = useRef();

  useGSAP(() => {
    // Sidebar animation
    gsap.fromTo(
      ".side-bar",
      { x: -70, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    // Number animation
    gsap.to(".num", {
      x: 600,
      duration: 1,
      scrollTrigger: {
        trigger: ".num",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="section-2 w-screen h-screen shrink-0">
      <div className="side-bar top-0 absolute w-[65px] h-screen bg-white flex flex-col justify-between items-center p-4 opacity-0 z-20">
        <i className="fa-solid fa-expand"></i>
        <div className="brand-name">kove</div>
        <div className="des text-xs w-52 uppercase mb-20">
          HIGH QUALITY FABRICS. <br />
          designed & mad <br /> in iceland.
          <br />
        </div>
      </div>

      <div className="wrapper flex w-full h-full relative ml-[5%]">
        <div className="left w-[65%] px-[0.8rem] pl-0 pb-2">
          <div className="line-1 flex justify-between p-4">
            <p className="text-6xl lg:text-[80px]">VORLIF</p>
            <div className="copy-right text-base">
              KOVE 2023&#174; <br /> DESIGNED TO ENDURE
            </div>
          </div>

          <div className="image-wrapper">
            <img
              className="min-h-[300px] w-full h-[400px] bg-black object-cover"
              src={ImageOne}
              alt=""
            />
          </div>

          <div className="line-2 relative flex flex-wrap justify-between p-4">
            <div className="flex flex-col">
              <p className="num text-left w-full text-6xl lg:text-[80px]">
                /22
              </p>
              <p className="text-6xl lg:text-[80px]">SPRING</p>
            </div>

            <button className="loop h-[30px] w-[120px] whitespace-nowrap overflow-hidden border border-gray-700 absolute top-[75%] right-0 cursor-pointer">
              <span>COLLECTION /SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </button>
            <button className="loop h-[30px] w-[120px] whitespace-nowrap overflow-hidden border border-gray-700 absolute top-[75%] right-0 cursor-pointer loop2">
              <span>COLLECTION /SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </button>
          </div>
        </div>

        <div className="w-[35%] flex flex-col">
          <div className="animate-text bg-black text-white text-8xl pt-2 whitespace-nowrap overflow-hidden">
            <span>COLLECTION /19° W</span>
          </div>

          <div className="w-full h-full p-2 bg-black overflow-hidden">
            <img
              className="min-h-[300px] h-auto object-cover bg-black w-full"
              src={ImageTwo}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
