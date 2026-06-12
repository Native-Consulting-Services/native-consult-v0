import Link from "next/link";
import { Check, ArrowRight, Shield, Users, Award, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              How We Price Projects
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Every engagement is scoped and priced around your project — from
              a focused tool delivered in weeks to a multi-system platform
              built over months.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Model */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fixed-Fee, Milestone-Based Engagements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We scope your project, break it into clear milestones, and quote
              a fixed fee for each — no open-ended time-and-materials
              billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-sky-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Fixed-Fee Milestones
              </h3>
              <p className="text-gray-600">
                Core development is quoted and delivered as fixed-fee
                milestones, so you know the cost before work begins.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Lock className="h-12 w-12 text-sky-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Infrastructure Included
              </h3>
              <p className="text-gray-600">
                Where NCS manages your cloud infrastructure, hosting and SaaS
                costs are consolidated into a single, predictable bill.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-12 w-12 text-sky-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                You Own What We Build
              </h3>
              <p className="text-gray-600">
                All project-specific source code, configurations, data
                models, and content are your property upon creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Pricing */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Custom Pricing for Your Needs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every organization has unique requirements. We provide custom
                pricing based on your specific needs, timeline, and compliance
                requirements. Contact us for a detailed proposal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-sky-50 to-slate-100 p-6 rounded-lg border border-sky-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  What Affects Pricing?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Project complexity and scope
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Number of users and departments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Compliance and security requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Integration with existing systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Timeline and delivery requirements
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-sky-50 to-slate-100 p-6 rounded-lg border border-sky-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  What You'll Receive
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Detailed project proposal and timeline
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Transparent pricing breakdown
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Compliance and security assessment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Risk analysis and mitigation plan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-sky-700 mt-0.5 mr-3 flex-shrink-0" />
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
                  className="bg-sky-700 hover:bg-sky-800 text-white font-semibold px-8 py-4 transition-all duration-300 transform hover:scale-105"
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

      {/* Why Choose NCS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Organizations Choose NCS
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every engagement is built on our core principles of security,
              compliance, and cultural understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-sky-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Security First
              </h3>
              <p className="text-gray-600 text-sm">
                Every engagement includes enterprise-grade security measures
                and compliance standards from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-sky-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Native-Owned
              </h3>
              <p className="text-gray-600 text-sm">
                Cultural understanding and respect for Tribal sovereignty in
                every solution.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-500 to-sky-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Proven Results
              </h3>
              <p className="text-gray-600 text-sm">
                A track record of successful implementations with measurable
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
