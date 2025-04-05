'use client'
import Image from "next/image"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export function Hero() {
  return (
      <motion.section
          className="flex flex-col items-center justify-center text-center px-4 pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
      >
        <motion.h1 className="max-w-4xl mx-auto" variants={itemVariants}>
          <span className="block text-3xl sm:text-5xl md:text-6xl font-semibold text-[#2D3648]">
            The Home of Rising Creators
          </span>
        </motion.h1>

        <motion.p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto" variants={itemVariants}>
          FamousAfrica is your spotlight. Showcase your impact, grow your audience, and unlock badges, opportunities, and rewards—all in one place.
          Built for creators, powered by community, and designed for African excellence.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center gap-4 mt-10" variants={itemVariants}>
          {["App Store", "Google Play"].map((platform, index) => (
              <motion.button
                  key={platform}
                  className="flex items-center gap-2 px-7 sm:px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                <Image
                    src={platform === 'App Store' ? '/apple.png' : '/play.png'}
                    alt={`${platform} Logo`}
                    width={30}
                    height={24}
                    objectFit="cover"
                />
                <div className="text-left">
                  <div className="text-xs">{index === 0 ? "Download on the" : "Get it on"}</div>
                  <div className="text-sm font-semibold">{platform}</div>
                </div>
              </motion.button>
          ))}
        </motion.div>

        {/* Badges Teaser */}
        <motion.div className="mt-12 flex flex-col items-center" variants={itemVariants}>
          <p className="mt-2 text-gray-700 font-medium">Earn badges as you grow 🌟</p>
        </motion.div>
      </motion.section>
  )
}
