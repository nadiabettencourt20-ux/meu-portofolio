import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import "./Footer.css"

const socials = [
  {
    icon: <FaInstagram />,
    label: "Instagram",
    href: "https://www.instagram.com/nadiamateus8"
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/n%C3%A1dia-mateus-16813a258"
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/nadiabettencourt20-ux"
  },
  {
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    href: "https://wa.me/393513880327"
  }
]

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-socials">
        {socials.map((item) => (
          <a
            href={item.href}
            key={item.label}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      <p className="footer-copy">
        © 2026 Nádia Mateus. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer