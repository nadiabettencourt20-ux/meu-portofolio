import { useState } from "react"
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi"
import AnimatedContent from "./AnimatedContent"
import ClickSpark from "./ClickSpark"
import "./ContactSection.css"

function ContactSection() {
  const [step, setStep] = useState(1)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const myEmail = "nadia.mateus123@icloud.com"

  // 👉 cria link dinâmico para email
  const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(
    subject || "New message from portfolio"
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`

  return (
    <section id="contact" className="contact-section">
      <ClickSpark sparkColor="#DB9F75">
        <AnimatedContent distance={80} duration={1}>
          <div className="contact-header">
            <p>GET IN TOUCH</p>
            <h2>
              Contact <span>Me</span>
            </h2>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={100} duration={1} delay={0.15}>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Let’s build something meaningful.</h3>
              <p>
                Have an idea or a project? Send me a message and I’ll get back to you.
              </p>

              <div className="contact-method">
                <FiMail />
                <span>{myEmail}</span>
              </div>

              <div className="contact-method">
                <FiMessageSquare />
                <span>WhatsApp: +39 351 388 0327</span>
              </div>
            </div>

            <div className="contact-stepper">
              <div className="step-indicators">
                <span className={step === 1 ? "active" : ""}>1</span>
                <span className={step === 2 ? "active" : ""}>2</span>
                <span className={step === 3 ? "active" : ""}>3</span>
              </div>

              {step === 1 && (
                <div className="step-content">
                  <FiUser className="step-icon" />
                  <h3>Your details</h3>

                  <input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <input
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="step-content">
                  <FiMessageSquare className="step-icon" />
                  <h3>Your message</h3>

                  <input
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />

                  <textarea
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="step-content">
                  <FiSend className="step-icon" />
                  <h3>Send message</h3>

                  <p>
                    This will open your email app (Gmail, Apple Mail, etc.) with your message ready to send.
                  </p>

                  <a
                    href={mailtoLink}
                    className="send-link"
                  >
                    Send Email
                  </a>
                </div>
              )}

              <div className="step-buttons">
                {step > 1 && (
                  <button onClick={() => setStep(step - 1)}>
                    Previous
                  </button>
                )}

                {step < 3 && (
                  <button onClick={() => setStep(step + 1)}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </AnimatedContent>
      </ClickSpark>
    </section>
  )
}

export default ContactSection