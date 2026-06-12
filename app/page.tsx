import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Cloud,
  CheckCircle,
  ArrowRight,
  Rabbit,
  Sparkles,
  Phone,
  KeyRound,
  ArrowLeftRight,
  ShieldCheck,
  FileCheck,
  Landmark,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Native Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              Your Native Partner In Software Solutions
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: FileCheck,
                label: "IRS Pub 1075 Aligned",
              },
              {
                icon: ShieldCheck,
                label: "FISMA Security Standards",
              },
              {
                icon: Cloud,
                label: "Sovereign AWS Infrastructure",
              },
              {
                icon: Landmark,
                label: "Native-Owned Business",
              },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2 sm:flex-row sm:text-left sm:gap-3"
              >
                <badge.icon className="h-6 w-6 text-sky-700 shrink-0" />
                <span className="text-sm font-medium text-slate-700">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-8">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-neutral-600">
              From custom applications to AI-driven automation, built on
              sovereign cloud infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rabbit,
                title: "Application Development & Chukfi CMS",
                description:
                  "Custom web, mobile, CRM, e-commerce, and ERP solutions, powered by Chukfi CMS — our own open-source content platform.",
              },
              {
                icon: Sparkles,
                title: "AI & Intelligent Automation",
                description:
                  "AI-powered document scanning, compliance checks, vision analysis, and agent-driven workflow automation.",
              },
              {
                icon: Phone,
                title: "Conversational Voice AI",
                description:
                  "AI phone agents that hold real conversations to handle intake, answer questions, and route requests.",
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure & Data Sovereignty",
                description:
                  "AWS-based infrastructure with encryption keys you control, Multi-AZ databases, and cross-region backups.",
              },
              {
                icon: KeyRound,
                title: "Identity, Access & Compliance",
                description:
                  "SSO, MFA, role-based access control, and audit logging aligned to standards like IRS Pub 1075 and FISMA.",
              },
              {
                icon: ArrowLeftRight,
                title: "Data Migration & Integration",
                description:
                  "Migrating legacy systems into modern, queryable databases with custom analytics dashboards.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-sky-500 to-sky-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
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
                  <CheckCircle className="h-6 w-6 text-sky-700" />
                  <span className="text-neutral-700">
                    Sovereign cloud infrastructure with encryption keys you
                    control
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-700" />
                  <span className="text-neutral-700">
                    IRS Publication 1075 compliance adherence
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-700" />
                  <span className="text-neutral-700">
                    FISMA security standards, with AWS GovCloud available when
                    required
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-sky-700" />
                  <span className="text-neutral-700">
                    End-to-end encryption and data protection
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-sky-700 p-6 rounded-lg text-white text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security First</h3>
                <p className="text-sm text-slate-300">
                  Built with security as the foundation
                </p>
              </div>
              <div className="bg-slate-900 p-6 rounded-lg text-white text-center">
                <Cloud className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  Sovereign Cloud
                </h3>
                <p className="text-sm text-slate-300">
                  AWS-based deployments built around data ownership
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Let's discuss how we can help you achieve your technology goals with
            secure, compliant solutions.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
