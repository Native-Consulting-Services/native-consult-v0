import {
  Calendar,
  Film,
  Users,
  ArrowRight,
  Code,
  Database,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import chcMeta from "@/assets/chc-meta.png";
import cssMeta from "@/assets/mbci-css-meta.jpg";
import tanfMeta from "@/assets/mbci-tanf-meta.jpg";
import cifMeta from "@/assets/cif-meta.webp";

export default function PortfolioPage() {
  const projects = [
    {
      id: "choctaw-health-center",
      title: "Choctaw Health Center",
      subtitle: "Website Modernization & CMS Migration",
      client: "Mississippi Band of Choctaw Indians",
      clientLink: "https://www.choctaw.org",
      categories: ["Government Services"],
      year: "2024",
      duration: "4 months",
      image: chcMeta,
      description:
        "Complete digital transformation from legacy PHP system to modern Payload CMS with custom admin dashboard, email newsletter management, and business card generator.",
      technologies: [
        "Payload CMS",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Email Integration",
      ],
      featured: true,
      link: "https://choctawhealthcenter.org",
    },
    {
      id: "mbci-css",
      title: "MBCI Child Support Services",
      subtitle: "Online Application Portal",
      client: "1 Family Services in Indian Country",
      clientLink: "https://1fsic.com",
      categories: ["Social Services", "Government Services"],
      year: "2024",
      duration: "6 months",
      image: cssMeta,
      description:
        "Comprehensive online portal enabling electronic submission of child support forms and real-time status tracking.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Encryption",
        "Multi-factor Authentication",
      ],
      featured: true,
      link: "https://mbci-css.com",
    },
    {
      id: "mbci-tanf",
      title: "MBCI Temporary Assistance for Needy Families",
      subtitle: "Online Application Portal",
      client: "1 Family Services in Indian Country",
      clientLink: "https://1fsic.com",
      categories: ["Social Services", "Government Services"],
      year: "2025",
      duration: "6 months",
      image: tanfMeta,
      description:
        "Integrated online application portal for Temporary Assistance for Needy Families program with secure messaging system.",
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Encryption",
        "Multi-factor Authentication",
      ],
      featured: true,
      link: "https://mbci-tanf.com",
    },
    {
      id: "cif",
      title: "Choctaw Indian Fair",
      subtitle: "Static Website Redesign",
      client: "Mississippi Band of Choctaw Indians",
      clientLink: "https://www.choctaw.org",
      categories: ["Cultural Events", "Government Services"],
      year: "2025",
      duration: "2 months",
      image: cifMeta,
      description:
        "Redesigned static website for the annual Choctaw Indian Fair, enhancing user experience and accessibility.",
      technologies: [
        "Astro",
        "Tailwind CSS",
        "Shadcn UI",
        "TypeScript",
        "GitHub Pages",
      ],
      featured: true,
      link: "https://choctawindianfair.com",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              Showcasing successful projects that have transformed operations
              for Tribal Governments and organizations with secure, compliant
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">3+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">60%</div>
              <div className="text-gray-600">Avg. Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-sky-600 mb-2">24/7</div>
              <div className="text-gray-600">Support & Maintenance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most impactful projects that demonstrate our expertise
              in secure, compliant software development for Tribal Governments.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative group">
                    <div className="bg-gradient-to-br from-sky-600 to-sky-400 p-1 rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 to-sky-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    {project.categories.map((category, idx) => (
                      <span
                        key={idx}
                        className="bg-sky-600/10 text-sky-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {category}
                      </span>
                    ))}
                    <span className="text-gray-500 text-sm">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-sky-600 font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-gray-600">
                        Duration: {project.duration}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-sky-600" />
                      <Link
                        href={project.clientLink}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-sm text-gray-600 font-semibold">
                          {project.client}
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={project.link}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="inline-flex items-center text-sky-600 hover:text-sky-800 font-semibold transition-colors cursor-pointer">
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-gray-600">
              We specialize in diverse sectors, bringing security and compliance
              expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-sky-600/5 to-sky-400/5 rounded-lg border border-sky-600/10">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Government Services
              </h3>
              <p className="text-gray-600 mb-4">
                Secure portals and applications for government departments with
                strict compliance requirements.
              </p>
              <div className="text-sm text-sky-600 font-medium">4 Projects</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sky-600/5 to-sky-400/5 rounded-lg border border-sky-600/10">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Social Services
              </h3>
              <p className="text-gray-600 mb-4">
                Application systems and case management tools for social service
                programs and family assistance.
              </p>
              <div className="text-sm text-sky-600 font-medium">2 Projects</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-sky-600/5 to-sky-400/5 rounded-lg border border-sky-600/10">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                Cultural Events
              </h3>
              <p className="text-gray-600 mb-4">
                Engaging digital experiences and platforms for cultural events
                and festivals.
              </p>
              <div className="text-sm text-sky-600 font-medium">1 Project</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Technologies & Expertise
            </h2>
            <p className="text-lg text-gray-600">
              We leverage modern technologies and frameworks to build secure,
              scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Code className="h-12 w-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="bg-sky-600/10 text-sky-600 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Database className="h-12 w-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                Backend & Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "PostgreSQL", "Payload CMS"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="bg-sky-600/10 text-sky-600 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Globe className="h-12 w-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                Cloud & Security
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS GovCloud",
                  "Encryption",
                  "Multi-factor Auth",
                  "FISMA",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-sky-600/10 text-sky-600 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Measurable Impact
            </h2>
            <p className="text-lg text-gray-600">
              Our projects deliver tangible results that improve efficiency and
              user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-sky-600/10 to-sky-400/10 rounded-lg">
              <div className="text-4xl font-bold text-sky-600 mb-2">60%</div>
              <div className="text-gray-600">
                Average Processing Time Reduction
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sky-600/10 to-sky-400/10 rounded-lg">
              <div className="text-4xl font-bold text-sky-600 mb-2">40%</div>
              <div className="text-gray-600">
                Increase in Application Completion
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sky-600/10 to-sky-400/10 rounded-lg">
              <div className="text-4xl font-bold text-sky-600 mb-2">35%</div>
              <div className="text-gray-600">
                Reduction in Administrative Costs
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-sky-600/10 to-sky-400/10 rounded-lg">
              <div className="text-4xl font-bold text-sky-600 mb-2">100%</div>
              <div className="text-gray-600">Compliance Achievement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-sky-400 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results with a
            custom solution tailored to your specific needs and compliance
            requirements.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center px-8 py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
