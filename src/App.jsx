import React, { useState, useLayoutEffect, useRef } from "react";
import "./App.css";
import logo from "./img/Logo-white.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
            // duration:.01,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "bounce",
            scrollTrigger: {
              trigger: ".child",
              markers: true,
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        .fromTo(
          ".child-1",
          {
            x: 0,
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
              markers: true,
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          }
        )
        .fromTo(
          ".child-2",
          {
            x: 0,
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
              trigger: ".child-2",
              markers: true,
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
          <div className="child">Customers</div>
          <div className="child">Food Business</div>
        </main>
        <main ref={divRef}>
          <div className="child-1">Customers</div>
          <div className="child-1">Food Business</div>
        </main>
        <main ref={divRef}>
          <div className="child-2">Customers</div>
          <div className="child-2">Food Business</div>
        </main>
      </section>
      <footer>Eathub 2023</footer>
    </div>
  );
}

export default App;
