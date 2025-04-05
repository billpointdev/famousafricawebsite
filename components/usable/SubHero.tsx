"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function SubHero() {
  return (
    <section className="relative py-20 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/image2.jpg')] bg-cover bg-center bg-no-repeat"
        
        style={{
          backgroundImage: `linear-gradient(rgba(45, 22, 8, 0.85), rgba(45, 22,
          87, 0.85)), url('/image1.jpg')`
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            You + NOSH = A Great Life
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the NOSH fun squad! We offer easy and quick transactions for everyone. 
            With modern, seamless payment options, we're the ultimate solution for 
            managing finances, gift cards, and mobile payments in Nigeria. Say hello 
            to easy and fun solutions with NOSH!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              className="bg-green-500 hover:bg-[green]/90 text-white px-8 py-6 rounded-full text-lg"
             
            >
              Join Nosh Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

