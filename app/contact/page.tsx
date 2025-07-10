"use client";

import type React from "react";
import { useForm } from "@formspree/react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xjvnzowg");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Ready to transform your operations with secure, compliant software
              solutions? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {state.succeeded ? (
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Thank You!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your message has been sent successfully. We will get back to
                  you shortly.
                </p>
              </div>
            ) : (
              <div className="animate-slide-up">
                <h2 className="text-3xl font-bold text-black mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Tell us about your project and how we can help you achieve
                  your technology goals. We'll respond within 24 hours.
                </p>

                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid w-full gap-3">
                    <Label htmlFor="first-name">First Name *</Label>
                    <Input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="grid w-full gap-3">
                    <Label htmlFor="last-name">Last Name *</Label>
                    <Input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      required
                      placeholder="Your last name"
                    />
                  </div>
                  <div className="grid w-full gap-3">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="grid w-full gap-3">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="grid w-full gap-3">
                    <Label htmlFor="phone-number">Phone (Optional)</Label>
                    <Input
                      type="tel"
                      id="phone-number"
                      name="phone-number"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="grid w-full gap-3">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-sky-600 to-sky-400 hover:from-sky-500 hover:to-sky-300 text-white font-semibold py-3 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            )}

            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-black mb-6">
                Contact Information
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We're here to help you navigate your technology challenges and
                find the right solutions for your organization.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@nativeconsult.io"
                      className="text-primary-teal hover:text-primary-teal-dark transition-colors"
                    >
                      info@nativeconsult.io
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/company/native-consulting-services/"
                      className="text-primary-teal hover:text-primary-teal-dark transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with us on LinkedIn
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Follow us for industry insights and updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      Location
                    </h3>
                    <p className="text-gray-700">New Orleans, Louisiana</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving Tribal Governments nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-6 bg-gradient-to-br from-primary-teal/10 to-primary-sky-blue/10 rounded-lg border border-primary-teal/20">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Why Choose Native Consulting Services?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Native-owned business with cultural understanding
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Expertise in AWS GovCloud and IRS Publication 1075
                      compliance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Proven track record with Tribal Government projects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Security-first development approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-black mb-3">
                What makes your solutions compliant with IRS Publication 1075?
              </h3>
              <p className="text-neutral-gray-600">
                We implement comprehensive security controls including
                encryption, access controls, audit trails, and secure hosting
                environments that meet or exceed IRS Publication 1075
                requirements for protecting federal tax information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-black mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-neutral-gray-600">
                Project timelines vary based on complexity and requirements.
                Simple applications may take 2-3 months, while comprehensive
                systems like our MBCI projects typically require 4-6 months from
                start to deployment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-black mb-3">
                Do you provide ongoing support and maintenance?
              </h3>
              <p className="text-neutral-gray-600">
                Yes, we offer comprehensive support and maintenance packages
                including security updates, performance monitoring, user
                support, and feature enhancements to ensure your system
                continues to meet your evolving needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-black mb-3">
                Can you work with our existing systems?
              </h3>
              <p className="text-neutral-gray-600">
                Absolutely. We specialize in creating solutions that integrate
                seamlessly with existing systems while maintaining security and
                compliance standards. We can work with legacy databases,
                third-party APIs, and existing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
