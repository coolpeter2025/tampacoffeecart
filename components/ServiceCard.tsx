import Link from 'next/link'
import { Building2, Heart, PartyPopper, Briefcase, Sparkles, Store, ArrowRight } from 'lucide-react'

const iconMap = {
  Building2,
  Heart,
  PartyPopper,
  Briefcase,
  Sparkles,
  Store,
}

interface ServiceCardProps {
  slug: string
  name: string
  shortName: string
  icon: string
  description: string
  locationSlug?: string
}

export default function ServiceCard({
  slug,
  name,
  shortName,
  icon,
  description,
  locationSlug,
}: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Building2
  const href = locationSlug
    ? `/services/${slug}/${locationSlug}`
    : `/services/${slug}`

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl p-8 shadow-md card-hover border border-coffee-100 h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-coffee-500 transition-colors">
          <Icon className="w-7 h-7 text-coffee-600 group-hover:text-white transition-colors" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-bold text-espresso mb-3 group-hover:text-coffee-600 transition-colors">
          {shortName}
        </h3>
        <p className="text-espresso-light leading-relaxed flex-grow mb-4">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-end mt-auto pt-4 border-t border-coffee-100">
          <span className="flex items-center gap-1 text-coffee-600 font-semibold group-hover:gap-2 transition-all">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
