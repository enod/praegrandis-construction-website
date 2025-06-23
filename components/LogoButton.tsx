'use client'

import { getAssetPath } from '@/lib/assets'

export default function LogoButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleScrollToTop}
      className="focus:outline-none"
    >
      <img
        src={getAssetPath("/logo.png")}
        alt="Praegrandis Construction"
        className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
      />
    </button>
  )
}