"use client";
import Image from "next/image";
import { useIsMobile } from "../components/MobileScreen";
export default function Testimonial() {
  const isMobile = useIsMobile();
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-tl from-slate-100 via-blue-50/30 to-purple-100/40">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight pb-1">
            Listen what People Say about Us!
          </h2>
          {isMobile ? (
            <>
              <p
                className="text-sm sm:text-base lg:text-lg xl:text-xl
                text-gray-600 mx-auto leading-relaxed text-center"
                style={{
                  maxWidth: "65ch", // controls width roughly to 3 lines on large screens
                }}
              >
                Hear from our learners who have transformed their careers
                through our expert-led training. Their success stories reflect
                the impact of our programs on real-world growth and
                opportunities.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600  mx-auto leading-relaxed text-center">
                Hear from our learners who have transformed their careers
                through our <br />
                expert-led training. Their success stories reflect the impact of
                our programs on real-world <br />
                growth and opportunities.
              </p>
            </>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?_gl=1*1stboiw*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDc2ODQkajQ4JGwwJGgw"
                alt="Santhosh"
                width={48} // 👈 Required
                height={48} // 👈 Required
                className="w-12 h-12 rounded-full border-2 border-pink-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Santhosh
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "The training was amazing! The team helped me improve my technical
              and communication skills, which boosted my career."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?_gl=1*1t7gfbh*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDc3MjAkajEyJGwwJGgw"
                alt="Haripriya"
                width={48} // 👈 Required
                height={48} // 👈 Required
                className="w-12 h-12 rounded-full border-2 border-purple-600 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Haripriya
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">Data Analyst</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "Thanks to the career guidance sessions, I landed my dream job.
              Highly recommend their training!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?_gl=1*1y0yhiu*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDgxNTYkajQ5JGwwJGgw"
                alt="Karthick"
                width={48} // 👈 Required
                height={48} // 👈 Required
                className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Karthick
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  UI/UX Designer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "The aptitude training and technical sessions were exactly what I
              needed to advance in my career."
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nimalan"
                width={48} // 👈 Required
                height={48} // 👈 Required
                className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Nimalan
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Mechanical Engineer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "The soft skills training gave me confidence in public speaking
              and improved my workplace communication."
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?_gl=1*bzfg42*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDgxODgkajE3JGwwJGgw"
                alt="Divya"
                width={48} // 👈 Required
                height={48} // 👈 Required
                className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Divya
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "Their technical courses were in-depth and practical. I was able
              to apply my learning directly to my job."
            </p>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <Image
                src="https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nivetha"
                width={48} // 👈 Required
                height={48} // 👈 Required
                className="w-12 h-12 rounded-full border-2 border-red-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Nivetha
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Project Manager
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 italic">
              "The career guidance team was supportive throughout my job hunt.
              I’m grateful for their mentorship."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
