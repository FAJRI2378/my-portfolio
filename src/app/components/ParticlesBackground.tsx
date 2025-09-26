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
        fullScreen: false,
        background: {
          color: { value: '#000000' },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 110,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ['#00ffff', '#00ff88', '#ff00cc', '#ffffff'],
          },
          shape: {
            type: ['circle', 'triangle', 'star'],
          },
          opacity: {
            value: 1,
            random: false,
          },
          size: {
            value: 3.5,
            random: { enable: true, minimumValue: 2 },
          },
          links: {
            enable: true,
            distance: 140,
            color: '#00ffff',
            opacity: 0.8,
            width: 1.5,
          },
          move: {
            enable: true,
            speed: 2.2,
            direction: 'none',
            outModes: {
              default: 'out',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            grab: {
              distance: 160,
              links: {
                opacity: 1,
              },
            },
            push: {
              quantity: 5,
            },
          },
        },
        detectRetina: true,
        
      }}
    />
  );
};

export default ParticlesBackground;
