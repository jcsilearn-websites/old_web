"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CommunicationImage from "../../../public/CommunicationImage.jpg";
import AptitudeImage from "../../../public/aptitudeImage.jpg";
import placementImage from "../../../public/placementImage.jpg";
import technialSkillsImage from "../../../public/technialSkillsImage.jpg";

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState("All Programs");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedFilter = localStorage.getItem("defaultFilter");

    if (storedFilter) {
      setActiveFilter(storedFilter);
      // simulate loading only once
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, []);

  const filters = [
    "All Programs",
    "Soft Skills",
    "Technical Skills", 
    "Aptitude & Reasoning",
    "Placement & Recruitment",
    "Career Planning",
    "Corporate Readiness",
    "School Enrichment",
  ];

  const programs = [
    {
      id: 1,
      title: "Skillora",
      category: "Soft Skills",
      description:
        "Boost communication, teamwork, leadership, and emotional intelligence through immersive, real-world soft skills training. Build interpersonal confidence and workplace-ready behavior.",
      icon: "/deal.png",
      topicsCovered: [
        "Communication & Presentation Skills",
        "Emotional Intelligence",
        "Group Discussion & JAM Techniques",
        "Teamwork & Collaboration",
        "Time Management & Etiquette",
        "Public Speaking & Confidence Building",
      ],
    },
    {
      id: 2,
      title: "AptEdge",
      category: "Aptitude & Reasoning",
      description:
        "Structured training in arithmetic, data interpretation and analytical thinking to excel in aptitude tests.",
      icon: "/calculator.png",
      topicsCovered: [
        "Number system",
        "Time and work",
        "Percentages, SI & CI",
        "Time, Speed & Distance",
        "Ratio & Proportion",
        "Speed Math",
      ],
    },
    {
      id: 3,
      title: "CrackIt",
      category: "Aptitude & Reasoning",
      description:
        "Build problem-solving strength with puzzles, patterns, critical thinking exercises and strategy-based learning.",
      icon: "/puzzle.png",
      topicsCovered: [
        "Data Arrangements & Blood Relation",
        "Coding & Decoding",
        "Clocks & Calendars",
        "Data Interpretation & Data Sufficiency",
        "Cryptarithmetic",
      ],
    },
    {
      id: 4,
      title: "Ace",
      category: "Aptitude & Reasoning",
      description:
        "Grammar, vocabulary, reading comprehension and sentence correction for top-tier language performance.",
      icon: "/open-book.png",
      topicsCovered: [
        "Reading Comprehension",
        "Sentence Correction",
        "Sentence Completion & Para jumbles",
        "Voices & Speech",
        "Error spotting",
        "Critical Reasoning",
      ],
    },
    {
      id: 5,
      title: "Byte",
      category: "Technical Skills",
      description:
        "Fundamentals of Python, web basics, and logical thinking tailored for absolute beginners.",
      icon: "/byte.png",
      topicsCovered: ["Python Basics", "Web Fundamentals", "Logic Building"],
    },
    {
      id: 6,
      title: "Codevita",
      category: "Technical Skills",
      description:
        "Designed for coding contests and technical interviews using C, C++, Java or Python.",
      icon: "/monitor.png",
      topicsCovered: ["Competitive Programming (C, C++, Java, Python)"],
    },
    {
      id: 7,
      title: "CodePro",
      category: "Technical Skills",
      description:
        "In-depth training in Java programming, algorithms and data structures with problem-solving drills.",
      icon: "/curly-bracket.png",
      topicsCovered: [
        "Core Programming",
        "Data Structures & Algorithms (Java)",
      ],
    },
    {
      id: 8,
      title: "Stack",
      category: "Technical Skills",
      description:
        "Hands-on web development from frontend to backend using modern tech stacks.",
      icon: "/computer.png",
      topicsCovered: ["Full Stack Development"],
    },
    {
      id: 9,
      title: "Codegenix",
      category: "Technical Skills",
      description:
        "Project-based learning with tools and techniques in Machine Learning, AI and Data Science.",
      icon: "/robot.png",
      topicsCovered: [
        "ML/DS/AI projects",
        "Emerging Tools & Technologies (AI, Data Analytics, Cloud Basics)",
      ],
    },
    {
      id: 10,
      title: "Prime",
      category: "Placement & Recruitment",
      description:
        "Customized sessions aligned with top recruiters' expectations – TCS, Infosys, Wipro, Capgemini & more.",
      icon: "/businessman.png",
      topicsCovered: [
        "Company Specific Training (TCS, Infosys, Wipro, etc.)",
        "JD Orientation",
      ],
    },
    {
      id: 11,
      title: "Innovate",
      category: "Career Planning",
      description:
        "Ignite innovation with idea validation, lean business models, pitch decks and problem-solving workshops. Ignite ideas. Build ventures.",
      icon: "/light-bulb.png",
      topicsCovered: ["Entrepreneurship & Innovation Bootcamps"],
    },
    {
      id: 12,
      title: "Inspire",
      category: "Corporate Readiness",
      description:
        "Industry speakers, entrepreneurs, and change-makers sharing stories, strategies and wisdom.",
      icon: "/chat.png",
      topicsCovered: [
        "Guest Lectures & Expert Talks",
        "By Industry Experts & Domain Leaders",
        "Topics: Startup, Career Trends, Tech Insights",
      ],
    },
    {
      id: 13,
      title: "TalkPro",
      category: "Soft Skills",
      description:
        "Build clarity, fluency, and effectiveness in both spoken and written English.",
      icon: "/icons/soft-skills.svg",
      topicsCovered: ["Communication Skills"],
    },
    {
      id: 14,
      title: "Voicely",
      category: "Soft Skills",
      description:
        "Neutralize accents, improve clarity and speak globally with confidence.",
      icon: "/voice.png",
    },
    {
      id: 15,
      title: "Corp",
      category: "Corporate Readiness",
      description:
        "Grooming, ethics, email culture, professional behavior and the essentials of workplace excellence.",
      icon: "/id-card.png",
      topicsCovered: [
        "Corporate Readiness, Etiquette & Workplace Skills",
        "Email Etiquette",
        "Corporate Communication Skills",
        "POSH Compliance & Awareness",
        "Leadership & Team Building",
        "Outbound Learning & Corporate Engagement",
        "Custom Onboarding & Induction Programs",
        "Workplace Culture & Ethics",
      ],
    },
    {
      id: 16,
      title: "Examly",
      category: "Aptitude & Reasoning",
      description:
        "Time management, study plans, memory techniques and mindset training for academic excellence.",
      icon: "/notes.png",
      topicsCovered: ["TOEFL", "IELTS", "GRE", "Exam Strategy & Study Skills"],
    },
    {
      id: 17,
      title: "MockUp",
      category: "Placement & Recruitment",
      description:
        "Live practice rounds with detailed evaluation, scorecards and personalized feedback. Practice, perform, and perfect your pitch.",
      icon: "/theater-mask.png",
      topicsCovered: [
        "Mock GD & PI",
        "Skill Evaluation & Feedback Reports",
        "Interview Preparation (HR & Technical)",
      ],
    },
    {
      id: 18,
      title: "PitchPro",
      category: "Placement & Recruitment",
      description:
        "Train for impactful self-introduction, logical arguments and professional pitching under pressure.",
      icon: "/arrow.png",
      topicsCovered: ["Group Discussion Training", "Interview Orientation"],
    },
    {
      id: 19,
      title: "Careerly",
      category: "Career Planning",
      description:
        "Build a standout professional profile and get interview-ready with career coaching and digital presence tips.",
      icon: "/career.png",
      topicsCovered: [
        "Career Counseling & Mentorship",
        "LinkedIn Optimization & Resume Building",
        "Career Track Selection",
        "Personal Finance Awareness",
        "Portfolio Creation & Branding",
        "Strength Mapping & Confidence Building",
      ],
    },
    {
      id: 20,
      title: "Pathcraft",
      category: "School Enrichment",
      description:
        "Inspire young minds through interactive sessions on careers, college choices and self-discovery.",
      icon: "/compass.png",
      topicsCovered: [
        "Career Discovery Workshops",
        "Entrance Exam Strategy (Class 9–12)",
        "Artistic Techniques (Art, Expression, Creativity)",
        "Study Strategy & Time Management",
        "Subject-Specific Foundation Programs",
      ],
    },
    {
      id: 21,
      title: "SpeakUp",
      category: "Soft Skills",
      description:
        "Build confidence, clarity, and charisma on stage through dynamic exercises in speech structure, voice modulation and impactful delivery. Ideal for anchoring, debates and public events.",
      icon: "/marketing.png",
      topicsCovered: [
        "Public Speaking",
        "Group Discussions",
        "Interview Mastery Sessions",
      ],
    },
    {
      id: 22,
      title: "Elevate",
      category: "Soft Skills",
      description:
        "A transformational program focused on unlocking leadership potential, collaboration, decision-making and problem-solving in real-world team settings.",
      icon: "/rocket.png",
      topicsCovered: ["Leadership Training", "Teamwork Skills"],
    },
    {
      id: 23,
      title: "PlacEdge",
      category: "Placement & Recruitment",
      description:
        "A sharp, fast-paced program covering resumes, aptitude tricks, GD strategies and interview hacks to give students an edge during placement season.",
      icon: "/dollar.png",
      topicsCovered: [
        "Resume Writing",
        "Aptitude Tricks",
        "Group Discussion Strategies",
        "Interview Hacks",
      ],
    },
    {
      id: 24,
      title: "Persona",
      category: "Placement & Recruitment",
      description:
        "Self-discovery through standardized tests that reveal personality types, learning styles and career fit — followed by interpretation sessions for clarity and guidance.",
      icon: "/growth.png",
      topicsCovered: ["Psychometric Tests", "Personality Profiling"],
    },
    {
      id: 25,
      title: "AssessIQ",
      category: "Aptitude & Reasoning",
      description:
        "Comprehensive aptitude, reasoning and communication tests with detailed analytics, benchmarking and improvement plans — ideal for colleges tracking student preparedness.",
      icon: "/graph-bar.png",
      topicsCovered: [
        "Aptitude Tests",
        "Reasoning Tests",
        "Communication Skills Assessment",
        "Analytics & Benchmarking",
      ],
    },
  ];

  const filteredPrograms =
    activeFilter === "All Programs"
    ? programs 
      : programs.filter((program) => program.category === activeFilter);

  const customStyleEven = (
    activeFilter: string | null | undefined
  ): boolean => {
    if (!activeFilter) return false;
    const activeIndex = filters.indexOf(activeFilter);
    if (activeIndex === -1) return false;
    return activeIndex % 2 === 0;
  };

  const getGridClasses = (length: number) => {
    if (length === 5) {
      return "grid grid-cols-6 gap-6 sm:gap-8"; // staggered layout
    }
    if (length === 1) {
      return "grid grid-cols-1 gap-6 sm:gap-8 w-fit mx-auto"; // 1 centered
    }
    if (length === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-fit mx-auto";
    }
    return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"; // normal layout
  };

  const FullPageLoader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  };

  const dynamicContent = (activeFilter: string) => {
    switch (activeFilter) {
      case "Soft Skills":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  Our Soft Skills & Communication programs empower learners to
                  express themselves confidently, collaborate effectively, and
                  adapt to diverse professional environments. Designed for
                  students and professionals alike, the module covers public
                  speaking, interpersonal communication, teamwork, and emotional
                  intelligence. In today’s fast-paced world, strong
                  communication is not just a complementary skill—it’s a career
                  essential.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Our training blends theory with role-plays, group discussions,
                  and real-world scenarios, enabling participants to master
                  clarity, persuasion, and active listening.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  By enhancing these skills, learners can build meaningful
                  relationships, influence positively, and stand out in
                  interviews, workplaces, and leadership roles, ensuring
                  sustained career growth and personal development.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src={CommunicationImage}
                alt="Soft Skills Training"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none"
              />
            </div>
          </div>
        );

      case "Technical Skills":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  The Technical Skills Module equips learners with
                  industry-relevant expertise to meet the demands of evolving
                  technologies. From programming languages and web development
                  to data analysis and emerging tools, the curriculum ensures a
                  strong technical foundation that matches real-world
                  requirements.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  With hands-on projects, coding challenges, and guided
                  mentorship, participants gain the practical problem-solving
                  skills essential in today’s competitive job market. As
                  technology reshapes every industry, being technically
                  proficient is no longer optional—it’s a decisive advantage.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Our training bridges academic knowledge with industry
                  application, empowering learners to create, innovate, and
                  adapt quickly to new tools, platforms, and methodologies for
                  sustained career success.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src={technialSkillsImage}
                alt="Technical Skills Training"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        );

      case "Aptitude & Reasoning":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  Our Aptitude & Reasoning Module develops the analytical
                  thinking and problem-solving skills crucial for competitive
                  exams, placement tests, and corporate assessments. Covering
                  numerical ability, logical reasoning, and verbal aptitude, the
                  program sharpens mental agility through structured practice
                  and proven strategies.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  These skills go beyond test preparation—they enhance
                  decision-making, time management, and adaptability in
                  real-life scenarios. As recruitment processes increasingly
                  rely on aptitude evaluations, our module ensures learners are
                  well-prepared to perform with confidence.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Through mock tests, interactive exercises, and personalized
                  feedback, participants not only master problem-solving
                  techniques but also build the focus and speed required for
                  high-pressure, time-bound challenges.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src={AptitudeImage}
                alt="Aptitude Training"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        );

      case "Placement & Recruitment":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  The Placement & Recruitment Module prepares students to excel
                  in campus drives, walk-ins, and professional interviews. We
                  focus on resume building, personal branding, group discussion
                  strategies, and mock interviews aligned with current industry
                  expectations.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  By simulating real recruitment scenarios, learners gain the
                  confidence and competence to navigate hiring processes
                  successfully. In a competitive job market, standing out is
                  critical—our program ensures candidates are not just job-ready
                  but career-ready.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  With insights from industry experts and recruiters,
                  participants learn to present their skills effectively, handle
                  challenging questions, and demonstrate professionalism,
                  increasing their chances of securing high-quality job offers
                  and sustained career growth.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src={placementImage}
                alt="Placement Training"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        );

      case "Career Planning":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  Our Career Planning & Personal Growth Module helps individuals
                  define clear goals, align their skills with aspirations, and
                  take purposeful steps toward long-term success.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Through self-assessment tools, mentorship sessions, and
                  structured action plans, participants gain clarity on career
                  paths that match their strengths and passions. Beyond choosing
                  a profession, we emphasize resilience, adaptability, and
                  continuous learning—qualities that sustain growth in an
                  unpredictable job landscape.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  By addressing both mindset and skill set, the program empowers
                  learners to overcome challenges, seize opportunities, and
                  craft a fulfilling career journey. The result is not just
                  professional success, but personal satisfaction and
                  self-mastery.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Career Planning"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        );

      case "Corporate Readiness":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  Our Corporate Readiness & Compliance Module ensures
                  professionals can integrate seamlessly into organizational
                  environments while adhering to workplace ethics, protocols,
                  and legal requirements.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Covering topics like professional etiquette, workplace
                  communication, time management, and compliance awareness, the
                  program bridges the gap between academic learning and
                  corporate expectations. In an era where cultural fit and
                  ethical conduct are valued as highly as technical skills, this
                  module equips participants to thrive responsibly in any
                  professional setting.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Real-life case studies, role-plays, and compliance simulations
                  prepare learners to contribute effectively from day one,
                  enhancing both their employability and long-term career
                  progression in corporate environments.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src="https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?_gl=1*nc270h*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzAkdDE3NTU1NDM5OTQkajYwJGwwJGgw"
                alt="Corporate Training"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        );

      case "School Enrichment":
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {` About ${activeFilter} programs`}
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  The School Enrichment Module is designed to nurture essential
                  life skills, critical thinking, and communication abilities in
                  young learners, preparing them for academic and personal
                  success.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  With engaging, activity-based sessions, we focus on
                  creativity, leadership, time management, and digital
                  literacy—skills increasingly vital in today’s world. By
                  introducing these competencies early, students develop
                  confidence, adaptability, and a proactive mindset that
                  supports both academic performance and overall personality
                  development.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Our approach blends fun learning with meaningful
                  skill-building, ensuring students grow into well-rounded
                  individuals capable of meeting future challenges with
                  resilience, curiosity, and the ability to make positive
                  contributions to society.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="School Enrichment"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        );
      default:
        return (
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              className={
                customStyleEven(activeFilter)
                  ? "order-1 lg:order-1"
                  : "order-2 lg:order-2"
              }
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                🧠 About Our Programs
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
                <p className="text-sm sm:text-base lg:text-lg">
                  At JCS iLearn, we believe that impactful education isn't
                  one-size-fits-all — it's modular, tailored and deeply
                  outcome-driven.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  That's why we've designed JCS iLearn as a curated suite of 25+
                  training programs, each carefully crafted to develop a
                  specific skill set, career goal or learning outcome.
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  Whether you're a student looking to build a strong technical
                  foundation or an institution aiming to boost campus placement
                  readiness, our offerings are structured to serve your goals
                  with focus and flexibility.
                </p>
              </div>
            </div>
            <div
              className={`relative ${
                customStyleEven(activeFilter)
                  ? "order-2 lg:order-2"
                  : "order-1 lg:order-1"
              }`}
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Students learning and collaborating"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-xl border border-white/20">
                <p className="text-gray-700 font-semibold italic text-xs sm:text-sm lg:text-base">
                  "Modular, tailored, and outcome-driven learning"
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {loading && (
        <div>
          <FullPageLoader />
        </div>
      )}

    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
        <section className="relative pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-6xl mx-auto text-center">
            {/* <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Our Programs
          </div> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Products & Signature Programs — JCS iLearn
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Empowering learners with skill-based, career-aligned and
              industry-ready modules.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl">📍</span>
                <span className="text-xs sm:text-sm lg:text-base">
                  Offline | Online | Hybrid
                </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl">📅</span>
                <span className="text-xs sm:text-sm lg:text-base">
                  1-day workshops to full-year integration
                </span>
              </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  localStorage.setItem("defaultFilter", filter);
                }}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular Programs
            </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Choose from our curated selection of industry-leading programs
          </p>
        </div>

        {/* Program Cards Grid */}
          <div className={getGridClasses(filteredPrograms.length)}>
            {(filteredPrograms ?? []).map((program, index) => {
              const colorSchemes = [
                { bg: "from-blue-100 to-blue-300", text: "text-blue-800" },
                { bg: "from-green-100 to-green-300", text: "text-green-800" },
                { bg: "from-teal-100 to-teal-300", text: "text-teal-800" },
                {
                  bg: "from-purple-100 to-purple-300",
                  text: "text-purple-800",
                },
                { bg: "from-pink-100 to-pink-300", text: "text-pink-800" },
                {
                  bg: "from-indigo-100 to-indigo-300",
                  text: "text-indigo-800",
                },
                {
                  bg: "from-yellow-100 to-yellow-300",
                  text: "text-yellow-800",
                },
                { bg: "from-red-100 to-red-300", text: "text-red-800" },
                {
                  bg: "from-violet-100 to-violet-300",
                  text: "text-violet-800",
                },
                {
                  bg: "from-orange-100 to-orange-300",
                  text: "text-orange-800",
                },
                {
                  bg: "from-emerald-100 to-emerald-300",
                  text: "text-emerald-800",
                },
                { bg: "from-cyan-100 to-cyan-300", text: "text-cyan-800" },
              ];

              const colorScheme =
                colorSchemes[program.id % colorSchemes.length];

              // Default class for normal grid
              let cardClasses = "";

              if (filteredPrograms.length === 5) {
                // staggered card placement
                if (index < 3) {
                  cardClasses = "col-span-6 md:col-span-2";
                } else if (index === 3) {
                  cardClasses = "col-span-6 md:col-start-2 md:col-span-2";
                } else if (index === 4) {
                  cardClasses = "col-span-6 md:col-start-4 md:col-span-2";
                }
              }

              return (
                <div
                  key={program.id}
                  className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full max-w-sm h-[450px]  justify-center min-h-[350px] ${cardClasses}`}

                  // className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full max-w-sm h-[400px] flex col-span-6 md:col-span-2  ${cardClasses}`}
                >
                  <div
                    className={`p-8 sm:p-10 bg-gradient-to-b ${colorScheme.bg}  h-full w-full flex flex-col justify-center`}
                  >
                    <div className="text-center flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto">
                <Image
                            src={program.icon}
                            alt={program.category}
                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                            width={40}
                            height={40}
                          />
                  </div>
                </div>
                      <div className="flex flex-col h-full">
                        {/* Title Section */}
                        <div>
                          <h3
                            className={`text-lg sm:text-xl font-bold mb-3 ${colorScheme.text} leading-tight`}
                          >
                  {program.title}
                </h3>
                        </div>

                        {/* Push description to bottom */}
                        <div className="mt-auto">
                          <p className="text-black text-sm sm:text-base font-medium leading-normal mb-3">
                  {program.description}
                </p>
                </div>
              </div>

                      {/* {program?.topicsCovered && (
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                          {program?.topicsCovered.map((topic, idx) => (
                            <li key={idx} className="pl-1">
                              {topic}
                            </li>
                          ))}
                        </ul>
                      )} */}
                  </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* About Our Programs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
          {dynamicContent(activeFilter)}
          {/* <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            className={
              customStyleEven(activeFilter)
                ? "order-1 lg:order-1"
                : "order-2 lg:order-2"
            }
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              🧠 About Our Programs
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                At JCS iLearn, we believe that impactful education isn't
                one-size-fits-all — it's modular, tailored and deeply
                outcome-driven.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                That's why we've designed JCS iLearn as a curated suite of 25+
                training programs, each carefully crafted to develop a specific
                skill set, career goal or learning outcome.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                Whether you're a student looking to build a strong technical
                foundation or an institution aiming to boost campus placement
                readiness, our offerings are structured to serve your goals with
                focus and flexibility.
              </p>
            </div>
          </div>
          <div
            className={`relative ${
              customStyleEven(activeFilter)
                ? "order-2 lg:order-2"
                : "order-1 lg:order-1"
            }`}
          >
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students learning and collaborating" 
              width={500} 
              height={400} 
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none" 
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic text-xs sm:text-sm lg:text-base">
                "Modular, tailored, and outcome-driven learning"
              </p>
            </div>
          </div>
        </div> */}
      </section>

      {/* What Makes Us Unique */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              🎯 What Makes JCS iLearn Unique?
            </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16  rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span
                    className="inline-flex items-center justify-center 
  w-12 h-12 rounded-full p-[3px] 
  bg-gradient-to-r from-[#05063d] via-[#0a0b68] to-[#05063d]"
                  >
                    <span className="w-full h-full flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl text-black">
                      1
                    </span>
                  </span>
              </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
                  Program-Based Learning
                </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                  Each module follows a structured curriculum with defined
                  goals, activities and outcomes.
              </p>
            </div>
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r  rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span
                    className="inline-flex items-center justify-center 
  w-12 h-12 rounded-full p-[3px] 
  bg-gradient-to-r from-[#05063d] via-[#0a0b68] to-[#05063d]"
                  >
                    <span className="w-full h-full flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl text-black">
                      2
                    </span>
                  </span>
              </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
                  Product-Style Delivery
                </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                  Every iLearn module functions as a standalone product that can
                  be deployed individually or bundled.
              </p>
            </div>
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r  rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span
                    className="inline-flex items-center justify-center 
  w-12 h-12 rounded-full p-[3px] 
  bg-gradient-to-r from-[#05063d] via-[#0a0b68] to-[#05063d]"
                  >
                    <span className="w-full h-full flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl text-black">
                      3
                    </span>
                  </span>
              </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
                  Tiered Flexibility
                </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                  Our modules come in Lite, Pro, and Plus formats — letting you
                  choose the depth and duration.
              </p>
            </div>
            <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r  rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span
                    className="inline-flex items-center justify-center 
  w-12 h-12 rounded-full p-[3px] 
  bg-gradient-to-r from-[#05063d] via-[#0a0b68] to-[#05063d]"
                  >
                    <span className="w-full h-full flex items-center justify-center rounded-full bg-white text-lg sm:text-xl lg:text-2xl text-black">
                      4
                    </span>
                  </span>
                  {/* from-pink-500 to-purple-600 */}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">
                  Cross-Domain Ecosystem
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  From coding and soft skills to career readiness and
                  innovation, iLearn covers it all seamlessly.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                Ready to Choose Your Program?
              </h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
                Explore our comprehensive suite of 25+ programs designed to
                transform your learning journey and career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Get Started Today
              </Link>
              <Link 
                href="/"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm sm:text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
} 
