import { useEffect, useRef } from "react"
import { config } from "../config"

interface Snowflake {
  x: number
  y: number
  radius: number
  speed: number
  opacity: number
}

export default function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const snowflakes = useRef<Snowflake[]>([])
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createSnowflakes = () => {
      snowflakes.current = Array.from({ length: config.snowCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (config.snowMaxSize - config.snowMinSize) + config.snowMinSize,
        speed: Math.random() * (config.snowMaxSpeed - config.snowMinSpeed) + config.snowMinSpeed,
        opacity: Math.random() * (config.snowOpacityMax - config.snowOpacityMin) + config.snowOpacityMin,
      }))
    }

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.current.forEach((flake) => {
        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`
        ctx.fill()

        flake.y += flake.speed
        flake.x += (mousePos.current.x - canvas.width / 2) / 200

        if (flake.y > canvas.height) {
          flake.y = 0
          flake.x = Math.random() * canvas.width
        }

        if (flake.x > canvas.width) flake.x = 0
        if (flake.x < 0) flake.x = canvas.width
      })

      requestAnimationFrame(drawSnowflakes)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY }
    }

    resizeCanvas()
    createSnowflakes()
    drawSnowflakes()

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
}

