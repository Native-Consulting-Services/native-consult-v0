import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Globe,
  FileText,
  BarChart3,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Cloud,
  Zap,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Comprehensive Digital Solutions
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Services That Scale With Your Needs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom web applications to secure infrastructure, we provide the complete technology stack your
              organization needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Web App Development */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Web App Development with Payload CMS</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  We build modern, responsive web applications using Payload CMS as a powerful alternative to WordPress.
                  This approach provides better performance, enhanced security, and a more intuitive admin experience.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Why Payload CMS Over WordPress?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Modern Architecture</div>
                        <div className="text-sm text-muted-foreground">Built with TypeScript and React</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Better Performance</div>
                        <div className="text-sm text-muted-foreground">Faster load times and responsiveness</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Enhanced Security</div>
                        <div className="text-sm text-muted-foreground">Built-in security best practices</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="font-medium">Intuitive Admin UI</div>
                        <div className="text-sm text-muted-foreground">User-friendly content management</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-6 w-6 mr-2 text-primary" />
                    Technical Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Custom API Development</span>
                      <Badge variant="secondary">Included</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mobile-Responsive Design</span>
                      <Badge variant="secondary">Standard</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>SEO Optimization</span>
                      <Badge variant="secondary">Built-in</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Content Management</span>
                      <Badge variant="secondary">Payload CMS</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Database Integration</span>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digitization of Forms */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="p-6 order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Workflow Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <div className="font-medium">Before: Paper-Based</div>
                      <div className="text-sm text-muted-foreground">Manual processing, lost documents, delays</div>
                    </div>
                    <ArrowRight className="h-6 w-6 text-primary mx-auto" />
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium">After: Digital Workflow</div>
                      <div className="text-sm text-muted-foreground">
                        Automated routing, instant access, audit trails
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-primary">75%</div>
                    <div className="text-sm text-muted-foreground">Average reduction in processing time</div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Digitization of Paper Forms</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Transform your paper-based workflows into efficient digital processes. We help tribal governments and
                  organizations streamline operations while maintaining compliance and improving citizen services.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Automated workflow routing and approvals</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Digital signatures and authentication</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Compliance tracking and audit trails</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Integration with existing systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Mobile-friendly form completion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboards */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Admin Dashboards</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Real-time internal tools for case management, form processing, and organizational oversight. Our
                  dashboards provide the insights you need to make informed decisions and manage operations effectively.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Dashboard Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Real-time Analytics</div>
                        <div className="text-sm text-muted-foreground">Live data visualization</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Case Management</div>
                        <div className="text-sm text-muted-foreground">Track and manage workflows</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Database className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Custom Reporting</div>
                        <div className="text-sm text-muted-foreground">Generate detailed reports</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">Role-based Access</div>
                        <div className="text-sm text-muted-foreground">Secure user permissions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Sample Dashboard Metrics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Active Cases</span>
                    <span className="text-2xl font-bold text-primary">247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Forms Processed Today</span>
                    <span className="text-2xl font-bold text-primary">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Processing Time</span>
                    <span className="text-2xl font-bold text-primary">2.3h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>System Uptime</span>
                    <span className="text-2xl font-bold text-green-500">99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Security */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Infrastructure & Security</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Running on OVHcloud with enterprise-grade security policies. We ensure your data is protected while
                maintaining the performance and reliability your organization demands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Cloud className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>OVHcloud Hosting</CardTitle>
                  <CardDescription>Reliable, scalable cloud infrastructure with global reach</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      99.9% uptime guarantee
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Auto-scaling capabilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Global CDN network
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Security Compliance</CardTitle>
                  <CardDescription>Enterprise-grade security with industry certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      SOC 2 Type II compliant
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      GDPR compliance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Data sovereignty respected
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Database className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Data Protection</CardTitle>
                  <CardDescription>Comprehensive backup and disaster recovery solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Automated daily backups
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Encryption at rest and in transit
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Disaster recovery planning
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HeadphonesIcon className="h-6 w-6 mr-2 text-primary" />
                    Support Tiers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="font-semibold text-primary">Essential Support</div>
                      <div className="text-sm text-muted-foreground">Business hours support, monthly updates</div>
                    </div>
                    <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                      <div className="font-semibold text-primary">Priority Support</div>
                      <div className="text-sm text-muted-foreground">
                        24/7 monitoring, rapid response, proactive maintenance
                      </div>
                      <Badge className="mt-2">Most Popular</Badge>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="font-semibold text-primary">Enterprise Support</div>
                      <div className="text-sm text-muted-foreground">
                        Dedicated support team, custom SLA, on-site visits
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <HeadphonesIcon className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Support & Maintenance</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  Comprehensive support services including remote troubleshooting, regular updates, and scaling
                  assistance. We're here to ensure your systems run smoothly so you can focus on serving your community.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">What's Included</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-primary mr-3" />
                      <span>24/7 system monitoring and alerts</span>
                    </div>
                    <div className="flex items-center">
                      <HeadphonesIcon className="h-5 w-5 text-primary mr-3" />
                      <span>Remote troubleshooting and issue resolution</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-primary mr-3" />
                      <span>Regular security updates and patches</span>
                    </div>
                    <div className="flex items-center">
                      <BarChart3 className="h-5 w-5 text-primary mr-3" />
                      <span>Performance optimization and scaling</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-3" />
                      <span>Backup verification and disaster recovery</span>
                    </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg opacity-90">
              Let's discuss which services are the best fit for your organization's needs and goals. We'll work with you
              to create a custom solution that grows with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
