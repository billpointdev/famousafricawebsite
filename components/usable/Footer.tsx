"use client"

import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  services: {
    title: "Services",
    links: [
      { name: "Bank Seamless Transactions", href: "#" },
      { name: "InApp Seamless Transactions", href: "#" },
    ]
  },
  support: {
    title: "Links",
    links: [
      { name: "Home Page", href: "#" },
            { name: "Privacy Page", href: "/privacy" },
      { name: "Support Page", href: "/support" }
    ]
  }
}

export function Footer() {
  return (
    <footer className="bg-white py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/famousicon.png"
              alt="Famous Logo"
              width={120}
              height={40}
              className="mb-6"
            />
            <p className="text-gray-600 text-sm mb-6">
              Famous Africa is designed to help users enhance their social media presence and visibility.
              The app provides tools and features that support community growth, content promotion, and audience engagement across platforms like Instagram, Facebook, TikTok, and more.
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Click below to get the app today on Android and iOS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="inline-block">
                <Image
                  src="/apple.png"
                  alt="Download on the App Store"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/play.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-gray-900 font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <a href="mailto:famousafrica2@gmail.com">famousafrica2@gmail.com</a>
              <span>+234 802 785 9684</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Link href="/privacy">Terms Of Use</Link>
              <span>|</span>
              <Link href="/privacy">Privacy & Cookie Policy</Link>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            famousafrica©2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

