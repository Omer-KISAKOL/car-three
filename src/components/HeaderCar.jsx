import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderCar() {
  const carRef = useRef();

  useEffect(() => {
    if (!carRef.current) return;

    const tl = gsap.timeline();

    // Scroll animasyonu
    tl.to(carRef.current, {
      xPercent: 2780,
      ease: "none",
      scrollTrigger: {
        trigger: "#first-section",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        markers: false,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={carRef}
      className="absolute left-4 -bottom-4 -translate-y-1/2 w-16"
    >
      <img
        src="/car-side2.png"
        alt="Car"
        className="w-full h-full object-contain"
        // style={{ transform: "scaleX(-1)" }} // Arabayı sağa baktır
      />
    </div>
  );
}

export default HeaderCar;
