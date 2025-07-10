import {
  Code,
  Database,
  Smartphone,
  Users,
  ShoppingCart,
  Shield,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web App Development",
      description:
        "We specialize in developing custom web applications using modern frameworks and technologies. Our development process emphasizes security-first architecture, ensuring that every application meets stringent compliance requirements while delivering exceptional user experiences. We implement robust authentication systems, encrypted data transmission, and comprehensive audit trails to protect sensitive information and maintain regulatory compliance.",
      keyBenefits: [
        "Enhanced security and compliance",
        "Improved operational efficiency",
        "Scalable and maintainable architecture",
        "24/7 support and maintenance",
      ],
    },
    {
      icon: Database,
      title: "CMS Solutions",
      description:
        "Our content management systems are designed for organizations that require secure, scalable, and user-friendly content administration. We build CMS platforms that enable easy content updates while maintaining strict access controls and version management. Our solutions include automated backup systems, role-based permissions, and compliance reporting features that ensure your content remains secure and accessible to authorized users only.",
      keyBenefits: [
        "User-friendly content management",
        "Role-based access control",
        "Automated backups and versioning",
        "Compliance with content security standards",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "We develop native and cross-platform mobile applications for iOS and Android devices, with a focus on security and performance. Our mobile solutions incorporate device-level encryption, secure authentication protocols, and offline capability for critical functions. We ensure that all mobile applications comply with platform security guidelines and organizational policies, providing seamless user experiences without compromising data protection.",
      keyBenefits: [
        "Native and cross-platform solutions",
        "Device-level encryption",
        "Secure authentication protocols",
        "Offline capabilities for critical functions",
      ],
    },
    {
      icon: Users,
      title: "CRM Development",
      description:
        "Our customer relationship management systems are tailored to help organizations manage client interactions efficiently while maintaining data privacy and security. We implement comprehensive contact management, communication tracking, and reporting capabilities that streamline operations and improve service delivery. Our CRM solutions include automated workflows, integration capabilities, and detailed analytics to support informed decision-making and enhanced client relationships.",
      keyBenefits: [
        "Streamlined client interactions",
        "Automated workflows and integration",
        "Detailed analytics and reporting",
        "Enhanced client relationship management",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Platforms",
      description:
        "We build secure online commerce solutions with integrated payment processing, inventory management, and order fulfillment systems. Our e-commerce platforms are designed to handle sensitive financial transactions with PCI DSS compliance and advanced fraud protection. We implement comprehensive product catalogs, customer account management, and detailed reporting systems that enable organizations to operate successful online businesses while maintaining the highest security standards.",
      keyBenefits: [
        "Secure payment processing",
        "PCI DSS compliance",
        "Advanced fraud protection",
        "Comprehensive product and order management",
      ],
    },
    {
      icon: Code,
      title: "ERP Solutions",
      description:
        "Our enterprise resource planning systems are designed to integrate all facets of an organization’s operations, from finance and HR to supply chain management. We build ERP solutions that provide real-time data visibility, process automation, and compliance with industry regulations. Our systems include robust security features such as role-based access control, data encryption, and audit logging to ensure that sensitive organizational data is protected at all times.",
      keyBenefits: [
        "Integrated operations management",
        "Real-time data visibility",
        "Process automation",
        "Compliance with industry regulations",
      ],
    },
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
              Comprehensive software solutions designed with security,
              compliance, and your success in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Secure Development Practices
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Every service we provide is built on a foundation of
              security-first development practices, ensuring compliance with the
              most stringent regulatory requirements while delivering
              exceptional functionality and user experience.
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
              <Database className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                Data Protection
              </h3>
              <p className="text-gray-600">
                Advanced encryption, secure data storage, and comprehensive
                backup systems protect your sensitive information at all times.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-3">
                User-Centric Design
              </h3>
              <p className="text-gray-600">
                Intuitive interfaces and streamlined workflows ensure that
                security doesn't come at the expense of usability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-black mb-4">
                      Key Benefits
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          {service.keyBenefits[0]}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          {service.keyBenefits[1]}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          {service.keyBenefits[2]}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-sky-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">
                          {service.keyBenefits[3]}
                        </span>
                      </li>
                    </ul>
                  </div>
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
