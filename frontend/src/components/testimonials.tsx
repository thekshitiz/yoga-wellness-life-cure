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
    <section className="bg-primary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">What Our Community Says</h2>

          <div className="relative">
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  <Quote className="h-10 w-10 text-primary/40" />
                </div>
                <blockquote className="text-center text-xl italic mb-6">{testimonials[currentIndex].quote}</blockquote>
                <div className="text-center">
                  <p className="font-medium">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-primary/20"}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden md:block">
              <Button variant="ghost" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden md:block">
              <Button variant="ghost" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

