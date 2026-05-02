import "./StarBorder.css"

const StarBorder = ({ children, style = {} }) => {
  return (
    <div className="star-border-container" style={style}>
      <div className="inner-content">
        {children}
      </div>
    </div>
  )
}

export default StarBorder