import { Star, Award, Clock, Shield, MapPin, Coffee } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const iconMap = {
  Star,
  Award,
  Clock,
  Shield,
  MapPin,
  Coffee,
}

export default function TrustSignals() {
  return (
    <section className="py-8 bg-white border-y border-coffee-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.trustSignals.map((signal, index) => {
            const Icon = iconMap[signal.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-coffee-600" />
                </div>
                <div>
                  <p className="font-bold text-espresso">{signal.text}</p>
                  <p className="text-sm text-coffee-600 hidden sm:block">{signal.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
