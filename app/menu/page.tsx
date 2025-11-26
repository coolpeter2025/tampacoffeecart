import { Metadata } from 'next'
import Link from 'next/link'
import { Coffee, Sparkles, Heart, Plus, ArrowRight } from 'lucide-react'
import { siteConfig, menu } from '@/lib/data'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: `Drink Menu | ${siteConfig.businessName}`,
  description: 'Explore our coffee cart menu featuring espresso drinks, specialty lattes, and non-coffee options. Full barista menu for your Tampa Bay event.',
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-coffee-100 via-cream-50 to-coffee-50 relative overflow-hidden">
        <div className="absolute inset-0 coffee-beans-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-coffee-500 font-accent text-xl">Our Offerings</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mt-2 mb-6">
              Drink Menu
            </h1>
            <p className="text-xl text-espresso-light leading-relaxed">
              From classic espresso drinks to creative specialty lattes, our baristas craft 
              each drink with care. All drinks can be customized to your guests' preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Note */}
      <section className="py-8 bg-coffee-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            <strong>Note:</strong> This is our standard menu. We can create custom menus for your event, 
            including signature drinks for weddings and branded options for corporate events!
          </p>
        </div>
      </section>

      {/* Espresso Drinks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center">
              <Coffee className="w-7 h-7 text-coffee-600" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-espresso">Espresso Drinks</h2>
              <p className="text-coffee-500">Classic coffee shop favorites</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.espressoDrinks.map((drink, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-espresso mb-2">{drink.name}</h3>
                <p className="text-espresso-light">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Drinks */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-coffee-600" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-espresso">Specialty Drinks</h2>
              <p className="text-coffee-500">Creative flavored creations</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.specialtyDrinks.map((drink, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-espresso mb-2">{drink.name}</h3>
                <p className="text-espresso-light">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Coffee Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-coffee-600" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-espresso">Non-Coffee Options</h2>
              <p className="text-coffee-500">For those who prefer something different</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menu.nonCoffee.map((drink, index) => (
              <div key={index} className="bg-cream-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-espresso mb-2">{drink.name}</h3>
                <p className="text-espresso-light">{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-coffee-100 rounded-xl flex items-center justify-center">
              <Plus className="w-7 h-7 text-coffee-600" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-espresso">Customizations</h2>
              <p className="text-coffee-500">Make it your own</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menu.addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-espresso mb-1">{addon.name}</h3>
                {addon.description && (
                  <p className="text-sm text-espresso-light">{addon.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-4">
            Want a Custom Menu?
          </h2>
          <p className="text-lg text-espresso-light mb-8">
            We love creating custom drink menus for special events! Signature wedding cocktails, 
            branded corporate drinks, themed party specials – let's get creative together.
          </p>
          <Link href="/contact" className="btn-primary">
            Discuss Your Custom Menu
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
