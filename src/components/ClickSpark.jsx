import { useRef, useEffect } from "react"

function ClickSpark({
  sparkColor = "#DB9F75",
  sparkSize = 10,
  sparkRadius = 18,
  sparkCount = 8,
  duration = 450,
  children
}) {
  const canvasRef = useRef(null)
  const sparksRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resize()
    window.addEventListener("resize", resize)

    let animationId

    const draw = () => {
      const ctx = canvas.getContext("2d")
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = performance.now()

      sparksRef.current = sparksRef.current.filter((spark) => {
        const progress = (now - spark.startTime) / duration
        if (progress >= 1) return false

        const eased = progress * (2 - progress)
        const distance = eased * sparkRadius
        const length = sparkSize * (1 - eased)

        const x1 = spark.x + distance * Math.cos(spark.angle)
        const y1 = spark.y + distance * Math.sin(spark.angle)
        const x2 = spark.x + (distance + length) * Math.cos(spark.angle)
        const y2 = spark.y + (distance + length) * Math.sin(spark.angle)

        ctx.strokeStyle = sparkColor
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()

        return true
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [sparkColor, sparkSize, sparkRadius, duration])

  const handleClick = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const now = performance.now()

    const sparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now
    }))

    sparksRef.current.push(...sparks)
  }

  return (
    <div onClick={handleClick} style={{ position: "relative", width: "100%", height: "100%" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 5
        }}
      />
      {children}
    </div>
  )
}

export default ClickSpark