import "./PillNav.css"

const PillNav = ({
  items,
  baseColor = "#1F1D20",
  pillColor = "#F5EFE7",
  hoveredPillTextColor = "#F5EFE7",
  pillTextColor = "#291C0E",
}) => {
  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": pillTextColor,
  }

  return (
    <div className="pill-nav-container">
      <nav className="pill-nav" style={cssVars}>
        <ul className="pill-list">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="pill">
                <span className="hover-circle" />
                <span className="label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default PillNav