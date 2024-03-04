import React, { useRef, useEffect } from "react";
import Col1Image from "../assets/col-1_1.jpg";
import Col2Image from "../assets/col-1_2.jpg";
import Col3Image from "../assets/col-1_3.jpg";
import Col4Image from "../assets/col-1_4.jpg";
import Col5Image from "../assets/col-1_5.jpg";
import Col6Image from "../assets/col-2_1.jpg";
import Col7Image from "../assets/col-2_2.jpg";
import Col8Image from "../assets/col-2_3.jpg";
import Col9Image from "../assets/col-2_4.jpg";
import Col10Image from "../assets/col-2_5.jpg";
import Col11Image from "../assets/col-3_1.jpg";
import Col12Image from "../assets/col-3_2.webp";
import Col13Image from "../assets/col-3_3.jpg";
import Col14Image from "../assets/col-3_4.jpg";
import Col15Image from "../assets/col-3_5.jpg";
import ImageTwo from "../assets/im2.jpg";
import ImageOne from "../assets/img-1.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function MainWrapperEvent() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef();
  const section = useRef();

  useGSAP(
    () => {
      const container = containerRef.current;
      const section = container.querySelectorAll("section");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            pin: true,
            start: "top top",
            end: "+=3300",
          },
        })
        .to(container, {
          x: () =>
            -(
              container.scrollWidth -
              document.documentElement.clientWidth -
              95
            ) + "px",
          ease: "none",
          duration: 1,
        })
        .to(".side-bar", {
          x: 70,
          opacity: 1,
          scrollTrigger: {
            trigger: ".side-bar",
            start: "center+=2500 center",
            scrub: 2.5,
          },
        })
        .to({}, { duration: 1 / (section.length + 1) });

      gsap.to(".col-1", {
        y: -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".col-2", {
        y: 250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.to(".col-3", {
        y: -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });

      gsap.from(".row-2", {
        height: "0%",
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".section-3",
          start: "40% center",
          toggleActions: "play pause reverse reverse",
        },
      });

      gsap.from(".row li", {
        y: 200,
        opacity: 0,
        ease: "none",
        delay: 2,
        duration: 2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: ".row li",
          toggleActions: "play pause reverse reverse",
        },
      });

      gsap.to(".num", {
        x: 600,
        duration: 2,
        scrollTrigger: {
          trigger: ".num",
          start: "right left",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef} className="main-wrapper flex">
        <section className="section-1 flex h-screen w-screen shrink-0">
          <div className="box1 w-[65%] flex items-center justify-center">
            <div className="name text-[150px]">Kove</div>
          </div>
          <div className="box2 w-[35%]">
            <div className="image-gallery flex h-screen">
              <div className="col flex flex-col items-center justify-center col-1">
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col1Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col2Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col3Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col4Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col5Image}
                  alt=""
                />
              </div>
              <div className="col flex flex-col items-center justify-center col-2">
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1"
                  src={Col6Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1"
                  src={Col7Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1"
                  src={Col8Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1"
                  src={Col9Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1"
                  src={Col10Image}
                  alt=""
                />
              </div>
              <div className="col flex flex-col items-center justify-center col-3">
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col11Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col12Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col13Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col14Image}
                  alt=""
                />
                <img
                  className="min-h-[300px] h-auto w-[200px] object-cover bg-black py-1 px-2"
                  src={Col15Image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-2 transform translate-x-[5%] h-screen w-screen shrink-0">
          <div className="side-bar flex flex-col justify-between items-center w-[65px] bg-white h-full p-4 -left-[10%] top-0 opacity-0 z-10">
            <i className="fa-solid fa-expand"></i>
            <div className="brand-name">kove</div>
            <div className="des text-[10px] w-[200px] uppercase mb-20">
              HIGH QUALITY FABRICS. <br />
              designed & mad <br /> in iceland.
              <br />
            </div>
          </div>
          <div className="wrapper flex w-full h-full">
            <div className="left w-[65%] px-[0.8rem] pl-0 pb-2">
              <div className="line-1 flex justify-between p-4">
                <p className="text-[80px]">VORLIF</p>
                <div className="copy-right">
                  KOVE 2023&#174 <br /> DESIGNED TO ENDURE
                </div>
              </div>

              <div className="image-wrapper">
                <img
                  className="min-h-[300px] object-cover bg-black w-full h-[400px]"
                  src={ImageOne}
                  alt=""
                />
              </div>

              <div className="line-2 flex justify-between flex-wrap relative">
                <p className="num text-left w-full text-[80px]">/22</p>
                <p className="text-[80px]">SPRING</p>
                <button className="loop h-[30px] w-[120px] whitespace-nowrap overflow-hidden border border-gray-700 absolute top-[75%] left-[80%] cursor-pointer">
                  <span>COLLECTION /SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </button>
                <button className="loop h-[30px] w-[120px] whitespace-nowrap overflow-hidden border border-gray-700 absolute top-[75%] left-[80%] cursor-pointer loop2">
                  <span>COLLECTION /SHOP&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </button>
              </div>
            </div>
            <div className="right w-[35%]">
              <div className="animate-text h-[120px] bg-black text-white text-[100px] whitespace-nowrap overflow-hidden">
                <span>COLLECTION /19° W</span>
              </div>
              <div className="img-container w-full h-[780px] p-2 bg-black">
                <img
                  className="min-h-[300px] h-auto object-cover bg-black w-full"
                  src={ImageTwo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-3 bg-black -mt-[100vh] relative overflow-hidden h-screen w-screen shrink-0">
          <div className="rows flex flex-col items-center justify-center h-full gap-2">
            <ul className="row list-none flex items-center justify-center gap-20 h-[33.33%] text-white row-1">
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
            </ul>
            <ul className="row list-none flex items-center justify-center gap-20 h-[33.33%] text-black row-2 bg-white">
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
            </ul>
            <ul className="row list-none flex items-center justify-center gap-20 h-[33.33%] text-black row-3">
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
              <li className="text-[220px] transform translate-x-[50%]">kove</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default MainWrapperEvent;
