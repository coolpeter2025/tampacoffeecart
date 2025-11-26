import { Metadata } from 'next'
import Link from 'next/link'
import { Coffee, Heart, Users, Award, MapPin, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import TrustSignals from '@/components/TrustSignals'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.businessName}`,
  description: 'Learn about Tampa Bay Coffee Cart - Tampa Bay\'s premier mobile espresso service for weddings, corporate events, and private parties.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-coffee-500 font-accent text-xl">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mt-2 mb-6">
              About Tampa Bay Coffee Cart
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed">
              We're passionate about bringing exceptional coffee experiences to Tampa Bay's 
              most memorable events. From weddings to corporate gatherings, we believe every 
              celebration deserves barista-quality drinks.
            </p>
          </div>
        </div>
      </section>

      <TrustSignals />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-6">
                From Coffee Lovers to Event Specialists
              </h2>
              <div className="space-y-4 text-lg text-espresso-light leading-relaxed">
                <p>
                  Tampa Bay Coffee Cart started with a simple idea: what if we could bring the 
                  cozy coffee shop experience to any event, anywhere in Tampa Bay?
                </p>
                <p>
                  After years working in specialty coffee and event planning, we saw an opportunity 
                  to combine our passions. We invested in top-quality espresso equipment, built our 
                  beautiful mobile cart, and set out to serve the Tampa Bay community.
                </p>
                <p>
                  Today, we've proudly served over 100 events across Hillsborough, Pinellas, and 
                  Pasco counties. From intimate backyard weddings to large corporate conferences, 
                  we bring the same dedication to quality and service to every single event.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-coffee-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-display font-bold text-espresso">1,000+</p>
                <p className="text-coffee-600">Drinks Served</p>
              </div>
              <div className="bg-coffee-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-display font-bold text-espresso">100+</p>
                <p className="text-coffee-600">Happy Events</p>
              </div>
              <div className="bg-coffee-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-display font-bold text-espresso">100%</p>
                <p className="text-coffee-600">Satisfaction</p>
              </div>
              <div className="bg-coffee-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-coffee-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-display font-bold text-espresso">25+</p>
                <p className="text-coffee-600">Areas Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mt-2">
              Our Values
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-espresso mb-4">Quality First</h3>
              <p className="text-espresso-light">
                We use only premium coffee beans, fresh ingredients, and professional-grade equipment. 
                No shortcuts, no compromises.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-espresso mb-4">Personal Touch</h3>
              <p className="text-espresso-light">
                Every event is special to us. We work closely with you to customize our service 
                to your vision and needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-coffee-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-espresso mb-4">Community Focus</h3>
              <p className="text-espresso-light">
                We're proud to be part of the Tampa Bay community. We support local suppliers 
                and love connecting with our neighbors at events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">The People Behind the Cart</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mt-2">
              Our Team
            </h2>
            <div className="section-divider mt-6" />
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-espresso-light leading-relaxed mb-8">
              Our team of experienced baristas brings passion and expertise to every event. 
              Each team member is trained in specialty coffee preparation, customer service, 
              and event logistics. We're not just serving coffee – we're creating experiences.
            </p>
            <p className="text-lg text-espresso-light leading-relaxed">
              All of our baristas are professionally trained, friendly, and dedicated to making 
              your event special. They arrive in professional attire, set up efficiently, and 
              engage warmly with your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-espresso-light mb-8">
            Let's bring exceptional coffee to your next Tampa Bay event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  )
}
