import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="h-8 w-8 bg-gradient-to-br from-primary-teal to-primary-sky-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NCS</span>
              </div> */}
              <img
                src="/native-consult-v0/NCS_logo-01.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-lg"
              />
              <span className="text-lg font-bold">
                Native Consulting Services
              </span>
            </div>
            <p className="text-neutral-gray-300 mb-4">
              Your Native Partner In Software Solutions
            </p>
            <p className="text-sm text-neutral-gray-400">
              Specializing in secure, custom software solutions for Tribal
              Governments and organizations requiring high compliance standards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary-teal" />
                <a
                  href="mailto:info@nativeconsultingservices.com"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  info@nativeconsultingservices.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 text-primary-teal" />
                <a
                  href="#"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-teal" />
                <span className="text-neutral-gray-300">
                  Covington, Louisiana
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-gray-400">
              © {new Date().getFullYear()} Native Consulting Services. All
              rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a
                href="#"
                className="text-neutral-gray-400 hover:text-primary-teal transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-gray-400 hover:text-primary-teal transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
