"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Footer } from "@/components/usable/Footer"
import { Header } from "@/components/usable/Header"
import {axios} from "@/lib/axios"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export default function SupportPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const {toast} = useToast()

  const onSubmit = async (data: FormData) => {
    try{
    setIsSubmitting(true)
    // Simulate API call
    const body = {
      email: data.email,
      phone:data.phone,
      address:data.address,
      message:data.message
    }
    await axios.post("message/support", body)

    setIsSubmitting(false)
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    reset()
    }
    catch(err){
      console.log(err)
      toast({
      title: "Oops! Something went wrong",
      description: err.response.data.message
    })
    }
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen mt-20 bg-gradient-to-br from-purple-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Get in Touch</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl p-6 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span>famousafrica2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span>+234 802 785 9684</span>
              </div>
         {/*     <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-indigo-600" />

              </div>*/}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-xl p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register("address", { required: "Address is required" })}
                  placeholder="Your Address"
                  className="w-full"
                />
                {errors.address && <p className="text-red-500 text-sm
                mt-1">{errors.address.message}</p>}
              </div>
              <div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="Email Address"
                  className="w-full"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Input
                  {...register("phone", { required: "Phone number is required" })}
                  placeholder="Phone Number"
                  className="w-full"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <Textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your Message"
                  className="w-full"
                  rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </motion.div>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

