import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.businessName}`,
  description: 'Get a free quote for mobile coffee cart service in Tampa Bay. Contact Tampa Bay Coffee Cart for weddings, corporate events, and private parties.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-coffee-500 font-accent text-xl">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mt-2 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed">
              Ready to bring exceptional coffee to your event? Fill out the form below 
              or give us a call. We respond to all inquiries within 24 hours!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-display font-bold text-espresso mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="flex items-start gap-4 p-4 bg-coffee-50 rounded-xl hover:bg-coffee-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-coffee-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-coffee-600 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">Phone</p>
                    <p className="text-coffee-600 font-semibold">{siteConfig.phone}</p>
                    <p className="text-sm text-espresso-light">Call or text anytime</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-4 bg-coffee-50 rounded-xl hover:bg-coffee-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-coffee-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-coffee-600 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">Email</p>
                    <p className="text-coffee-600 font-semibold">{siteConfig.email}</p>
                    <p className="text-sm text-espresso-light">We reply within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-coffee-50 rounded-xl">
                  <div className="w-12 h-12 bg-coffee-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">Service Area</p>
                    <p className="text-coffee-600 font-semibold">{siteConfig.address}</p>
                    <p className="text-sm text-espresso-light">Hillsborough, Pinellas & Pasco Counties</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-coffee-50 rounded-xl">
                  <div className="w-12 h-12 bg-coffee-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-espresso">Hours</p>
                    <p className="text-coffee-600 font-semibold">{siteConfig.hours}</p>
                    <p className="text-sm text-espresso-light">Flexible scheduling for your event</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <p className="font-bold text-espresso mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialMedia.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-coffee-100 rounded-xl flex items-center justify-center hover:bg-coffee-500 hover:text-white transition-colors text-coffee-600"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={siteConfig.socialMedia.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-coffee-100 rounded-xl flex items-center justify-center hover:bg-coffee-500 hover:text-white transition-colors text-coffee-600"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-cream-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl font-display font-bold text-espresso mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-espresso-light mb-8">
                  Tell us about your event and we'll get back to you with a custom quote.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  )
}
