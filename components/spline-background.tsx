"use client"

import Spline from '@splinetool/react-spline/next'

export function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 bg-black" aria-hidden="true">
      <Spline 
        scene="https://prod.spline.design/lAna6UWWKmCZkT-L/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}