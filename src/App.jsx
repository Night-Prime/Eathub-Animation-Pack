import React, { useState, useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./App.css";
import logo from "./img/Logo-white.png";
import gsap from "gsap";
import food1 from "./img/1 (2).jpg";
import bike from "./img/bike.png";
import mobile1 from "./img/mobile-1.png";
import mobile2 from "./img/mobile-2.png";

// reminder to remove all markers

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .from("#header", {
          opacity: 0,
          x: 100,
          duration: 1,
          ease: "ease-in",
        })
        .to("#header", {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "ease-out",
        });

      const scrollAnimation = gsap
        .timeline()
        .fromTo(
          ".child",
          {
            x: 0,
            y: 0,
            opacity: 0,
          },
          {
            x: -50,
            y: 150,
            opacity: 1,
            duration: 1,
            scale: 1.8,
            ease: "bounce",
            scrollTrigger: {
              trigger: ".child",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        .fromTo(
          ".first",
          {
            x: 200,
            y: 0,
            opacity: 0,
            // duration:.01,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "bounce",
            scrollTrigger: {
              trigger: ".child-1",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        .fromTo(
          ".second",
          {
            x: -200,
            y: 0,
            opacity: 0,
            // duration:.01,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "bounce",
            scrollTrigger: {
              trigger: ".child-1",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        .fromTo(
          ".child-2",
          {
            x: 100,
            y: 500,
            opacity: 0,
            ease: "ease-in",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "ease-in",
            stagger: 1, // Add a stagger of 0.2 seconds
            scrollTrigger: {
              trigger: ".child-2",
              // markers: "false",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        .fromTo(
          ".child-text",
          {
            x: -100,
            y: -500,
            opacity: 0,
            ease: "ease-in",
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "ease-in",
            stagger: 1, // Add a stagger of 0.2 seconds
            scrollTrigger: {
              trigger: ".child-2",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <header>
        <span className="img">
          <img src={logo} alt="eathub-logo" />
        </span>
        <span className="large-txt">
          <h5>We've Gone</h5>
          <h1 id="header" ref={headerRef}>
            BETA!
          </h1>
        </span>
      </header>
      <section className="grid">
        <main ref={divRef}>
          <div className="child">
            <img src={food1} alt={food1} />
          </div>
        </main>
        <main className="special" ref={divRef}>
          <div className="child-text">
            <h5>Easy Mobile Interface to browse and order Meals</h5>
          </div>
          <div className="child-2">
            <img src={mobile1} alt={mobile1} />
            <img src={mobile2} alt={mobile2} className="phone" />
          </div>
        </main>
        <main className="mobile" ref={divRef}>
          <h3>To All Local Food Business Owners</h3>
          <main className="showcase">
            <div className="child-1 first">
              <h5>
                Joining us, you'll have the opportunity to simplify your
                delivery process & improve your overall business operations.
              </h5>
            </div>
            <div className="child-1 second">
              <img src={bike} alt={bike} />
            </div>
          </main>
        </main>
      </section>
      <footer>Making Food Services Seamless and easy.</footer>
    </div>
  );
}

export default App;
