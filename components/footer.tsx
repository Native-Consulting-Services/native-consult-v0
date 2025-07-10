import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import NCS_logo from "@/assets/NCS_logo-01.jpg";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={NCS_logo}
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-auto rounded-lg"
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
                  href="/portfolio"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  Portfolio
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
                  href="mailto:info@nativeconsult.io"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                >
                  info@nativeconsult.io
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5 text-primary-teal" />
                <a
                  href="https://www.linkedin.com/company/native-consulting-services/"
                  className="text-neutral-gray-300 hover:text-primary-teal transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary-teal" />
                <span className="text-neutral-gray-300">
                  New Orleans, Louisiana
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
            {/* TODO: Uncomment when privacy policy and terms of service are ready */}
            {/* <div className="mt-4 md:mt-0 flex space-x-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
