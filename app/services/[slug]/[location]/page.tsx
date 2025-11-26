import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, MapPin, Phone, Clock, Star, Shield } from 'lucide-react'
import { services, locations, siteConfig, generateMetaTitle, generateMetaDescription } from '@/lib/data'
import ContactForm from '@/components/ContactForm'
import CTASection from '@/components/CTASection'

interface ServiceLocationPageProps {
  params: Promise<{ slug: string; location: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; location: string }[] = []
  
  for (const service of services) {
    for (const location of locations) {
      params.push({
        slug: service.slug,
        location: location.slug,
      })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: ServiceLocationPageProps): Promise<Metadata> {
  const { slug, location: locationSlug } = await params
  const service = services.find((s) => s.slug === slug)
  const location = locations.find((l) => l.slug === locationSlug)
  
  if (!service || !location) {
    return { title: 'Page Not Found' }
  }

  return {
    title: generateMetaTitle(service.shortName, location.name),
    description: generateMetaDescription(service.shortName, location.name),
    openGraph: {
      title: `${service.shortName} ${location.name} - Tampa Bay Coffee Cart`,
      description: `Professional ${service.shortName.toLowerCase()} in ${location.name}, FL. Book our mobile coffee cart for your next event!`,
    },
  }
}

export default async function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const { slug, location: locationSlug } = await params
  const service = services.find((s) => s.slug === slug)
  const location = locations.find((l) => l.slug === locationSlug)

  if (!service || !location) {
    notFound()
  }

  // Get nearby locations for internal linking
  const nearbyLocations = locations
    .filter((l) => l.county === location.county && l.slug !== location.slug)
    .slice(0, 4)

  // Get other services for this location
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* Hero - Optimized for Local SEO */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb - Important for SEO */}
            <nav className="flex flex-wrap items-center gap-2 text-sm mb-6">
              <Link href="/" className="text-coffee-500 hover:text-coffee-600">Home</Link>
              <span className="text-coffee-300">/</span>
              <Link href="/services" className="text-coffee-500 hover:text-coffee-600">Services</Link>
              <span className="text-coffee-300">/</span>
              <Link href={`/services/${service.slug}`} className="text-coffee-500 hover:text-coffee-600">{service.shortName}</Link>
              <span className="text-coffee-300">/</span>
              <span className="text-espresso">{location.name}</span>
            </nav>

            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-coffee-500/10 rounded-full text-coffee-600 font-semibold text-sm mb-4">
              <MapPin className="w-4 h-4" />
              Serving {location.name}, FL
            </div>

            {/* H1 - Primary Keyword Target */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-espresso mb-4">
              {service.shortName} in {location.name}
            </h1>
            
            {/* Subtitle with secondary keywords */}
            <p className="text-xl md:text-2xl text-coffee-600 font-medium mb-4">
              Premium Mobile Coffee Cart for Your {location.name} Event
            </p>

            <p className="text-lg text-espresso-light leading-relaxed mb-8 max-w-3xl">
              Looking for professional {service.shortName.toLowerCase()} in {location.name}? 
              Tampa Bay Coffee Cart brings barista-quality espresso drinks directly to your venue 
              in {location.name} and throughout {location.county} County. {service.description}
            </p>

            {/* Trust Signals Row */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="trust-badge">
                <Star className="w-4 h-4 text-cream-500 fill-cream-500" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="trust-badge">
                <Clock className="w-4 h-4 text-coffee-500" />
                <span className="text-sm font-medium">Same-Day Response</span>
              </div>
              <div className="trust-badge">
                <Shield className="w-4 h-4 text-coffee-500" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#quote" className="btn-primary">
                Get Free Quote for {location.name}
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

      {/* Service Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - About the Service */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-espresso mb-6">
                About Our {service.shortName} Service in {location.name}
              </h2>
              <div className="prose prose-lg text-espresso-light">
                <p>{service.longDescription}</p>
                <p>
                  When you book our coffee cart for your {location.name} event, you get a complete 
                  mobile espresso experience. Our professional baristas arrive early to set up our 
                  beautiful cart, then serve your guests barista-crafted drinks throughout your event.
                </p>
                <p>
                  We have proudly served hundreds of events in {location.name} and throughout 
                  {location.county} County. From {location.description.toLowerCase()}, 
                  we bring the coffee shop experience to wherever you need us.
                </p>
              </div>
            </div>

            {/* Right - What's Included */}
            <div className="bg-coffee-50 rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold text-espresso mb-6">
                What is Included in Your {location.name} Booking
              </h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-coffee-500 flex-shrink-0 mt-0.5" />
                    <span className="text-espresso-light">{benefit}</span>
                  </div>
                ))}
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coffee-500 flex-shrink-0 mt-0.5" />
                  <span className="text-espresso-light">Travel to {location.name} included</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-coffee-500 flex-shrink-0 mt-0.5" />
                  <span className="text-espresso-light">Local {location.county} County expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-espresso mb-8 text-center">
            Perfect for {location.name} Events
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.idealFor.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-xl text-center shadow-sm"
              >
                <span className="font-medium text-espresso text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-espresso">
              Get Your Free Quote for {location.name}
            </h2>
            <p className="text-lg text-espresso-light mt-2">
              Tell us about your {location.name} event and we will respond within 24 hours.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-6 md:p-10">
            <ContactForm 
              preselectedService={service.slug} 
              preselectedLocation={location.name}
            />
          </div>
        </div>
      </section>

      {/* Internal Links - Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-cream-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-espresso mb-6">
              {service.shortName} in Nearby {location.county} County Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/services/${service.slug}/${nearby.slug}`}
                  className="flex items-center gap-2 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <MapPin className="w-4 h-4 text-coffee-500" />
                  <span className="text-sm font-medium text-espresso group-hover:text-coffee-600">
                    {service.shortName} in {nearby.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links - Other Services in This Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-espresso mb-6">
            Other Coffee Cart Services in {location.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.slug}
                href={`/services/${otherService.slug}/${location.slug}`}
                className="p-6 bg-coffee-50 rounded-xl hover:bg-coffee-100 transition-colors group"
              >
                <h3 className="font-bold text-espresso group-hover:text-coffee-600 mb-2">
                  {otherService.shortName} in {location.name}
                </h3>
                <p className="text-sm text-espresso-light">{otherService.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`/locations/${location.slug}`} className="text-coffee-600 font-semibold hover:text-coffee-700">
              View All Services in {location.name} →
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title={`Ready to Book in ${location.name}?`}
        subtitle={`Let us bring exceptional coffee to your ${location.name} event. Get a free quote today!`}
        variant="dark"
      />
    </>
  )
}
