import "./SkillsSection.css"

const skills = [
  { name: "HTML", type: "Structure", level: 95, icon: "H" },
  { name: "CSS", type: "Styling", level: 90, icon: "C" },
  { name: "JavaScript", type: "Language", level: 82, icon: "J" },
  { name: "React", type: "Frontend", level: 78, icon: "R" },
  { name: "Vite", type: "Build Tool", level: 75, icon: "V" },
  { name: "GitHub", type: "Version Control", level: 72, icon: "G" },
  { name: "Figma", type: "Design", level: 70, icon: "F" },
  { name: "Responsive Design", type: "UI/UX", level: 85, icon: "RD" }
]

const languages = [
  { name: "Portuguese", type: "Native", level: 100, icon: "PT" },
  { name: "English", type: "Fluent", level: 100, icon: "EN" },
  { name: "Italian", type: "Conversational", level: 80, icon: "IT" },
  { name: "Galician / Spanish", type: "Basic", level: 60, icon: "ES" }
]

function SkillCard({ item }) {
  return (
    <div className="skill-card">
      <div className="skill-top">
        <div className="skill-icon">{item.icon}</div>

        <div>
          <h3>{item.name}</h3>
          <p>{item.type}</p>
        </div>
      </div>

      <div className="skill-info">
        <span>Proficiency</span>
        <strong>{item.level}%</strong>
      </div>

      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${item.level}%` }}
        />
      </div>
    </div>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>
          My <span>Skills</span>
        </h2>

        <p>
          Technologies and tools I use to create modern web experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} item={skill} />
        ))}
      </div>

      <div className="skills-header languages-header">
        <h2>
          My <span>Languages</span>
        </h2>

        <p>
          Languages I use to communicate, collaborate and work across different contexts.
        </p>
      </div>

      <div className="skills-grid languages-grid">
        {languages.map((language) => (
          <SkillCard key={language.name} item={language} />
        ))}
      </div>
    </section>
  )
}

export default SkillsSection