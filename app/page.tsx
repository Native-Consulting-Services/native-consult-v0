import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Cloud, CheckCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Native Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Your Native Partner In Software Solutions
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Secure Software Solutions for Tribal Governments
            </h2>
            <p className="text-lg text-neutral-700 max-w-4xl mx-auto leading-relaxed">
              Native Consulting Services specializes in secure, custom software
              solutions for Tribal Governments and organizations requiring high
              compliance standards. We understand the unique challenges and
              regulatory requirements that govern your operations, delivering
              technology solutions that meet the highest security and compliance
              standards while streamlining your processes and improving
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive software solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web App Development",
                description:
                  "Custom web applications built with modern frameworks and security-first architecture.",
              },
              {
                title: "CMS Solutions",
                description:
                  "Content management systems designed for easy administration and secure content delivery.",
              },
              {
                title: "Mobile App Development",
                description:
                  "Native and cross-platform mobile applications for iOS and Android devices.",
              },
              {
                title: "CRM Development",
                description:
                  "Customer relationship management systems to streamline your client interactions.",
              },
              {
                title: "E-Commerce Platforms",
                description:
                  "Secure online commerce solutions with integrated payment processing and inventory management.",
              },
              {
                title: "ERP Solutions",
                description:
                  "Enterprise resource planning systems to manage your operations efficiently.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Compliance & Security Excellence
              </h2>
              <p className="text-lg text-neutral-700 mb-8">
                We understand that Tribal Governments and regulated
                organizations require the highest levels of security and
                compliance. Our solutions are built to meet and exceed these
                stringent requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                  <span className="text-neutral-700">
                    AWS GovCloud deployment capabilities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                  <span className="text-neutral-700">
                    IRS Publication 1075 compliance adherence
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                  <span className="text-neutral-700">
                    FISMA and FedRAMP security standards
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-600" />
                  <span className="text-neutral-700">
                    End-to-end encryption and data protection
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 p-6 rounded-lg text-white text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security First</h3>
                <p className="text-sm text-teal-100">
                  Built with security as the foundation
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 p-6 rounded-lg text-white text-center">
                <Cloud className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Cloud Ready</h3>
                <p className="text-sm text-teal-100">
                  AWS GovCloud certified deployments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-400 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Let's discuss how we can help you achieve your technology goals with
            secure, compliant solutions.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-sky-600 hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
