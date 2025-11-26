'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/data'

interface FAQProps {
  limit?: number
  showTitle?: boolean
}

export default function FAQ({ limit = faqs.length, showTitle = true }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const displayFaqs = faqs.slice(0, limit)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <span className="text-coffee-500 font-accent text-xl">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mt-2">
              Frequently Asked Questions
            </h2>
            <div className="section-divider mt-6" />
          </div>
        )}

        <div className="space-y-4">
          {displayFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-coffee-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-coffee-50 transition-colors"
              >
                <span className="font-semibold text-espresso pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-coffee-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-espresso-light leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
