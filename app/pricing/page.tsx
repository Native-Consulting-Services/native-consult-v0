import Link from "next/link";
import {
  Check,
  ArrowRight,
  Shield,
  Zap,
  Crown,
  Users,
  Clock,
  Headphones,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PackagesPage() {
  const packages = [
    {
      name: "Bronze",
      subtitle: "Secure Application Portal",
      icon: Shield,
      description:
        "A streamlined, compliant intake portal ideal for departments needing to digitize secure form workflows.",
      features: [
        "Single secure application form with checklist",
        "Applicant dashboard with status tracking",
        "Multi-factor authentication (MFA) for secure access",
        "Staff dashboard to manage submissions",
        "Internal messaging between staff and applicants",
        "Mobile-responsive interface for all devices",
        "Standard encryption and audit logging",
        "Automated backup, retention, and recovery setup",
        "Compliance documentation (IRS Pub 1075)",
        "Up to 3 user roles (Applicant, Staff, Admin)",
        "Deployed on AWS GovCloud",
        "Priority email & phone support",
      ],
      idealFor: [
        "Applications with limited scope",
        "Applications with under 50 users",
      ],
      timeline: "2-3 months",
      color: "from-amber-600 to-amber-700",
      bgColor: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
    {
      name: "Silver",
      subtitle: "CMS Website + Portal",
      icon: Zap,
      description:
        "Adds a public-facing website to the secure portal, enabling outreach, internal tools, and content updates.",
      features: [
        "All Bronze features included",
        "WordPress-like website (Payload CMS)",
        "News, events, directory & blog modules",
        "Secure staff portal for website management",
        "Customizable content blocks and templates",
        "Advanced search and filtering",
        "Advanced user roles and permissions",
        "Automated emails and status updates",
        "Basic analytics and custom reports",
        "Compliance documentation (IRS Pub 1075)",
        "Up to 10 user roles (Admin, Editor, Intake, etc.)",
        "Deployed on AWS GovCloud",
        "Priority email & phone support",
      ],
      idealFor: [
        "Applications with department outreach",
        "Applications with 50–200 users",
      ],
      timeline: "4-6 months",
      color: "from-sky-400 to-sky-600",
      bgColor: "from-teal-50 to-sky-50",
      borderColor: "border-primary-teal",
      popular: true,
    },
    {
      name: "Gold",
      subtitle: "CMS + App + Portal",
      icon: Crown,
      description:
        "Full digital access via CMS, secure portals, and native mobile apps — optimized for scalability and field access.",
      features: [
        "All Silver features included",
        "Mobile app for iOS and Android (React Native)",
        "Mobile document scanning and submission",
        "Push notifications & branded app deployment",

        "Real-time admin dashboard and reporting",
        "Integrated newsletter & communication system",
        "Secure API access for external integrations",
        "Advanced audit logging & compliance support",
        "Unlimited user roles and custom permissions",
        "Deployed on AWS GovCloud",
        "Priority email & phone support",
      ],
      idealFor: [
        "Applications with mobile access needs",
        "Large-scale applications (200+ users)",
      ],
      timeline: "6-12 months",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-300",
    },
  ];

  const addOns = [
    {
      name: "CRM Integration",
      description: "Custom CRM system for managing relationships",
      availability: "Gold package only",
    },
    {
      name: "ERP System",
      description: "Comprehensive ERP solution for resource planning",
      availability: "Gold package only",
    },
    {
      name: "E-Commerce Module",
      description: "Online store integration for product sales",
      availability: "Gold package only",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Pricing</h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Choose the perfect solution package for your organization's needs.
              From essential digitization to enterprise-grade systems, we have
              you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Tailored Solutions for Every Organization
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our packages are designed to meet the unique needs of Tribal
              Governments and organizations requiring secure, compliant software
              solutions. Each package includes our signature security-first
              approach and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`relative bg-gradient-to-br ${
                  pkg.bgColor
                } border-2 ${pkg.borderColor} rounded-2xl p-8 ${
                  pkg.popular ? "transform scale-105 shadow-2xl" : "shadow-lg"
                } transition-all duration-300 hover:shadow-xl`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-sky-400 to-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full mb-4`}
                  >
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-3">
                    {pkg.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-black mb-3">
                    Ideal For:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-white/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-teal-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">
                        Timeline:
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-black">
                      {pkg.timeline}
                    </span>
                  </div>
                </div>

                <Link href="/contact">
                  <Button
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105`}
                  >
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Optional Add-Ons
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your package with additional features and services
              tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-black mb-3">
                  {addon.name}
                </h3>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="flex items-center">
                  <span className="text-sm text-teal-500 font-medium bg-teal-500/10 px-2 py-1 rounded">
                    {addon.availability}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every package is built with our core principles of security,
              compliance, and cultural understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Security First
              </h3>
              <p className="text-gray-600 text-sm">
                Every package includes enterprise-grade security measures and
                compliance standards.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Native-Owned
              </h3>
              <p className="text-gray-600 text-sm">
                Cultural understanding and respect for Tribal sovereignty in
                every solution.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Ongoing Support
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive support and maintenance included with every
                package.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm">
                Track record of successful implementations with measurable
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Custom Pricing for Your Needs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every organization has unique requirements. We provide custom
                pricing based on your specific needs, timeline, and compliance
                requirements. Contact us for a detailed proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-sky-400/10 to-sky-600/10 p-6 rounded-lg border border-teal-500/20">
                <h3 className="text-xl font-semibold text-black mb-4">
                  What Affects Pricing?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Project complexity and scope
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Number of users and departments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Compliance and security requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Integration with existing systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Timeline and delivery requirements
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-400/10 to-sky-600/10 p-6 rounded-lg border border-teal-500/20">
                <h3 className="text-xl font-semibold text-black mb-4">
                  What You'll Receive
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Detailed project proposal and timeline
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Transparent pricing breakdown
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Compliance and security assessment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Risk analysis and mitigation plan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Post-launch support options
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-700 text-white font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Custom Quote Today
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-4">
                Free consultation • No obligation • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
