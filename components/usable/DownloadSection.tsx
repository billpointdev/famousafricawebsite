"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DownloadSection() {
  return (
    <section className="bg-[#EBF7FF]  flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D3648]">
              Download <span className="text-[#7CC5FF]">Ofunds App</span>
            </h2>
            <p className="text-lg md:text-xl text-[#2D3648] max-w-lg">
              Get the APP today to start enjoying amazing deals on gift cards, payments, and bills with{" "}

            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="h-14 px-6 bg-white hover:bg-gray-50 border border-gray-200 rounded-full"
                >
                  <Image
                    src="/apple.png"
                    alt="Apple logo"
                    width={24}
                    height={24}
                    className="mr-2 h-6 w-6"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-sm font-semibold text-[#2D3648]">App Store</div>
                  </div>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="h-14 px-6 bg-white hover:bg-gray-50 border border-gray-200 rounded-full"
                >
                  <Image
                    src="/play.png"
                    alt="Google Play logo"
                    width={24}
                    height={24}
                    className="mr-2 h-6 w-6"
                  />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-sm font-semibold text-[#2D3648]">Google Play</div>
                  </div>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative "
          >

            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className=" "
            >
              <Image
                src="/IMG-20241122-WA0002-removebg.png"
                alt="NOSH App Screenshot 1"
                width={1000}
                height={1000}
                
                className="w-full h-auto rounded-[32px] shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

