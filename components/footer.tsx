import Link from "next/link";
import { Linkedin, Lock, Mail, Phone, Server, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  NCS
                </span>
              </div>
              <span className="font-bold">Native Consulting Services</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your Native Partner in Software Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Security & Infrastructure */}
          <div className="space-y-4">
            <h4 className="font-semibold">Security & Infrastructure</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Server className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Hosted on OVHcloud
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  SOC 2 Compliant
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Data Sovereignty Respected
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                123 Tribal Way
                <br />
                Suite 100
                <br />
                Sovereign City, SC 12345
              </p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@nativeconsulting.com</p>
            </div>
          </div> */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="flex space-x-3">
              <Link
                href="mailto:info@nativeconsulting.com"
                className="hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/native-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Native Consulting Services. All rights
            reserved. Committed to tribal data sovereignty and privacy
            protection.
          </p>
        </div>
      </div>
    </footer>
  );
}
