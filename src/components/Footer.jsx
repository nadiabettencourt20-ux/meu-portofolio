import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi"
import AnimatedContent from "./AnimatedContent"
import "./Footer.css"

const socials = [
  {
    icon: <FiInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/nadiamateus8"
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nádia-mateus-16813a258"
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    href: "https://github.com/nadiabettencourt20-ux"
  },
  {
    icon: "💬",
    label: "WhatsApp",
    href: "https://wa.me/393513880327"
  }
]

function Footer() {
  return (
    <footer className="footer-section">
      <AnimatedContent distance={60} duration={1}>
        
        <div className="social-loop">
          {[...socials, ...socials].map((item, index) => (
            <a
              href={item.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        <p className="footer-copy">
          © 2026 Nádia Mateus. All rights reserved.
        </p>

      </AnimatedContent>
    </footer>
  )
}

export default Footer