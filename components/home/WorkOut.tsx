"use client";

import { useRef, useEffect } from "react";

export default function WorkOut() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!videoRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    videoRef.current.playbackRate = prefersReducedMotion ? 1 : 2;
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[420px] w-full overflow-hidden">
        <video
          ref={videoRef}
          src="./homeworkout.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="
            absolute
            left-1/2
            top-1/2
            h-[140%]
            w-[140%]
            -translate-x-1/2
            -translate-y-1/2
            object-cover
            pointer-events-none
          "
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}
