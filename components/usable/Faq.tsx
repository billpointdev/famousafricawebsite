"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "How Do I Get Started With Ofunds?",
    answer: (
      <>
        Getting started with NOSH is easy! Simply{" "}
        <Link href="#" className="text-[#7CC5FF] hover:underline">
          download the NOSH app
        </Link>{" "}
        from your app store or{" "}
        <Link href="#" className="text-[#7CC5FF] hover:underline">
          create an account on our website
        </Link>
        . Once your account is set up, you can begin using our platform. If you need any assistance, our friendly customer support team is available to help.
      </>
    ),
  },
  {
    question: "How Can I Contact Ofunds Support?",
    answer: "Our support team is available 24/7 through the in-app chat, email support@nosh.com, or call our hotline at 1-800-NOSH. We typically respond within minutes during business hours.",
  },
  {
    question: "What Payment Options Does Ofunds Support?",
    answer: "NOSH supports various payment methods including bank transfers, debit cards, credit cards, and mobile money. All major Nigerian banks are supported for instant transfers.",
  },
  {
    question: "How Secure Are My Transactions On Ofunds?",
    answer: "Your security is our top priority. We use bank-grade encryption for all transactions, maintain PCI DSS compliance, and implement multiple layers of security including two-factor authentication.",
  },
  {
    question: "How Can I Exchange Gift Cards For Cash With Ofunds?",
    answer: "To exchange gift cards, simply select the 'Sell Gift Cards' option in the app, choose your gift card type, upload the card details, and receive instant payment after verification. We offer competitive rates for all major gift cards.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 px-4 md:px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#2D3648] mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          FAQs
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="text-md text-[#2D3648] font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  )
}

