import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import logo from "./img/Logo-white.png";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref1 = useRef(null);

  // activating the Intersection Observer on the elements
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer1.observe(ref1.current);

    return () => {
      observer1.disconnect();
    };
  }, []);

  // when the targeted element is intersected
  useEffect(() => {
    if (isIntersecting) {
      ref1.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("show");
      });
    } else {
      ref1.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div className="App">
      <header>
        <span className="img">
          <img src={logo} alt="eathub-logo" />
        </span>
        <span className="large-txt">
          <h5>We've Gone</h5>
          <h1>BETA!</h1>
        </span>
      </header>
      <main ref={ref1}>
        <div className="child-one">Customers</div>
        <div className="child-two">Food Business</div>
      </main>
      <footer>Eathub 2023</footer>
    </div>
  );
}

export default App;
