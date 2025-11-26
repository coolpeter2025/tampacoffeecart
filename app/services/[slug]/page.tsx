import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import { services, locations, siteConfig } from '@/lib/data'
import ContactForm from '@/components/ContactForm'
import LocationCard from '@/components/LocationCard'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  
  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.name} | Tampa Bay Coffee Cart`,
    description: service.longDescription,
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const featuredLocations = locations.slice(0, 8)

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
              <Link href="/services" className="text-coffee-500 hover:text-coffee-600">Services</Link>
              <span className="text-coffee-300">/</span>
              <span className="text-espresso">{service.shortName}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-espresso mb-6">
              {service.name}
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed mb-8">
              {service.longDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#quote" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href={`tel:${siteConfig.phoneClean}`} className="btn-secondary">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-display font-bold text-espresso mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-coffee-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-espresso-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <h2 className="text-3xl font-display font-bold text-espresso mb-8">
                Perfect For
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {service.idealFor.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-coffee-50 rounded-xl text-center"
                  >
                    <span className="font-medium text-espresso">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas for This Service */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-coffee-500 font-accent text-xl">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mt-2">
              {service.shortName} in Tampa Bay
            </h2>
            <p className="text-lg text-espresso-light mt-4">
              We bring our {service.shortName.toLowerCase()} service throughout Tampa Bay
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/services/${service.slug}/${location.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <MapPin className="w-5 h-5 text-coffee-500" />
                <span className="font-medium text-espresso group-hover:text-coffee-600 transition-colors">
                  {service.shortName} in {location.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locations" className="text-coffee-600 font-semibold hover:text-coffee-700">
              View All {locations.length} Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials limit={3} />

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-coffee-500 font-accent text-xl">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mt-2">
              Request a Free Quote
            </h2>
            <p className="text-lg text-espresso-light mt-4">
              Tell us about your event and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-cream-50 rounded-2xl p-8 md:p-12">
            <ContactForm preselectedService={service.slug} />
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  )
}
