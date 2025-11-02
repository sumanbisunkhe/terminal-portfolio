"use client";

import Scene3D from "./Scene3D";
import TerminalBackground from "./TerminalBackground";

export default function Scene3DClient() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <Scene3D />
      <TerminalBackground />
    </div>
  );
}
