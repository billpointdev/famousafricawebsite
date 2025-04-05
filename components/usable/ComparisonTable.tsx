"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const comparisonData = [
  {
    feature: "Instant Transaction Speed",
    ofunds: "A few minutes",
    others: "600 Years 😉",
    highlighted: true
  },
  {
    feature: "Withdrawal Charges",
    ofunds: "Free",
    others: "Ridiculous",
    highlighted: false
  },
  {
    feature: "Realtime Notifications",
    ofunds: "Always",
    others: "Not Important",
    highlighted: true
  },
  {
    feature: "Customer Support",
    ofunds: "24/7",
    others: "Only in the morning 😒",
    highlighted: false
  },
  {
    feature: "Rates",
    ofunds: "90%",
    others: "60%",
    highlighted: true
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function ComparisonTable() {
  return (
    <section className="py-16 px-4 md:px-6 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-[1fr,2fr,2fr,2fr] gap-8"
      >
        {/* Title Column */}
        <motion.div variants={itemVariants} className="md:self-start">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3648] mb-6">
            What do you prefer?
          </h2>
          <Button 
            className="bg-transparent hover:bg-transparent text-[limegreen] px-5 group"
          >
            Join Ofunds Today{" "}
            <motion.span
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>

        {/* Headers */}
        <motion.div variants={itemVariants} className="hidden md:block font-semibold text-xl text-[#2D3648]">
          Feature
        </motion.div>
        <motion.div variants={itemVariants} className="hidden md:block font-semibold text-xl text-[#2D3648]">
          Ofunds
        </motion.div>
        <motion.div variants={itemVariants} className="hidden md:block font-semibold text-xl text-[#2D3648]">
          'DEM OTHER PLATFORMS'
        </motion.div>

        {/* Comparison Rows */}
        {comparisonData.map((item, index) => (
          <div key={index}>
            <div className="md:hidden" /> {/* Spacer for mobile */}
            <motion.div
              key={`feature-${index}`}
              variants={itemVariants}
              className={`p-4 rounded-lg ${item.highlighted ? 'bg-gray-50' : ''}`}
            >
              <div className="md:hidden font-semibold mb-2">Feature</div>
              {item.feature}
            </motion.div>
            <motion.div
              key={`ofunds-${index}`}
              variants={itemVariants}
              className={`p-4 rounded-lg ${item.highlighted ? 'bg-gray-50' : ''}`}
            >
              <div className="md:hidden font-semibold mb-2">Ofunds</div>
              {item.ofunds}
            </motion.div>
            <motion.div
              key={`others-${index}`}
              variants={itemVariants}
              className={`p-4 rounded-lg ${item.highlighted ? 'bg-gray-50' : ''}`}
            >
              <div className="md:hidden font-semibold mb-2">'DEM OTHER PLATFORMS'</div>
              {item.others}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

