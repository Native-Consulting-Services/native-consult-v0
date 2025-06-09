"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Shield, Users } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Request a Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your organization's digital infrastructure? Let's discuss how we can help you achieve
              your technology goals while respecting your unique needs and sovereignty.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Start Your Project</CardTitle>
                    <CardDescription>
                      Tell us about your organization and how we can help. We'll respond within 24 hours to schedule a
                      consultation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8 space-y-4">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                        <h3 className="text-xl font-semibold">Thank You!</h3>
                        <p className="text-muted-foreground">
                          We've received your message and will respond within 24 hours.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization *</Label>
                          <Input id="organization" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organizationType">Organization Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select organization type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tribal-government">Tribal Government</SelectItem>
                              <SelectItem value="tribal-enterprise">Tribal Enterprise</SelectItem>
                              <SelectItem value="non-profit">Non-Profit Organization</SelectItem>
                              <SelectItem value="private-business">Private Business</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Interest</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="What type of project are you considering?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web-application">Web Application Development</SelectItem>
                              <SelectItem value="form-digitization">Form Digitization</SelectItem>
                              <SelectItem value="admin-dashboard">Admin Dashboard</SelectItem>
                              <SelectItem value="infrastructure">Infrastructure & Security</SelectItem>
                              <SelectItem value="support">Support & Maintenance</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Project Details *</Label>
                          <Textarea
                            id="message"
                            placeholder="Please describe your project needs, current challenges, and goals. Include any specific requirements or timeline considerations."
                            className="min-h-[120px]"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="timeline">Preferred Timeline</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="When would you like to start?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediately</SelectItem>
                              <SelectItem value="1-3-months">1-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="6-12-months">6-12 months</SelectItem>
                              <SelectItem value="planning">Still planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>

                        <p className="text-sm text-muted-foreground">
                          * Required fields. We respect your privacy and will never share your information.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Contact Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Mailing Address</div>
                        <div className="text-sm text-muted-foreground">
                          123 Tribal Way
                          <br />
                          Suite 100
                          <br />
                          Sovereign City, SC 12345
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">(555) 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">info@nativeconsulting.com</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM PST
                          <br />
                          Emergency Support: 24/7
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose Native Consulting Services?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Cultural Understanding</div>
                        <div className="text-sm text-muted-foreground">
                          Native-owned with deep respect for tribal sovereignty
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Data Sovereignty</div>
                        <div className="text-sm text-muted-foreground">Committed to protecting tribal data rights</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Proven Results</div>
                        <div className="text-sm text-muted-foreground">Track record of successful implementations</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Security Notice */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium text-primary">Security & Privacy</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          All communications are encrypted and handled in accordance with SOC 2 compliance standards. We
                          respect tribal data sovereignty and maintain strict confidentiality.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Common questions about our services and process.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long does a typical project take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Project timelines vary based on scope and complexity. Simple form digitization projects typically
                    take 2-4 months, while comprehensive web applications may take 6-12 months. We'll provide a detailed
                    timeline during our initial consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you work with small tribal governments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We work with tribal governments of all sizes, from small communities to large nations. Our solutions
                    are designed to scale with your needs and budget.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What about data sovereignty?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Data sovereignty is a core principle in everything we do. We ensure tribal data remains under tribal
                    control, with hosting and security arrangements that respect your sovereignty and governance
                    requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive support and maintenance packages including 24/7 monitoring, regular
                    updates, security patches, and technical support to ensure your systems run smoothly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
