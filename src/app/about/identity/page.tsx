"use client";
import Image from "next/image";
import Link from "next/link";

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            Our Identity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            A Fresh Look, A Clear Purpose
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our new identity reflects our commitment to growth, transformation, and meaningful impact
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">
        
        {/* Logo and Identity */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our New Logo</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our new logo symbolizes skill development as a journey of growth and transformation. It reflects our mission to uplift individuals through structured learning and meaningful career support.
              </p>
              <p>
                The design represents the continuous cycle of learning and earning, where each step builds upon the previous one, creating a path to success and fulfillment.
              </p>
              <p>
                This updated identity represents the next phase of our journey as a startup with a strong sense of purpose. While the look is new, our commitment remains unchanged.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-12 text-center text-white">
              <div className="text-8xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">JCS iLEARN</h3>
              <p className="text-pink-100">I Learn, I Earn</p>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic">
                "Transforming education, one learner at a time"
              </p>
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Brand Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                We stay true to our mission and values in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔗</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Connection</h3>
              <p className="text-gray-600 text-sm">
                Building meaningful relationships with learners and partners
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Energy</h3>
              <p className="text-gray-600 text-sm">
                Bringing passion and enthusiasm to every interaction
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 text-sm">
                Fostering continuous development and improvement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                Delivering excellence in every program and service
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Purpose</h3>
              <p className="text-gray-600 text-sm">
                Driven by a clear mission to transform education
              </p>
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students learning and growing together" 
              width={500} 
              height={400} 
              className="rounded-3xl shadow-2xl" 
            />
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
              <p className="font-semibold">Our Commitment</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unwavering Commitment</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                While our visual identity has evolved, our core commitment remains steadfast:
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <p className="text-gray-700 font-semibold">
                  To deliver life-changing learning experiences that lead to real-world success.
                </p>
              </div>
              <p>
                We're proud of where we're headed—and excited to help you shape your future. Our new identity represents not just a change in appearance, but a renewed commitment to our mission.
              </p>
              <p>
                Every element of our brand—from our logo to our messaging—reflects our dedication to empowering learners and creating meaningful opportunities for growth and success.
              </p>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Visual Identity</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Primary Colors</h3>
              <p className="text-gray-600 text-sm">
                Pink to Purple gradient representing growth and transformation
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secondary Colors</h3>
              <p className="text-gray-600 text-sm">
                Blue to Purple gradient for trust and professionalism
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl mx-auto mb-4 border border-gray-200"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Background</h3>
              <p className="text-gray-600 text-sm">
                Soft gradients creating a welcoming and modern feel
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-4 border border-gray-200 shadow-lg"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cards</h3>
              <p className="text-gray-600 text-sm">
                Clean white backgrounds with subtle transparency effects
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our New Identity?</h2>
            <p className="text-blue-100 leading-relaxed mb-8">
              Discover how our fresh look and clear purpose can help you achieve your learning and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about"
                className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Back to About Us
              </Link>
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 