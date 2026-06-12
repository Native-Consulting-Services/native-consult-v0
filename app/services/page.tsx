import {
  Code,
  Smartphone,
  Users,
  ShoppingCart,
  Database,
  Rabbit,
  FileSearch,
  ScanEye,
  ShieldAlert,
  Workflow,
  Phone,
  AudioLines,
  BarChart3,
  Cloud,
  Lock,
  Globe,
  RefreshCw,
  KeyRound,
  ShieldCheck,
  UserCog,
  ClipboardCheck,
  ArrowLeftRight,
  Layers,
  Bell,
  Shield,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const categories = [
    {
      title: "Application Development",
      description:
        "Custom-built software for the systems your organization runs on every day — from a single department portal to a full suite of integrated tools.",
      items: [
        {
          icon: Code,
          title: "Web App Development",
          description:
            "Custom web applications built with modern frameworks (Next.js, React, TypeScript), security-first architecture, and audit-ready compliance from day one.",
        },
        {
          icon: Smartphone,
          title: "Mobile App Development",
          description:
            "Native and cross-platform apps for iOS and Android (React Native) with offline support, push notifications, and secure document upload from a shared codebase.",
        },
        {
          icon: Users,
          title: "CRM Development",
          description:
            "Tailored client and case-management systems with automated workflows, communication tracking, and reporting built around how your team actually works.",
        },
        {
          icon: ShoppingCart,
          title: "E-Commerce Platforms",
          description:
            "Secure online stores and payment portals with Stripe integration, PCI-compliant checkout, fraud protection, and payment reconciliation reporting.",
        },
        {
          icon: Database,
          title: "ERP Solutions",
          description:
            "Integrated systems connecting finance, HR, and operations with real-time visibility, process automation, and role-based access control.",
        },
      ],
    },
    {
      title: "AI & Intelligent Automation",
      description:
        "Practical AI built into your workflows — not a chatbot bolted on the side, but automation that handles the repetitive work your staff shouldn't have to.",
      items: [
        {
          icon: FileSearch,
          title: "AI Document & Compliance Scanning",
          description:
            "AI-powered parsing of applications, forms, and compliance documents — automatically extracting data and checking it against the rules that matter to your program.",
        },
        {
          icon: ScanEye,
          title: "AI Vision & Image Analysis",
          description:
            "Automatic photo tagging, severity assessment, and description generation for inspections, maintenance reports, and media libraries.",
        },
        {
          icon: ShieldAlert,
          title: "Content Moderation",
          description:
            "AI-reviewed public submissions with stored reasoning, flagging anything that needs a human look before it goes live.",
        },
        {
          icon: Workflow,
          title: "AI Agent Orchestration",
          description:
            "Custom automation pipelines that connect intake, document processing, and notifications into a single hands-off workflow, built and tuned for your processes.",
        },
      ],
    },
    {
      title: "Conversational Voice AI",
      description:
        "AI phone agents that hold real conversations — handling intake, answering questions, and routing requests without a traditional phone tree.",
      items: [
        {
          icon: Phone,
          title: "Conversational Phone Agents",
          description:
            "AI-powered voice agents that hold real conversations to handle intake calls, answer questions, and route requests to the right place.",
        },
        {
          icon: AudioLines,
          title: "Real-Time Speech Processing",
          description:
            "Live speech-to-text and text-to-speech for natural, low-latency phone interactions.",
        },
        {
          icon: BarChart3,
          title: "Call Analytics",
          description:
            "Call metadata and outcome logging feeding directly into your dashboards.",
        },
      ],
    },
    {
      title: "Cloud Infrastructure & Data Sovereignty",
      description:
        "Sovereign cloud infrastructure built around data ownership — your data stays where you control it, encrypted with keys you hold.",
      items: [
        {
          icon: Cloud,
          title: "Sovereign Cloud Architecture",
          description:
            "AWS-based infrastructure designed around data ownership, with your data kept in your region under encryption keys you control. AWS GovCloud is available as a deployment option when required.",
        },
        {
          icon: Lock,
          title: "Encrypted Staging & Media Anonymization",
          description:
            "Incoming documents and photos land in KMS-encrypted storage first, with GPS and device metadata scrubbed before anything is filed permanently.",
        },
        {
          icon: Globe,
          title: "CDN & DDoS Protection",
          description:
            "Content delivery and DDoS protection in front of every public-facing application.",
        },
        {
          icon: RefreshCw,
          title: "High Availability & Backup",
          description:
            "Multi-AZ databases and cross-region replication so your data survives an outage.",
        },
      ],
    },
    {
      title: "Identity, Access & Compliance",
      description:
        "Access controls and audit trails designed to satisfy your security team and your compliance requirements at the same time.",
      items: [
        {
          icon: KeyRound,
          title: "Single Sign-On",
          description:
            "Integrate with your existing Azure AD or other SAML/OIDC identity provider for staff access — no separate logins to manage.",
        },
        {
          icon: ShieldCheck,
          title: "Multi-Factor Authentication",
          description:
            "MFA enforced across every endpoint, staff and public-facing alike.",
        },
        {
          icon: UserCog,
          title: "Role-Based Access Control",
          description:
            "Fine-grained, multi-audience permissions — admins, staff, and external users each see exactly what they should.",
        },
        {
          icon: ClipboardCheck,
          title: "Audit Logging & Compliance Reporting",
          description:
            "Every action logged with full attribution, aligned to standards like IRS Publication 1075 and FISMA.",
        },
      ],
    },
    {
      title: "Data Migration & Integration",
      description:
        "Getting your data out of legacy systems and into something modern, queryable, and actually useful.",
      items: [
        {
          icon: ArrowLeftRight,
          title: "Legacy System Migration",
          description:
            "Extracting, deduplicating, and migrating data out of legacy systems, even ones with limited export options, into a modern database.",
        },
        {
          icon: Layers,
          title: "Database & Schema Design",
          description:
            "Relational data models designed to match how your programs actually operate, not a generic template.",
        },
        {
          icon: Bell,
          title: "Notifications",
          description:
            "Automated email and SMS notifications for status updates, alerts, and reminders.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboards",
          description:
            "Custom reporting and KPI dashboards built into your admin tools, no separate BI subscription required.",
        },
      ],
    },
  ];

  const chukfiCapabilities = [
    "Config-as-code schemas with 16+ field types, including references and nested components",
    "Full content lifecycle: draft, publish, version, rollback, schedule, archive",
    "Media library with AI-generated alt text and metadata",
    "Append-only audit log with full user attribution",
    "HMAC-signed webhooks for real-time integrations",
    "Multi-audience role-based access control (admin, staff, public)",
    "REST API with 38+ endpoints for headless content delivery",
    "Deployable on AWS (ECS Fargate, RDS, S3) or other infrastructure",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              From a single secure portal to AI-driven automation across your
              whole organization — built with security, compliance, and your
              success in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Built for Range
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Whether you need a focused tool delivered in weeks or a
              multi-system platform built over months, every project is built
              on the same foundation of security-first development and
              sovereign cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                Security First
              </h3>
              <p className="text-gray-600">
                Every line of code is written with security as the primary
                consideration, implementing industry best practices and
                compliance standards.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Cloud className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                Sovereign Cloud Infrastructure
              </h3>
              <p className="text-gray-600">
                AWS-based infrastructure with encryption keys you control,
                Multi-AZ databases, and cross-region backups built in from
                the start.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Sparkles className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                AI-Powered Automation
              </h3>
              <p className="text-gray-600">
                Document processing, vision analysis, and conversational
                agents that take repetitive work off your team's plate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chukfi CMS Featured Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-sky-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                    <Rabbit className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-wide text-sky-600 mb-1">
                      NCS Open-Source Platform
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      Chukfi CMS
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Chukfi CMS is NCS&apos;s own headless content management
                  platform, built in Rust with PostgreSQL.{" "}
                  <em>Chukfi</em> means &ldquo;rabbit&rdquo; in Choctaw.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Because we own and maintain Chukfi ourselves, there&apos;s
                  no third-party vendor that can raise prices, deprecate
                  features, or leave your project stranded. We extend it
                  directly to fit your needs, and every project-specific
                  configuration and data model is yours.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-black mb-4">
                  Platform Capabilities
                </h4>
                <ul className="space-y-3">
                  {chukfiCapabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">
                        {capability}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.title}>
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-3xl">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-black mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-400 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Let's discuss your specific requirements and how our secure
            development practices can benefit your organization.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
