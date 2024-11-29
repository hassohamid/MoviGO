import React, { useEffect, useRef, useState } from "react";
import Clouds from "vanta/dist/vanta.clouds.min"; // Import Clouds effect
import * as THREE from "three"; // Vanta.js depends on THREE.js

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Clouds({
          el: vantaRef.current, // Attach the effect to this div
          THREE, // Required for Vanta.js
          backgroundColor: 0x000000, // Dark background for a cinematic, night-time feel
          skyColor: 0x1c1c1c, // Very dark gray sky to create a somber tone
          cloudColor: 0x474747, // Dark, stormy gray clouds to evoke a moody atmosphere
          lightColor: 0x999999, // Subtle grayish light for an ominous glow (think low light)
          speed: 0.3, // Slower speed for a more dramatic and heavy cloud movement
          cloudHeight: 20, // Lower cloud height to make the clouds appear closer to the viewer
          cloudSpeed: 0.1, // Slow cloud movement for a more ominous effect
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on component unmount
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed", // Fullscreen positioning
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Send the background to the back
      }}
    />
  );
};

export default VantaBackground;
