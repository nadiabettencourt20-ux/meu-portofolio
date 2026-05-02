import { FiCode, FiLayout, FiSmartphone, FiPenTool, FiSettings, FiGlobe } from "react-icons/fi"
import AnimatedContent from "./AnimatedContent"
import GlassIcons from "./GlassIcons"
import "./ServicesSection.css"

const services = [
  { icon: <FiCode />, label: "Web Development" },
  { icon: <FiLayout />, label: "UI Design" },
  { icon: <FiSmartphone />, label: "Responsive Layouts" },
  { icon: <FiPenTool />, label: "Visual Design" },
  { icon: <FiSettings />, label: "Project Structure" },
  { icon: <FiGlobe />, label: "Digital Experiences" }
]

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <AnimatedContent distance={80} duration={1}>
        <div className="services-header">
          <p>WHAT I CAN DO</p>
          <h2>
            My <span>Services</span>
          </h2>
        </div>
      </AnimatedContent>

      <AnimatedContent distance={100} duration={1} delay={0.15}>
        <GlassIcons items={services} />
      </AnimatedContent>
    </section>
  )
}

export default ServicesSection