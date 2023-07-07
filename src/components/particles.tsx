import React from 'react'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

type Props = {}

const Particlesp = (props: Props) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
  return (
    <div> <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fpsLimit: 60,
        interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true
            },
            modes: {
                push: { quantity: 1 },
                repulse: { distance: 200, duration: 0.4 }
              }
            },
            particles: {
                color: { value: "#eeeee4" },
                move: {
                  direction: "none",
                  enable: true,
                  outModes:  {
                    default: "bounce",
                },
                  random: false,
                  speed: 2,
                  straight: false
                },
                number: {
                  density: {
                    enable: true,
                    area: 1200
                  },
                  value: 80
                },
               
                shape: {
                  type: "circle"
                },
                size: {
                  value: { min: 1, max: 5 }
                }
              }
        
    }}
/></div>
  )
}

export default Particlesp