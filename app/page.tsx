import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Coffee, MapPin, Calendar, Users, CheckCircle } from 'lucide-react'
import { siteConfig, services, locations, testimonials } from '@/lib/data'
import TrustSignals from '@/components/TrustSignals'
import ServiceCard from '@/components/ServiceCard'
import LocationCard from '@/components/LocationCard'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  const featuredLocations = locations.slice(0, 8)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden grain-overlay">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50" />
        <div className="absolute inset-0 coffee-beans-pattern opacity-50" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-coffee-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cream-300/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="stagger-item order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-coffee-500/10 rounded-full text-coffee-600 font-semibold text-sm mb-6">
                ☕ Premium Mobile Espresso Service
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-espresso leading-tight mb-6">
                Exceptional Coffee,{' '}
                <span className="text-gradient">Delivered</span> to Your Event
              </h1>
              
              <p className="text-xl text-espresso-light leading-relaxed mb-8 max-w-xl">
                Transform your weddings, corporate events, and private parties with Tampa Bay's premier mobile coffee cart. Professional baristas, artisan espresso, unforgettable experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-coffee-600" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">100+</p>
                    <p className="text-sm text-coffee-500">Events Served</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-coffee-600" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">25+</p>
                    <p className="text-sm text-coffee-500">Tampa Bay Areas</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-coffee-600" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">1,000+</p>
                    <p className="text-sm text-coffee-500">Drinks Served</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative stagger-item order-1 lg:order-2">
              <div className="relative">
                <div className="w-full aspect-square max-w-lg mx-auto relative">
                  {/* Hero Image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/hero-image.webp"
                      alt="Delightful Bean Coffee Cart - Tampa Bay Mobile Espresso Service"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-10 left-0 animate-float hidden lg:block">
                    <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-espresso text-sm">Booking Confirmed!</p>
                        <p className="text-xs text-coffee-500">Wedding Reception</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-0 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <div className="flex gap-1 mb-1">
                        {[1,2,3,4,5].map((i) => (
                          <span key={i} className="text-cream-400">★</span>
                        ))}
                      </div>
                      <p className="text-sm text-espresso font-medium">"Best coffee cart ever!"</p>
                      <p className="text-xs text-coffee-500">- Recent Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mt-2">
              Coffee Cart for Every Occasion
            </h2>
            <p className="text-xl text-espresso-light mt-4 max-w-2xl mx-auto">
              From intimate gatherings to large corporate events, we bring the coffee shop experience to you.
            </p>
            <div className="section-divider mt-6" />
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
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mt-2">
              How It Works
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Get a Quote', description: 'Tell us about your event and we\'ll provide a custom quote within 24 hours.', icon: Calendar },
              { step: '02', title: 'Customize', description: 'Choose your drink menu, service hours, and any special requests.', icon: Coffee },
              { step: '03', title: 'We Set Up', description: 'Our team arrives early to set up our beautiful mobile coffee cart.', icon: MapPin },
              { step: '04', title: 'Enjoy!', description: 'Your guests enjoy barista-crafted drinks while you enjoy your event.', icon: Users },
            ].map((item, index) => (
              <div key={index} className="text-center stagger-item">
                <div className="relative mb-6 inline-block">
                  <div className="w-20 h-20 bg-coffee-100 rounded-2xl flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-coffee-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-coffee-600 rounded-full text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-espresso mb-2">{item.title}</h3>
                <p className="text-espresso-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">Where We Serve</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mt-2">
              Tampa Bay Service Areas
            </h2>
            <p className="text-xl text-espresso-light mt-4 max-w-2xl mx-auto">
              Proudly serving communities throughout Hillsborough, Pinellas, and Pasco counties.
            </p>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredLocations.map((location) => (
              <LocationCard
                key={location.slug}
                slug={location.slug}
                name={location.name}
                county={location.county}
                description={location.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/locations" className="btn-secondary">
              View All {locations.length} Service Areas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <FAQ limit={4} />

      {/* Final CTA */}
      <CTASection />
    </>
  )
}
