import SkillsSection from "./components/SkillsSection"
import ServicesSection from "./components/ServicesSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

import minhaFoto from "./assets/nadia.jpg"
import LiquidEther from "./components/LiquidEther"
import PillNav from "./components/PillNav"
import ScrollFloat from "./components/ScrollFloat"
import ScrollReveal from "./components/ScrollReveal"
import StarBorder from "./components/StarBorder"

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

      <main
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          color: "#804012"
        }}
      >
        <section
          id="home"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 80px"
          }}
        >
          <div style={{ maxWidth: "520px", textAlign: "left" }}>
            <p
              style={{
                color: "#DB9F75",
                fontSize: "14px",
                letterSpacing: "2px",
                marginBottom: "12px",
                fontWeight: "bold"
              }}
            >
              HELLO!
            </p>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1",
                marginBottom: "18px",
                color: "#804012"
              }}
            >
              I'm Nadia
            </h1>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.5",
                marginBottom: "28px",
                color: "#804012"
              }}
            >
              Building modern web experiences with code and creativity.
            </p>

            <a
              href="https://wa.me/393513880327?text=Hello%20Nadia,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 28px",
                borderRadius: "999px",
                background: "#DB9F75",
                color: "#291C0E",
                fontWeight: "bold",
                textDecoration: "none",
                display: "inline-block",
                cursor: "pointer"
              }}
            >
              Let's talk
            </a>
          </div>

          <StarBorder style={{ borderRadius: "50%" }}>
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                overflow: "hidden"
              }}
            >
              <img
                src={minhaFoto}
                alt="Nadia"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top"
                }}
              />
            </div>
          </StarBorder>
        </section>

        <section
          id="about"
          style={{
            minHeight: "140vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "120px 80px",
            color: "#803E2F"
          }}
        >
          <div style={{ maxWidth: "1000px", width: "100%" }}>
            <ScrollFloat
              animationDuration={1.2}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="center center"
              stagger={0.04}
            >
              About Me
            </ScrollFloat>

            <div
              style={{
                marginTop: "40px",
                background: "rgba(31, 29, 32, 0.55)",
                border: "1px solid rgba(245, 239, 231, 0.15)",
                borderRadius: "28px",
                padding: "40px",
                backdropFilter: "blur(14px)",
                lineHeight: "1.8",
                fontSize: "18px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)"
              }}
            >
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