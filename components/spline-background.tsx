"use client"

import { useEffect, useRef } from "react"

export function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create script element
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"
    document.head.appendChild(script)

    // Create spline viewer element
    const splineViewer = document.createElement("spline-viewer")
    splineViewer.setAttribute("url", "https://prod.spline.design/CtqDqugwS2WjOviz/scene.splinecode")
    splineViewer.style.width = "100%"
    splineViewer.style.height = "100%"
    splineViewer.style.position = "absolute"
    splineViewer.style.top = "0"
    splineViewer.style.left = "0"
    splineViewer.style.zIndex = "0"

    // Append to container when ready
    if (containerRef.current) {
      containerRef.current.appendChild(splineViewer)
    }

    return () => {
      // Clean up
      document.head.removeChild(script)
      if (containerRef.current && containerRef.current.contains(splineViewer)) {
        containerRef.current.removeChild(splineViewer)
      }
    }
  }, [])

  return (
  <div 
    ref={containerRef} 
    className="fixed inset-0 w-full h-full z-0 bg-gradient-to-br from-black via-purple-900/20 to-black" 
    aria-hidden="true"
    style={{ 
      willChange: 'transform',
      transform: 'translateZ(0)',
    }} 
  />
)
}