import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  FileText,
  BarChart3,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Native-Owned • Tribal Government Specialists
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Native Consulting Services
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              Your Native Partner in Software Solutions
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering tribal nations and businesses with scalable digital
              tools, modern web applications, and secure infrastructure that
              respects data sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From web applications to data security, we provide the tools
              tribal governments and businesses need to thrive in the digital
              age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Web Applications</CardTitle>
                <CardDescription>
                  Modern, responsive web applications built with cutting-edge
                  technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile-responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scalable architecture
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Digitized Forms</CardTitle>
                <CardDescription>
                  Transform paper workflows into efficient digital processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Workflow automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Digital signatures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Compliance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Admin Dashboards</CardTitle>
                <CardDescription>
                  Real-time insights and management tools for your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Case management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Data Security</CardTitle>
                <CardDescription>
                  Enterprise-grade security with respect for tribal data
                  sovereignty
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    SOC 2 compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data sovereignty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Secure hosting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader>
                <HeadphonesIcon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Support & Maintenance</CardTitle>
                <CardDescription>
                  Ongoing support to keep your systems running smoothly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Remote troubleshooting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regular updates
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Partnering with Tribal Governments for Long-Term Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              As a Native-owned company, we understand the unique challenges and
              opportunities facing tribal nations. Our solutions are built with
              cultural sensitivity and respect for tribal sovereignty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Cultural Understanding
                </h3>
                <p className="text-muted-foreground">
                  Native-owned and operated with deep respect for tribal values
                  and governance
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Data Sovereignty</h3>
                <p className="text-muted-foreground">
                  Committed to protecting tribal data rights and maintaining
                  sovereignty
                </p>
              </div>
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">
                  Long-term Partnerships
                </h3>
                <p className="text-muted-foreground">
                  Building lasting relationships that grow with your community's
                  needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payload CMS Highlight */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
              <div className="text-center space-y-6">
                <Badge variant="secondary">Modern Technology</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Powered by Payload CMS
                </h2>
                <p className="text-lg text-muted-foreground">
                  We use Payload CMS as a modern, developer-friendly alternative
                  to WordPress. This means faster performance, better security,
                  and an intuitive admin interface that your team will actually
                  enjoy using.
                </p>
                <blockquote className="text-xl font-medium italic border-l-4 border-primary pl-6 my-8">
                  "Payload CMS reduces content management complexity by 60%
                  compared to traditional WordPress installations, while
                  providing enterprise-grade security out of the box."
                </blockquote>
                <Button asChild>
                  <Link href="/services">
                    Learn More About Our Technology Stack
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Schedule a Consultation Today
            </h2>
            <p className="text-lg opacity-90">
              Ready to transform your digital infrastructure? Let's discuss how
              we can help your organization achieve its technology goals while
              respecting your unique needs and sovereignty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-background border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
