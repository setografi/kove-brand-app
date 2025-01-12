import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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

function SectionOne() {
  useGSAP(() => {
    // Column animations
    ["col-1", "col-2", "col-3"].forEach((col, index) => {
      gsap.to(`.${col}`, {
        y: col === "col-2" ? 250 : -250,
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: ".image-gallery",
          start: "top center",
          end: "+=3000",
          scrub: true,
        },
      });
    });
  });

  return (
    <section className="section-1 flex w-[200vw] h-screen shrink-0 overflow-y-hidden">
      <div className="w-[60%] flex items-center justify-center">
        <div className="name text-8xl">Kove</div>
      </div>
      <div className="w-[40%]">
        <div className="image-gallery flex h-screen">
          {/* Column 1 */}
          <div className="col flex flex-col items-center justify-center col-1">
            {[Col1Image, Col2Image, Col3Image, Col4Image, Col5Image].map(
              (img, index) => (
                <img
                  key={index}
                  className="min-h-[300px] h-auto w-52 object-cover bg-black py-1 px-2"
                  src={img}
                  alt=""
                />
              )
            )}
          </div>

          {/* Column 2 */}
          <div className="col flex flex-col items-center justify-center col-2">
            {[Col6Image, Col7Image, Col8Image, Col9Image, Col10Image].map(
              (img, index) => (
                <img
                  key={index}
                  className="min-h-[300px] h-auto w-52 object-cover bg-black py-1"
                  src={img}
                  alt=""
                />
              )
            )}
          </div>

          {/* Column 3 */}
          <div className="col flex flex-col items-center justify-center col-3">
            {[Col11Image, Col12Image, Col13Image, Col14Image, Col15Image].map(
              (img, index) => (
                <img
                  key={index}
                  className="min-h-[300px] h-auto w-52 object-cover bg-black py-1 px-2"
                  src={img}
                  alt=""
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
