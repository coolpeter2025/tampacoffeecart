import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

interface TestimonialsProps {
  limit?: number
  showTitle?: boolean
}

export default function Testimonials({ limit = 3, showTitle = true }: TestimonialsProps) {
  const displayTestimonials = testimonials.slice(0, limit)

  return (
    <section className="py-20 bg-coffee-50 coffee-beans-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <span className="text-coffee-500 font-accent text-xl">What Our Clients Say</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mt-2">
              Loved by Tampa Bay
            </h2>
            <div className="section-divider mt-6" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover relative stagger-item"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-coffee-500 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cream-400 fill-cream-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-espresso-light leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-coffee-100 pt-4">
                <p className="font-bold text-espresso">{testimonial.name}</p>
                <p className="text-sm text-coffee-500">
                  {testimonial.role} • {testimonial.location}
                </p>
                <p className="text-xs text-coffee-400 mt-1">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
