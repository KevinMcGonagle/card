"use client";
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

export default function Home() {
  return (
    <div className="bg-slate-200 h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          height: "100vh",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=180&cDistance=4&cPolarAngle=90&cameraZoom=15.3&color1=%232D7CB8&color2=%23CAD4E0&color3=%23C5A5AA&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=40&frameRate=10&grain=off&http%3A%2F%2Flocalhost%3A3002%2Fcustomize%3Fanimate=on&lightType=3d&pixelDensity=1.4&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=0&rotationY=0&rotationZ=0&shader=defaults&type=plane&uAmplitude=1.4&uDensity=3.3&uFrequency=5.5&uSpeed=0.1&uStrength=1&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
      <div className="fixed top-0 left-0 p-4 flex items-end w-full flex-col gap-2">
        <div className="flex justify-end gap-2 flex-wrap">
          <a href="https://github.com/KevinMcGonagle" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/kevin-mc-gonagle/" target="_blank">
            Linkedin
          </a>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 p-4 flex justify-between items-end w-full">
        <h1>Kevin Mc Gonagle</h1>
        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <h2>Software Engineer</h2>
            <h2>·</h2>
            <h2>Boston, MA</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
