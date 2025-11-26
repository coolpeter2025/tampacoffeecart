import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import { services, locations, siteConfig } from '@/lib/data'
import ServiceCard from '@/components/ServiceCard'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

interface LocationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }))
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)
  
  if (!location) {
    return { title: 'Location Not Found' }
  }

  return {
    title: `Coffee Cart ${location.name} | Mobile Espresso Service | Tampa Bay Coffee Cart`,
    description: `Mobile coffee cart service in ${location.name}, FL. Professional baristas for weddings, corporate events, and private parties in ${location.name} and ${location.county} County.`,
  }
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params
  const location = locations.find((l) => l.slug === slug)

  if (!location) {
    notFound()
  }

  // Get nearby locations
  const nearbyLocations = locations
    .filter((l) => l.county === location.county && l.slug !== location.slug)
    .slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-coffee-500 hover:text-coffee-600">Home</Link>
              <span className="text-coffee-300">/</span>
              <Link href="/locations" className="text-coffee-500 hover:text-coffee-600">Locations</Link>
              <span className="text-coffee-300">/</span>
              <span className="text-espresso">{location.name}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coffee-500/10 rounded-full text-coffee-600 font-semibold text-sm mb-4">
              <MapPin className="w-4 h-4" />
              {location.county} County
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-espresso mb-6">
              Coffee Cart Service in {location.name}
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed mb-8">
              Tampa Bay Coffee Cart proudly serves {location.name} and the surrounding {location.county} County area. 
              {location.description}. Let us bring premium espresso drinks to your next event!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services" className="btn-primary">
                View Services in {location.name}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href={`tel:${siteConfig.phoneClean}`} className="btn-secondary">
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services in This Location */}
      <section id="services" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-coffee-500 font-accent text-xl">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mt-2">
              Coffee Cart Services in {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                shortName={service.shortName}
                icon={service.icon}
                description={service.description}
                locationSlug={location.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-coffee-500 font-accent text-xl">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mt-2">
              Book a Coffee Cart in {location.name}
            </h2>
            <p className="text-lg text-espresso-light mt-4">
              Tell us about your event and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-8 md:p-12">
            <ContactForm preselectedLocation={location.name} />
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-espresso mb-8">
              Also Serving Nearby in {location.county} County
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="flex items-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group text-center justify-center"
                >
                  <span className="font-medium text-espresso group-hover:text-coffee-600">
                    {nearby.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection variant="dark" />
    </>
  )
}
