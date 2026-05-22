'use client'

import { usePathname, useRouter } from 'next/navigation'
import { getAssetPath } from '@/lib/assets'

export default function LogoButton() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    router.push('/')
  }

  return (
    <button
      type="button"
      onClick={handleLogoClick}
      aria-label="Go to homepage"
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
