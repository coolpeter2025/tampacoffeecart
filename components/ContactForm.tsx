'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { services } from '@/lib/data'

interface ContactFormProps {
  preselectedService?: string
  preselectedLocation?: string
}

export default function ContactForm({ preselectedService, preselectedLocation }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      eventDate: formData.get('eventDate') as string,
      eventType: formData.get('eventType') as string,
      guestCount: formData.get('guestCount') as string,
      location: formData.get('location') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setLoading(false)
      setSubmitted(true)
    } catch (err) {
      setLoading(false)
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We've received your request and will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-red-700 mb-4">{error}</p>
          <button
            onClick={() => setError(null)}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-espresso mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-input"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-espresso mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-espresso mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="form-input"
            placeholder="(813) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-sm font-semibold text-espresso mb-2">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="eventType" className="block text-sm font-semibold text-espresso mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            name="eventType"
            required
            className="form-input"
            defaultValue={preselectedService || ''}
          >
            <option value="">Select event type</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.shortName}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="guestCount" className="block text-sm font-semibold text-espresso mb-2">
            Expected Guests
          </label>
          <select
            id="guestCount"
            name="guestCount"
            className="form-input"
          >
            <option value="">Select range</option>
            <option value="1-25">1-25 guests</option>
            <option value="26-50">26-50 guests</option>
            <option value="51-100">51-100 guests</option>
            <option value="101-200">101-200 guests</option>
            <option value="200+">200+ guests</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-espresso mb-2">
          Event Location / Venue
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="form-input"
          placeholder="Venue name or address"
          defaultValue={preselectedLocation || ''}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-espresso mb-2">
          Tell Us About Your Event
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="form-textarea"
          placeholder="Share any details about your event, special requests, or questions..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-5 h-5" />
              Get Your Free Quote
            </span>
          )}
        </button>
      </div>

      <p className="text-sm text-coffee-500 text-center md:text-left">
        We'll respond within 24 hours. No spam, ever.
      </p>
    </form>
  )
}
