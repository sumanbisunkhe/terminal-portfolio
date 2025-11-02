"use client";

import dynamic from 'next/dynamic';

const IDEInterface = dynamic(() => import('./IDEInterface').then(mod => ({ default: mod.IDEInterface })), {
  ssr: false,
});

export default function Scene3D() {
  return <IDEInterface />;
}
