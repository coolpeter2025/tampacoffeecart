import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

interface LocationCardProps {
  slug: string
  name: string
  county: string
  description: string
  serviceSlug?: string
}

export default function LocationCard({
  slug,
  name,
  county,
  description,
  serviceSlug,
}: LocationCardProps) {
  const href = serviceSlug
    ? `/services/${serviceSlug}/${slug}`
    : `/locations/${slug}`

  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-xl p-6 shadow-sm card-hover border border-coffee-100 h-full">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-coffee-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-coffee-500 transition-colors">
            <MapPin className="w-5 h-5 text-coffee-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-espresso group-hover:text-coffee-600 transition-colors">
              {name}
            </h3>
            <p className="text-sm text-coffee-500">{county} County</p>
            <p className="text-sm text-espresso-light mt-2">{description}</p>
          </div>
          <ArrowRight className="w-5 h-5 text-coffee-300 group-hover:text-coffee-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </div>
    </Link>
  )
}
