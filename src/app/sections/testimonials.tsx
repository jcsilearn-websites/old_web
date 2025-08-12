export default function Testimonial() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Listen what People Say about Us!
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            "Hear from our learners who have transformed their careers through
            our expert-led training. Their success stories reflect the impact of
            our programs on real-world growth and opportunities."
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="flex items-center mb-4">
              <img
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M="
                alt="John Doe"
                className="w-12 h-12 rounded-full border-2 border-pink-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  John Doe
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEhGOEOCMkJAlmD-r-TY4ThM6DKGGLh4vrQ&s"
                alt="Jane Smith"
                className="w-12 h-12 rounded-full border-2 border-purple-600 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Jane Smith
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFKQEzYXwq7UJvwfcN7NYJQYXXC8f2rPT42NmjKbJsCoSZk3r27huwFwSeb-WdCBPoptA&usqp=CAU"
                alt="Michael Lee"
                className="w-12 h-12 rounded-full border-2 border-blue-600 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Michael Lee
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4g_gODjnPpsxLhBOy97gswVqX6u5SbNgJw&s"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Sarah Johnson
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Marketing Specialist
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KrqrhwzrzQ81SOUrEL6Z5E1X_y_uQg-T1Q&s"
                alt="David Kim"
                className="w-12 h-12 rounded-full border-2 border-yellow-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  David Kim
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUvFfDHeAkxTlJ_eFkafjXgKuhzMLyCP0vA&s"
                alt="Emily Carter"
                className="w-12 h-12 rounded-full border-2 border-red-500 object-cover"
              />
              <div className="ml-3">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                  Emily Carter
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
