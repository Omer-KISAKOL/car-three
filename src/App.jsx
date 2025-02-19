import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Car from "./components/Car";
import HeaderCar from "./components/HeaderCar";
import "./App.css";

function App() {
  return (
    <>
      <div id="first-section" className="relative">
        {/* Header Car */}
        <div className="header-canvas sticky top-0 left-0 w-full h-10 z-50 bg-white/80 backdrop-blur-sm">
          <HeaderCar />
        </div>

        {/* <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
          <h2 className="text-4xl font-semibold text-slate-800 ">Scroll Down</h2>
        </div> */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="scroll-section">
            <h2 className="text-4xl font-semibold text-slate-800">
              {index === 4 ? "Yolculuk Tamamlandı" : `Yol ${index + 1}`}
            </h2>
          </div>
        ))}


        {/* <div
          id="scroll-container"
          className="relative w-screen h-[100vh] bg-gradient-to-b from-slate-200 to-slate-400"
        > */}
          {/* Main Car */}
          {/* <div className="canvas-container">
            <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.7} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.9}
                  penumbra={1}
                  intensity={1}
                />
                <Car />
              </Suspense>
            </Canvas>
          </div>
          <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
            <h2 className="text-4xl font-semibold text-slate-800 ">Scroll Down</h2>
          </div>
          <div className="h-[calc(100vh-4rem)] flex items-center justify-center">
            <h2 className="text-4xl font-semibold text-slate-800 ">Scroll Down</h2>
          </div>
        </div> */}
        
      </div>
    </>
  );
}

export default App;
