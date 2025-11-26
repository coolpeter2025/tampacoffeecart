import { Metadata } from 'next'
import { services, siteConfig } from '@/lib/data'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import TrustSignals from '@/components/TrustSignals'

export const metadata: Metadata = {
  title: `Coffee Cart Services | ${siteConfig.businessName}`,
  description: 'Mobile coffee cart services for weddings, corporate events, private parties, and more in Tampa Bay. Professional baristas and premium espresso drinks.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-coffee-500 font-accent text-xl">Our Services</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mt-2 mb-6">
              Mobile Coffee Cart Services
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed">
              From elegant wedding receptions to energizing corporate events, we bring the coffee shop experience directly to your venue. Choose the perfect service for your occasion.
            </p>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Services Grid */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                shortName={service.shortName}
                icon={service.icon}
                description={service.description}
                priceRange={service.priceRange}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">Full Service</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mt-2">
              What's Included
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Professional barista(s)',
              'Mobile espresso cart',
              'Premium coffee beans',
              'Full espresso menu',
              'Milk alternatives (oat, almond, coconut)',
              'Cups, lids, and napkins',
              'Setup and breakdown',
              'All equipment provided',
              'Customizable drink menu',
              'Branded cups available',
              'Indoor & outdoor service',
              'Liability insurance',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-coffee-50 rounded-xl">
                <div className="w-6 h-6 bg-coffee-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-espresso">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Not Sure Which Service You Need?"
        subtitle="Let's chat! We'll help you find the perfect coffee cart package for your event."
      />
    </>
  )
}
