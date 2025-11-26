import { Metadata } from 'next'
import { locations, siteConfig } from '@/lib/data'
import LocationCard from '@/components/LocationCard'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.businessName}`,
  description: 'Mobile coffee cart service throughout Tampa Bay including Tampa, St. Petersburg, Clearwater, Brandon, Wesley Chapel, and 20+ more communities.',
}

export default function LocationsPage() {
  // Group locations by county
  const hillsborough = locations.filter((l) => l.county === 'Hillsborough')
  const pinellas = locations.filter((l) => l.county === 'Pinellas')
  const pasco = locations.filter((l) => l.county === 'Pasco')

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-coffee-500 font-accent text-xl">Where We Serve</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mt-2 mb-6">
              Tampa Bay Service Areas
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed">
              We proudly bring our mobile coffee cart service to communities throughout 
              Hillsborough, Pinellas, and Pasco counties. Find your area below!
            </p>
          </div>
        </div>
      </section>

      {/* Hillsborough County */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-espresso mb-8">
            Hillsborough County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hillsborough.map((location) => (
              <LocationCard
                key={location.slug}
                slug={location.slug}
                name={location.name}
                county={location.county}
                description={location.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pinellas County */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-espresso mb-8">
            Pinellas County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinellas.map((location) => (
              <LocationCard
                key={location.slug}
                slug={location.slug}
                name={location.name}
                county={location.county}
                description={location.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pasco County */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-espresso mb-8">
            Pasco County
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pasco.map((location) => (
              <LocationCard
                key={location.slug}
                slug={location.slug}
                name={location.name}
                county={location.county}
                description={location.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Area? */}
      <section className="py-16 bg-coffee-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-espresso mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-lg text-espresso-light mb-8">
            We may still be able to serve your event! Contact us to discuss your location 
            and we'll let you know if we can make it work.
          </p>
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="btn-primary"
          >
            Call Us: {siteConfig.phone}
          </a>
        </div>
      </section>

      <CTASection />
    </>
  )
}
