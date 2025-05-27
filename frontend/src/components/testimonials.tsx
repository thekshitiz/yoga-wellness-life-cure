"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The combination of yoga and plants creates such a peaceful atmosphere. I leave each session feeling renewed and balanced.",
    author: "Sarah J.",
    role: "Yoga Member",
  },
  {
    quote:
      "I've transformed my apartment into a green sanctuary with plants from Harmony. Their care tips have been invaluable for a beginner like me.",
    author: "Michael T.",
    role: "Plant Enthusiast",
  },
  {
    quote:
      "The morning flow classes have become an essential part of my routine. The instructors are knowledgeable and the plant-filled space is so calming.",
    author: "Emma R.",
    role: "Regular Attendee",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">What Our Community Says</h2>

          <div className="relative">
            <Card className="border-none bg-white shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <Quote className="h-10 w-10 text-neutral-400" />
                </div>
                <blockquote className="text-center text-xl italic text-neutral-800 mb-6">{testimonials[currentIndex].quote}</blockquote>
                <div className="text-center">
                  <p className="font-medium text-neutral-900">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-neutral-600">{testimonials[currentIndex].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-neutral-900" : "bg-neutral-300"}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

