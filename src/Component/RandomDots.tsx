import { useMemo } from "react";

export default function RandomDots() {
  const dots = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 2}px`,
        opacity: Math.random() * 0.4 + 0.1,
      })),
    []
  );

  return (
    <>
      {dots.map((dot) => (
        <span
          key={dot.id}
          style={{
            position: "absolute",
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            borderRadius: "50%",
            background: "#0000f1",
            boxShadow:'0px 0px 20px #0000f1',
            opacity: dot.opacity,
            pointerEvents: "none",
            zIndex:"999 !important"
          }}
        />
      ))}
    </>
  );
}