import SkillsSection from "./components/SkillsSection"
import ServicesSection from "./components/ServicesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

import minhaFoto from "./assets/nadia.jpg"
import LiquidEther from "./components/LiquidEther"
import PillNav from "./components/PillNav"
import ScrollFloat from "./components/ScrollFloat"
import ScrollReveal from "./components/ScrollReveal"

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <LiquidEther
          mouseForce={20}
          cursorSize={130}
          isViscous
          viscous={30}
          colors={["#1F1D20", "#1F1D20", "#A79986", "#291C0E", "#A79986"]}
          autoDemo
          autoSpeed={0.8}
          autoIntensity={2.5}
          isBounce
          resolution={0.5}
        />
      </div>

      <PillNav
        items={[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" }
        ]}
        baseColor="#1F1D20"
        pillColor="#F5EFE7"
        hoveredPillTextColor="#F5EFE7"
        pillTextColor="#291C0E"
      />

      <main style={{ position: "relative", zIndex: 10, width: "100%" }}>
        <section id="home" className="home-section">
          <div className="home-text">
            <p className="home-kicker">HELLO!</p>

            <h1>I'm Nadia</h1>

            <p className="home-description">
              Building modern web experiences with code and creativity.
            </p>

            <a
              href="https://wa.me/393513880327?text=Hello%20Nadia,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="home-button"
            >
              Let's talk
            </a>
          </div>

          <div className="hero-photo-area">
            <div className="hero-photo-border">
              <div className="hero-photo-frame">
                <img
                  src={minhaFoto}
                  alt="Nadia Mateus"
                  className="hero-photo"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <ScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center"
              stagger={0.04}
            >
              About Me
            </ScrollFloat>

            <div className="about-box">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={3}
                blurStrength={6}
                rotationEnd="center center"
                wordAnimationEnd="center center"
              >
                I’m Nádia Mateus, a student and self-taught full stack web developer. I work at the intersection of development and design, with a clear focus: transforming ideas into functional, intuitive digital experiences aligned with what each project truly needs. I enjoy listening, interpreting, and shaping concepts — not only what is asked, but also what is often not yet fully defined. Programming is my starting point, but it’s in building a complete project that I find the most interest — from logic to visual detail. Every project is a different challenge, and that’s what drives me: continuous learning and the opportunity to create with purpose. I currently work as a freelancer, collaborating on diverse projects, with the goal of constantly evolving and, in the future, joining teams, developing my own products, and bringing ideas to life beyond the concept stage. I learn quickly, adapt easily, and always strive to improve — because in this field, standing still means falling behind.
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App