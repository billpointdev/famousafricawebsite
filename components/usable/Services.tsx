"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Bank Transactions",
    description: "Subscribe to your favorite cable TV providers with flexible plans and instant activation.",
    image: "/image1.jpg"
  },
  {
    id: 2,
    title: "Sell Gift Cards",
    description: "Instantly exchange your gift cards for naira. Enjoy the best exchange rates and instant payment.",
    image: "/image2.jpg"
  },
  {
    id: 3,
    title: "Buy Airtime",
    description: "Purchase airtime for any network provider quickly and easily.",
    image: "/image3.jpg"
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 px-4 md:px-6 max-w-7xl flex items-center justify-center flex-col mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-[#2D3648] mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Top Services For Everything
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative w-[350px] overflow-hidden rounded-lg shadow-lg group"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-semibold">{service.title}</h3>
              <motion.p 
                className="text-white mb-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

