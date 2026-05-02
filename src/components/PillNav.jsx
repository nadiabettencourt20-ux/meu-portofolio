import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

const PillNav = ({
  items,
  baseColor = "#1F1D20",
  pillColor = "#F5EFE7",
  hoveredPillTextColor = "#F5EFE7",
  pillTextColor = "#291C0E",
}) => {
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);

  useEffect(() => {
    circleRefs.current.forEach((circle, i) => {
      if (!circle) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(circle, {
        scale: 1.2,
        duration: 0.6,
        ease: "power3.out",
      });

      tlRefs.current[i] = tl;
    });
  }, []);

  const handleEnter = (i) => {
    tlRefs.current[i]?.play();
  };

  const handleLeave = (i) => {
    tlRefs.current[i]?.reverse();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: pillTextColor,
  };

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav" style={cssVars}>
        <ul className="pill-list">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="pill"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
              >
                <span
                  className="hover-circle"
                  ref={(el) => (circleRefs.current[i] = el)}
                />
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PillNav;