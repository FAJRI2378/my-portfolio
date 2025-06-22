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
        background: { color: { value: '#000000' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 90,
            density: { enable: true, area: 900 },
          },
          color: {
            value: ['#00ffff', '#39ff14', '#ff00ff', '#ffffff'],
          },
          shape: {
            type: ['circle', 'triangle', 'edge', 'star'],
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 130,
            color: '#00ffff',
            opacity: 0.3,
            width: 1,
            shadow: {
              enable: true,
              color: '#00ffff',
              blur: 3,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: { default: 'out' },
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
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
              distance: 140,
              links: {
                opacity: 0.6,
              },
            },
            push: {
              quantity: 6,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
