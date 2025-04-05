'use client'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function Header() {
    const router = useRouter()


  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/famousicon.png"
          alt="Famous Logo"
          width={100}
          height={40}
          className="h-8 sm:h-10 w-auto"
        />
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <Button className="bg-[#008080] hover:bg-[#008080]/90 text-white rounded-full px-4 sm:px-6 text-sm sm:text-base">
          GET APP
        </Button>

        <Button onClick={() => router.push("/support")} variant="ghost" className="text-gray-600 text-sm sm:text-base">
          SUPPORT
        </Button>

        {/*<Button onClick={() => router.push('/support')} variant="ghost" size="icon" className="ml-2">*/}
        {/*  <HeadphonesIcon className="h-5 w-5 sm:h-6 sm:w-6" />*/}
        {/*</Button>*/}
      </div>
    </motion.header>
  )
}

