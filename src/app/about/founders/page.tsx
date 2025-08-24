"use client";
import Image from "next/image";
import Link from "next/link";

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-16 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            Leadership
          </div> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Meet Our Founders
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The visionaries behind JCS iLearn's mission to transform education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">
        {/* Founder */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/5756659/pexels-photo-5756659.jpeg?_gl=1*12wqdlr*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDUzODEkajUxJGwwJGgw"
              alt="Founder portrait"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 text-white">
              <p className="font-semibold">Founder & CEO</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              From the Founder's Desk
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The spark for JCS iLearn was ignited during one of my
                entrepreneurship workshops. A curious student asked:
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
                <p className="text-gray-700 font-medium italic">
                  "You speak so passionately about entrepreneurship—why haven't
                  you started your own company?"
                </p>
              </div>
              <p>
                That question hit home. It wasn't just a passing thought—it was
                a powerful reflection. If I truly believed in entrepreneurship,
                why not live it?
              </p>
              <p>That moment became my turning point.</p>
              <p>
                Fueled by a deep passion for teaching and a desire to create
                meaningful impact, I founded JCS iLearn—a platform where
                education is not just shared, but experienced, and where
                learning opens doors to real opportunity.
              </p>
              <p>
                Our tagline, "I Learn, I Earn," isn't just a slogan—it's our
                philosophy.
              </p>
              <p>
                We believe education should lead to empowerment, and knowledge
                should create opportunities for growth and success.
              </p>
              <p>
                This company is my answer to that student's question—and proof
                that with the right support, learning becomes a launchpad for
                life.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-700 font-semibold">
                — Founder, JCS iLearn
              </p>
            </div>
          </div>
        </section>

        {/* Co-Founder */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Message from the Co-Founder
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At JCS iLearn, we believe that skill is the foundation of
                transformation—not just for individuals, but for industries,
                communities, and the future.
              </p>
              <p>
                Our vision is to close the gap between education and
                employability by equipping learners with practical, future-ready
                skills. We're committed to building high-impact, accessible
                learning experiences that go beyond upskilling—they inspire
                growth, confidence, and clarity.
              </p>
              <p>As Co-Founder, I assure you that our mission is personal.</p>
              <p>
                Every program we design is created with care, relevance, and a
                deep understanding of the challenges today's learners face.
              </p>
              <p>Thank you for trusting us.</p>
              <p>
                Together, let's unlock potential—and build a skilled,
                forward-thinking generation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-gray-700 font-semibold">
                — Co-Founder, JCS iLearn
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/2191123/pexels-photo-2191123.jpeg?_gl=1*1otqxyp*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDYyNDIkajI3JGwwJGgw"
              alt="Co-Founder portrait"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 rounded-2xl p-4 text-white">
              <p className="font-semibold">Co-Founder & COO</p>
            </div>
          </div>
        </section>

        {/* Leadership Values */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Leadership Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Purpose-Driven
              </h3>
              <p className="text-gray-600 text-sm">
                Every decision is guided by our mission to empower learners
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Continuously evolving our approach to meet changing needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 text-sm">
                Working together to achieve greater impact
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌟</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600 text-sm">
                Striving for the highest quality in everything we do
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Be part of a team that's passionate about transforming education
              and creating opportunities for learners worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Back to Home
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Back to About Us
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
