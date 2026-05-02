import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"
import AnimatedContent from "./AnimatedContent"
import "./Footer.css"

const socials = [
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/393513880327" },
  { icon: <FaGithub />, label: "GitHub", href: "#" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
  { icon: <FaInstagram />, label: "Instagram", href: "#" }
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
              {item.icon}
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