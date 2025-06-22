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
    zIndex: -10,
  }}
  options={{
    background: { color: { value: '#000000' } },
    particles: {
      number: {
        value: 60,
        density: { enable: true, area: 800 },
      },
      color: { value: ['#00ffff', '#00aaff', '#ffffff'] },
      shape: { type: ['circle', 'triangle', 'star'] },
      shadow: {
        enable: true,
        color: "#00ffff",
        blur: 5
      },
      opacity: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.3,
          sync: false
        }
      },
      size: {
        value: 4,
        random: { enable: true, minimumValue: 1 },
        anim: {
          enable: true,
          speed: 3,
          size_min: 0.5,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        outModes: { default: 'out' },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 }
      },
    },
    detectRetina: true
  }}
/>


    );
  };

  export default ParticlesBackground;
