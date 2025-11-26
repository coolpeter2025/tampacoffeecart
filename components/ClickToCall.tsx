'use client'

import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function ClickToCall() {
  return (
    <a
      href={`tel:${siteConfig.phoneClean}`}
      className="click-to-call"
      aria-label={`Call us at ${siteConfig.phone}`}
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Call Now</span>
    </a>
  )
}
