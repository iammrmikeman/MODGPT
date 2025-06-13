
import { useEffect, useRef } from "react"

export function ShaderCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (el) {
      el.animate([
        { opacity: 0.3 },
        { opacity: 1 },
        { opacity: 0.3 }
      ], {
        duration: 5000,
        iterations: Infinity
      })
    }
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-gradient-to-br from-slate-800 via-black to-slate-800 opacity-70"
      style={{ zIndex: 0 }}
    />
  )
}
