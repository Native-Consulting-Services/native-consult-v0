import { Users, Target, Award, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Native Consulting Services
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              A Native-owned business dedicated to providing secure, compliant
              software solutions for Tribal Governments and regulated
              organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-neutral-gray-700 mb-6 leading-relaxed">
                Native Consulting Services is a Native-owned technology
                consulting firm specializing in secure software solutions for
                Tribal Governments and organizations with stringent compliance
                requirements. We understand the unique challenges faced by
                Native communities and regulated entities in today's digital
                landscape.
              </p>
              <p className="text-lg text-neutral-gray-700 mb-6 leading-relaxed">
                Our team combines deep technical expertise with cultural
                understanding and regulatory knowledge to deliver solutions that
                not only meet your functional requirements but also respect your
                values and comply with the highest security standards.
              </p>
              <p className="text-lg text-neutral-gray-700 leading-relaxed">
                As a Native-owned business, we are committed to supporting the
                sovereignty and self-determination of Tribal Nations through
                technology that empowers and protects.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 p-6 rounded-lg text-white text-center">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Native-Owned</h3>
                <p className="text-sm text-teal-100">
                  Proudly Native-owned and operated
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 p-6 rounded-lg text-white text-center">
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Security Focused</h3>
                <p className="text-sm text-teal-100">
                  Compliance and security first approach
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 p-6 rounded-lg text-white text-center">
                <Target className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mission Driven</h3>
                <p className="text-sm text-teal-100">
                  Committed to empowering communities
                </p>
              </div>
              <div className="bg-gradient-to-br from-sky-400 to-sky-600 p-6 rounded-lg text-white text-center">
                <Award className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-teal-100">
                  Delivering exceptional results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Digitize & Streamline
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to digitize and streamline processes for clients
                with strict security and compliance needs. We transform manual,
                paper-based workflows into efficient, secure digital solutions
                that improve accessibility, reduce processing times, and enhance
                service delivery to your communities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Empower Through Technology
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe technology should empower, not complicate. Our
                solutions are designed to be intuitive and accessible while
                maintaining the highest levels of security and compliance. We
                work closely with our clients to ensure that every solution we
                deliver truly serves their mission and their people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide every project we undertake and every
              relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-black mb-3">
                Security & Compliance
              </h3>
              <p className="text-neutral-gray-600">
                We never compromise on security. Every solution is built with
                compliance and data protection as fundamental requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-black mb-3">
                Cultural Respect
              </h3>
              <p className="text-neutral-gray-600">
                We honor and respect the sovereignty, traditions, and unique
                needs of the communities we serve.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-sky-600 to-sky-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-black mb-3">
                Excellence
              </h3>
              <p className="text-neutral-gray-600">
                We are committed to delivering exceptional quality in every
                project, exceeding expectations and building lasting
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
