import Link from 'next/link'
import { Coffee, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { siteConfig, services, locations } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const popularLocations = locations.slice(0, 8)
  
  return (
    <footer className="bg-espresso text-coffee-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-coffee-500 rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-xl font-display font-bold text-white">
                  Tampa Bay
                </span>
                <span className="block text-sm font-accent text-coffee-400 -mt-1">
                  Coffee Cart
                </span>
              </div>
            </Link>
            <p className="text-coffee-300 mb-6">
              {siteConfig.tagline}. Bringing premium espresso drinks to weddings, corporate events, and private parties throughout Tampa Bay.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.socialMedia.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center hover:bg-coffee-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socialMedia.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center hover:bg-coffee-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-coffee-300 hover:text-coffee-400 transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {popularLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-coffee-300 hover:text-coffee-400 transition-colors"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/locations"
                  className="text-coffee-400 hover:text-coffee-300 font-medium transition-colors"
                >
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="flex items-center gap-3 text-coffee-300 hover:text-coffee-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-coffee-500" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-coffee-300 hover:text-coffee-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-coffee-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-coffee-300">
                <MapPin className="w-5 h-5 text-coffee-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-coffee-600 text-white font-semibold rounded-full hover:bg-coffee-500 transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-coffee-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-coffee-400 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.businessName}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-coffee-400 hover:text-coffee-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-coffee-400 hover:text-coffee-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
