
"use client"

import { useEffect, useRef } from "react"

export function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const splineViewer = document.createElement("spline-viewer")
    splineViewer.setAttribute("url", "https://prod.spline.design/lAna6UWWKmCZkT-L/scene.splinecode")
    splineViewer.style.width = "100%"
    splineViewer.style.height = "100%"
    splineViewer.style.position = "fixed"
    splineViewer.style.top = "0"
    splineViewer.style.left = "0"
    splineViewer.style.zIndex = "-1"
    
    // Add script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.89/build/spline-viewer.js"
    document.head.appendChild(script)

    // Append viewer when container is ready
    if (containerRef.current) {
      containerRef.current.appendChild(splineViewer)
    }

    return () => {
      document.head.removeChild(script)
      if (containerRef.current?.contains(splineViewer)) {
        containerRef.current.removeChild(splineViewer)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  )
}
