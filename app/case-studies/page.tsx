import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, TrendingUp, Clock, Users, Shield, FileText, BarChart3 } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Case Studies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped tribal governments and organizations transform their operations with modern digital
              solutions that respect sovereignty and cultural values.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline">Featured Case Study</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">Tribal Government Digital Transformation</h2>
                <p className="text-lg text-muted-foreground">
                  A comprehensive digital overhaul that streamlined citizen services, improved internal workflows, and
                  enhanced data security while maintaining cultural sensitivity and tribal sovereignty.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">75%</div>
                    <div className="text-sm text-muted-foreground">Faster Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">90%</div>
                    <div className="text-sm text-muted-foreground">User Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Service Availability</div>
                  </div>
                </div>
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tribal Government Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">More Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Each project is unique, but the results consistently show improved efficiency, better user experience,
                and enhanced security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Form Digitization</Badge>
                  </div>
                  <CardTitle>Permit Application System</CardTitle>
                  <CardDescription>
                    Transformed a complex paper-based permit process into a streamlined digital workflow with automated
                    routing and approval tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">60%</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">95%</div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">100+</div>
                        <div className="text-xs text-muted-foreground">Forms/Month</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>6-month implementation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 2 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Dashboard Development</Badge>
                  </div>
                  <CardTitle>Administrative Dashboard</CardTitle>
                  <CardDescription>
                    Real-time analytics and case management system that provides leadership with actionable insights and
                    operational oversight.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">40%</div>
                        <div className="text-xs text-muted-foreground">Better Decisions</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-xs text-muted-foreground">Monitoring</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">5min</div>
                        <div className="text-xs text-muted-foreground">Report Gen</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>Ongoing optimization</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 3 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Security Upgrade</Badge>
                  </div>
                  <CardTitle>Infrastructure Modernization</CardTitle>
                  <CardDescription>
                    Complete security overhaul and infrastructure migration to OVHcloud with enhanced data protection
                    and compliance measures.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">99.9%</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">Zero</div>
                        <div className="text-xs text-muted-foreground">Breaches</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">SOC2</div>
                        <div className="text-xs text-muted-foreground">Compliant</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Continuous monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case Study 4 */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <Badge variant="secondary">Citizen Services</Badge>
                  </div>
                  <CardTitle>Community Portal</CardTitle>
                  <CardDescription>
                    Comprehensive citizen services portal that provides easy access to government services, forms, and
                    community information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">85%</div>
                        <div className="text-xs text-muted-foreground">User Adoption</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">50%</div>
                        <div className="text-xs text-muted-foreground">Less Calls</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">4.8/5</div>
                        <div className="text-xs text-muted-foreground">Rating</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Multi-language support</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground">
                Hear from the leaders who have transformed their organizations with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <blockquote className="text-lg italic">
                    "Native Consulting Services understood our unique needs as a tribal government. Their solution not
                    only improved our efficiency but also respected our data sovereignty requirements."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Tribal Administrator</div>
                      <div className="text-sm text-muted-foreground">Southwest Tribal Nation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <blockquote className="text-lg italic">
                    "The transition from paper forms to their digital system was seamless. Our staff adapted quickly,
                    and citizens love the convenience of online services."
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">IT Director</div>
                      <div className="text-sm text-muted-foreground">Regional Tribal Council</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8">Trusted by Leading Organizations</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Tribal Seal 1"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Tribal Seal 2"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Organization Logo 1"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Organization Logo 2"
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-8">
              * Client logos shown with permission. Some organizations prefer to remain confidential.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Create Your Success Story?</h2>
            <p className="text-lg opacity-90">
              Every organization has unique challenges and opportunities. Let's discuss how we can create a custom
              solution that delivers measurable results for your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
