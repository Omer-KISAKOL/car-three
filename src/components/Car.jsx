import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Car({ scrollContainerId = "scroll-container" }) {
  const car = useRef();

  useEffect(() => {
    if (!car.current) return;

    const tl = gsap.timeline();

    // Model boyutunu ve başlangıç pozisyonunu ayarla
    car.current.scale.set(0.3, 0.3, 0.3);
    car.current.position.set(-4, 0, 0);
    car.current.rotation.set(0, Math.PI, 0);

    // Scroll animasyonu
    tl.to(car.current.position, {
      x: 4,
      ease: "none",
      scrollTrigger: {
        trigger: `#${scrollContainerId}`,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [scrollContainerId]);

  const { scene } = useGLTF("/car.glb");

  return <primitive ref={car} object={scene} />;
}

export default Car;
