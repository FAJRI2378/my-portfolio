'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  }}
  options={{
    background: { color: { value: '#000000' } },
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      color: { value: '#00aaff' },
      shape: { type: 'circle' },
      opacity: { value: 0.7 },
      size: { value: 4 },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        outModes: { default: 'out' },
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
  }}
/>

  );
};

export default ParticlesBackground;
