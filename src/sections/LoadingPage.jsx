import React, { useEffect, useRef } from "react";
import CustomCursor from "./CustomCursor";
import gsap from "gsap";

const LoaderPage = () => {
  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const textcont = useRef(null);
  const loader = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        willChange: "transform opacity",
      },
    });

    timeline
      .fromTo(
        text1.current,
        {
          opacity: 0,
          y: "0%",
        },
        {
          opacity: 1,
          y: "-20%",
          delay: 0.5,
        }
      )
      .fromTo(
        text2.current,
        {
          opacity: 0,
          y: "0%",
        },
        {
          opacity: 1,
          y: "-20%",
        }
      )
      .fromTo(
        textcont.current,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 0.5,
          delay: 0.5,
        }
      );
    timeline
      .to(div1.current, {
        y: "-100%",
        duration: 0.5,
      })
      .to(
        div2.current,
        {
          y: "-100%",
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        div3.current,
        {
          y: "-100%",
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(
        div4.current,
        {
          y: "-100%",
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(loader.current, {
        display: "none",
      });
  }, []);

  return (
    <div
      ref={loader}
      className="w-full h-screen fixed top-0 left-0 z-[99999999] text-white flex items-center justify-center overflow-hidden"
    >
      <CustomCursor />
      <div ref={div1} className="w-[25%] h-full bg-zinc-800"></div>
      <div ref={div2} className="w-[25%] h-full bg-zinc-800"></div>
      <div ref={div3} className="w-[25%] h-full bg-zinc-800"></div>
      <div ref={div4} className="w-[25%] h-full bg-zinc-800"></div>
      <div
        ref={textcont}
        className="overlay w-full h-full absolute top-0 left-0 flex items-center justify-center max-[599px]:flex-col
         text-[3vw] max-[599px]:text-[7vw] gap-2"
      >
        <h1 ref={text1} className="opacity-0">
        Alerts That Save Lives
        </h1>
        <h1 ref={text2} className="opacity-0">
        Instant. Accurate. Anywhere.
        </h1>
      </div>
    </div>
  );
};

export default LoaderPage;
