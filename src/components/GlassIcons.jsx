import "./GlassIcons.css"

function GlassIcons({ items }) {
  return (
    <div className="glass-icons">
      {items.map((item) => (
        <div className="glass-icon-item" key={item.label}>
          <button className="glass-icon-button" type="button" aria-label={item.label}>
            <span className="glass-icon-back"></span>
            <span className="glass-icon-front">
              {item.icon}
            </span>
          </button>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default GlassIcons