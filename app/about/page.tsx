import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Shield, Users, Target, ArrowRight, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              About Native Consulting Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Empowering Communities Through Technology</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded with a mission to bridge the digital divide for tribal nations, we combine cultural understanding
              with cutting-edge technology to create solutions that truly serve our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Native Consulting Services was founded on the principle that tribal nations deserve technology solutions
                that respect their sovereignty, understand their unique challenges, and scale with their growing needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">A Native-Owned Approach</h3>
                <p className="text-muted-foreground">
                  As a Native-owned company, we bring more than technical expertise to every project. We understand the
                  importance of cultural sensitivity, the complexities of tribal governance, and the critical need for
                  data sovereignty in all our solutions.
                </p>
                <p className="text-muted-foreground">
                  Our team has worked directly with tribal governments to understand their unique workflows, compliance
                  requirements, and long-term technology goals. This experience informs every decision we make, from
                  architecture choices to user interface design.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Founded and operated by Native professionals</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Deep understanding of tribal governance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Committed to data sovereignty principles</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <blockquote className="text-lg italic">
                  "Technology should empower communities, not complicate their operations. Our goal is to create digital
                  tools that feel natural and intuitive while providing the robust functionality that modern
                  organizations require."
                </blockquote>
                <cite className="block mt-4 font-semibold">— Native Consulting Services Leadership Team</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Leadership */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every project we undertake and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Cultural Respect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Every solution is designed with deep respect for tribal culture, traditions, and governance
                    structures.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Data Sovereignty</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Protecting tribal data rights and ensuring communities maintain control over their information.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Long-term Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Building lasting relationships that evolve with your community's changing needs and growth.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Delivering high-quality solutions that exceed expectations and provide measurable value.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Leadership & Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Our leadership team combines decades of technology experience with deep understanding of tribal
                governance and community needs.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Native-Led Innovation</h3>
                <p className="text-lg text-muted-foreground">
                  Our team includes tribal members who have worked in both technology and government sectors, providing
                  unique insights into the challenges and opportunities facing Native communities today.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Work Together?</h2>
            <p className="text-lg opacity-90">
              Let's discuss how our cultural understanding and technical expertise can help your organization achieve
              its digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start a Conversation
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
