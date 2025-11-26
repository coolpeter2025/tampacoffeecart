import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'dark'
}

export default function CTASection({
  title = "Ready to Elevate Your Event?",
  subtitle = "Let's bring exceptional coffee to your next gathering. Get a free, no-obligation quote today.",
  variant = 'default'
}: CTASectionProps) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-20 relative overflow-hidden ${isDark ? 'bg-espresso' : 'bg-coffee-600'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 coffee-beans-pattern" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-xl text-coffee-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-coffee-700 font-bold rounded-full hover:bg-coffee-50 transition-colors shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {siteConfig.phone}
          </a>
        </div>

        <p className="mt-6 text-coffee-200 text-sm">
          No commitment required • Response within 24 hours
        </p>
      </div>
    </section>
  )
}
