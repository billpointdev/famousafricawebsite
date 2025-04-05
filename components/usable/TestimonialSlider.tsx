"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from "next/image"

interface Testimonial {
  id: number
  content: string
  name: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "This product has completely transformed my workflow. It's intuitive, powerful, and a joy to use every day.",
    name: "Alex Johnson",
    role: "UX Designer",
    company: "DesignCo"
  },
  {
    id: 2,
    content: "I've tried many similar tools, but this one stands out. The attention to detail and user experience is unmatched.",
    name: "Samantha Lee",
    role: "Product Manager",
    company: "TechInnovate"
  },
  {
    id: 3,
    content: "The customer support is phenomenal. They went above and beyond to ensure I got the most out of the product.",
    name: "Michael Chen",
    role: "Software Engineer",
    company: "CodeCraft"
  },
  {
    id: 4,
    content: "This tool has significantly improved our team's productivity. It's now an essential part of our daily operations.",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthHub"
  },
  {
    id: 5,
    content: "The analytics features are game-changing. We're making more informed decisions than ever before.",
    name: "David Kim",
    role: "Data Analyst",
    company: "DataDrive"
  }
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [])

  return (
    <section className="bg-gradient-to-br from-[black] to-[green] py-16 px-4 sm:px-6 lg:px-8  flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {[-1, 0, 1].map((offset) => {
                const testimonialIndex = (currentIndex + offset + testimonials.length) % testimonials.length
                const testimonial = testimonials[testimonialIndex]
                return (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-xl p-8 relative z-10 ${
                      offset === 0 ? 'md:col-span-1 md:col-start-2' : 'hidden md:block'
                    }`}
                  >
                    <Quote className="text-purple-300 w-12 h-12 mb-4 opacity-50" />
                    <blockquote className="text-white text-lg leading-relaxed mb-6">
                      {testimonial.content}
                    </blockquote>
                    <div className="flex items-center">
                      <Image
                        src={`https://i.pravatar.cc/120?img=${testimonial.id}`}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-purple-300">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20">
            <button
              onClick={prevTestimonial}
              className="bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-full shadow-lg text-white hover:bg-opacity-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white bg-opacity-20 backdrop-blur-lg p-3 rounded-full shadow-lg text-white hover:bg-opacity-30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

