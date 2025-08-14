"use client"

import { IconArrowDown, IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { X, Linkedin } from "lucide-react"

import { useScroll, useTransform, motion } from "motion/react"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  type Services = {
    image: string
    title: string
    description: string
    link: string
  }
  type Testimonial = {
    name: string
    image: string
    testimony: string
    role: string
  }
  const testimonials: Testimonial[] = [
    {
      name: "Sitamani Rajagopalan",
      image: "/t1.png",
      testimony:
        "Anoop Pandey ji is an excellent Occult person and an all rounder. I have taken Vastu, Astrology, Pranic healing, Crystal handling, Rudraksha counselling and Tarrot guidance.",
      role: "Education",
    },
    {
      name: "Dr Ashish Gupta",
      image: "/t2.png",
      testimony:
        "Its been beautiful experience and changes been seen quickly through pranic healing. No words to thank you Dr. Anoop Pandey. looking forward to meet you again for more blessings.",
      role: "Teacher",
    },
    {
      name: "NEERJA JINDAL ",
      image: "t3.jpg",
      testimony: "Excellent ",
      role: "Principal",
    },
  ]

  const services: Services[] = [
    {
      image: "/v.png",
      title: "Vastu Consultation",
      description:
        "Vastu consultation analyzes your home or workspace layout to align it with natural energy principles. It promotes harmony, prosperity, and health. This is especially helpful before building, buying, or renovating a property. Conducted on-site or virtually through floor plans, a Vastu expert evaluates directions, room placement, and energy flow, offering remedies to correct imbalances without major structural changes.",
      link: "https://examples.motion.dev/react/number-radix-slider",
    },
    {
      image: "/j.png",
      title: "Jyotish Consultation",
      description:
        "Jyotish (Vedic astrology) consultation interprets your birth chart to uncover life patterns, strengths, and challenges. It helps with decisions about career, relationships, and timing of events. Best done during transitions or uncertainty, it's conducted online or in person by analyzing your date, time, and place of birth. The astrologer provides insights based on planetary positions and offers remedial guidance if needed.",
      link: "",
    },
    {
      image: "/r.png",
      title: "Rudraksh Consultation",
      description:
        "Rudraksha consultation helps you choose the right sacred bead based on your energy, life goals, and astrological profile. These beads are believed to balance chakras and enhance spiritual well-being. It's ideal when seeking mental clarity, healing, or spiritual growth. Done via a personal session or online, the practitioner assesses your needs and suggests specific Rudrakshas along with usage methods and precautions.",
      link: "",
    },
    {
      image: "/t.jpg",
      title: "Tarot Consultation",
      description:
        "A Tarot consultation offers intuitive guidance using symbolic cards to explore your current energies and possible outcomes. It's used to gain clarity on personal, emotional, or career questions. Ideal during times of confusion or major decisions, it's typically done in person or online. The reader shuffles and draws cards, interpreting them in the context of your query to reveal insights and next steps.",
      link: "",
    },
    {
      image: "/c.jpg",
      title: "Pranic and Crystal Healing",
      description:
        "Pranic Healing is an energy-based technique that cleanses and energizes your body's aura to accelerate physical and emotional healing. It's useful when dealing with stress, pain, or chronic conditions. Done in person or remotely, the healer uses hand movements to scan, cleanse, and energize your chakras without physical touch. Sessions are safe, non-intrusive, and customized to individual energy imbalances.",
      link: "",
    },
  ]

  function Testimonials() {
    return (
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {testimonials.map((el, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl md:rounded-3xl border-2 border-[#023134] p-4 md:p-6 min-h-[280px] md:min-h-[320px] flex flex-col justify-between"
              >
                <div className="text-center text-sm md:text-base lg:text-lg font-light leading-relaxed mb-4 flex-grow">
                  "{el.testimony}"
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden flex-shrink-0">
                    <img className="h-full w-full object-cover" src={el.image || "/placeholder.svg"} alt={el.name} />
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium text-sm md:text-base">{el.name}</div>
                    <div className="font-light text-xs md:text-sm text-gray-600">{el.role}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const Services = ({
    services: servicesProp = services,
    autoplay = false,
  }: { services?: Services[]; autoplay?: boolean }) => {
    const [active, setActive] = useState(0)

    const handleNext = () => {
      setActive((prev) => (prev + 1) % servicesProp.length)
    }

    const handlePrev = () => {
      setActive((prev) => (prev - 1 + servicesProp.length) % servicesProp.length)
    }

    useEffect(() => {
      if (autoplay) {
        const interval = setInterval(handleNext, 3000)
        return () => clearInterval(interval)
      }
    }, [autoplay, servicesProp.length])

    const current = servicesProp[active]

    return (
      <div className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="max-w-7xl mx-auto bg-[#f2f2f2] rounded-2xl md:rounded-3xl lg:rounded-[3rem] p-4 md:p-8 lg:p-12">
          <div className="flex items-center justify-between gap-4">
            {/* Previous Button */}
            <button onClick={handlePrev} className="flex-shrink-0 p-2 hover:bg-white/50 rounded-full transition-colors">
              <IconArrowLeft className="h-6 w-6 md:h-8 md:w-8 hover:opacity-70 transition-opacity" />
            </button>

            {/* Content */}
            <div className="flex-grow">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl overflow-hidden bg-white shadow-lg">
                    <img
                      src={current.image || "/placeholder.svg"}
                      alt={current.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 md:mb-6">
                    {current.title}
                  </h2>
                  <p className="text-sm md:text-base lg:text-lg xl:text-xl font-light leading-relaxed mb-6 md:mb-8 text-gray-700">
                    {current.description}
                  </p>
                  <a
                    href={current.link}
                    className="inline-flex items-center justify-center gap-2 bg-[#fcfcfc] hover:bg-blue-700 hover:text-white text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg transition-colors"
                  >
                    Get Started
                    <IconArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button onClick={handleNext} className="flex-shrink-0 p-2 hover:bg-white/50 rounded-full transition-colors">
              <IconArrowRight className="h-6 w-6 md:h-8 md:w-8 hover:opacity-70 transition-opacity" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {servicesProp.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${index === active ? "bg-blue-600" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
      <div className="w-full px-4 md:px-8 lg:px-16 mt-4 md:mt-6">
        <nav className="max-w-7xl mx-auto bg-black text-white rounded-2xl md:rounded-3xl px-4 md:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-lg md:text-xl lg:text-2xl font-bold">Antarrdriishtie</div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-light">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="#aboutUs" className="hover:text-gray-300 transition-colors">
                About Us
              </a>
              <a href="#testimonials" className="hover:text-gray-300 transition-colors">
                Testimonials
              </a>
              <a href="mailto:devanshwalecha93@gmail.com" className="hover:text-gray-300 transition-colors">
                Contact Us
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href=""
                className="bg-[#fcfcfc] text-black font-semibold px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-xl text-sm md:text-base lg:text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div
                  className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></div>
                <div className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></div>
                <div
                  className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-col gap-4 font-light">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
                <a href="#aboutUs" className="hover:text-gray-300 transition-colors">
                  About Us
                </a>
                <a href="#testimonials" className="hover:text-gray-300 transition-colors">
                  Testimonials
                </a>
                <a href="mailto:devanshwalecha93@gmail.com" className="hover:text-gray-300 transition-colors">
                  Contact Us
                </a>
                <a
                  href=""
                  className="bg-[#fcfcfc] text-black font-semibold px-6 py-3 rounded-xl text-center hover:bg-gray-100 transition-colors mt-2"
                >
                  Get Started
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    )
  }

  const AboutUs = () => {
    return (
      <div className="w-full px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-8">
            <div className="bg-[#f2f2f2] text-[#667085] px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold">
              Our Vision and Mission
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6 md:mb-8 lg:mb-12 text-center md:text-left">
            Providing Timeless Wisdom for Inner Awakening and Balanced Life
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 md:mb-16 lg:mb-20 text-center md:text-left max-w-4xl">
            Our mission is to pass upon the ancient wisdom and knowledge of metaphysical tools, empowering individuals
            to gain clarity, foster deep healing, and discover their true purpose.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">Personalized Guidance</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                Every session is uniquely tailored to meet individual needs and life paths, combining personalized
                insights, practical guidance, and intuitive understanding to support each person's journey toward
                growth, fulfillment, and authentic self-discovery.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">Confidentiality and Trust</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                A safe space where personal experiences are honored with respect and privacy, fostering trust, openness,
                and genuine connection, allowing individuals to share, heal, and grow without fear of judgment or
                compromise of their personal boundaries.
              </p>
            </div>

            <div className="text-center md:text-left md:col-span-2 lg:col-span-1">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">Transformation Oriented</h3>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                Beyond predictions—fostering actionable, positive change in clients' lives by offering guidance,
                insights, and practical tools that inspire growth, encourage self-empowerment, and create lasting
                transformations in alignment with their highest potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Hero = () => {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(237,237,237,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.75) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        className="w-full bg-[#fcfcfc] px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-[#f2f2f2] text-[#667085] px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold">
              Technology X Astrology
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-8 md:mb-12 lg:mb-16">
            Harnessing Power
            <br />
            of Astrology
            <br />
            to Embark Success
          </h1>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#services"
              className="bg-black border-2 border-[#f2f2f2] hover:bg-gray-800 transition-colors rounded-full p-4 md:p-6 lg:p-8"
            >
              <IconArrowDown className="text-white h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16" />
            </a>
          </div>
        </div>
      </div>
    )
  }

  interface TimelineEntry {
    title: string
    content: React.ReactNode
  }

  const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setHeight(rect.height)
      }
    }, [ref])

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
      <div className="w-full bg-white text-black px-4 md:px-8 lg:px-16" ref={containerRef}>
        <div className="max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 md:mb-6 text-center md:text-left">
            How Antarrdriishtie Works
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center md:text-left mb-12 md:mb-16 lg:mb-20">
            The following is a brief timeline explaining how we work.
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-12 md:pb-16 lg:pb-20">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-8 md:pt-16 lg:pt-20 gap-4 md:gap-8 lg:gap-12">
              <div className="sticky flex flex-col items-center top-20 md:top-40 self-start w-8 md:w-auto z-40">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white flex items-center justify-center border-2 border-gray-300">
                  <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-neutral-200 border border-neutral-300" />
                </div>
                <h3 className="hidden md:block text-xl lg:text-2xl xl:text-3xl font-bold text-black mt-4 md:pl-8 lg:pl-12">
                  {item.title}
                </h3>
              </div>

              <div className="flex-1 pb-8 md:pb-12 lg:pb-16">
                <h3 className="md:hidden block text-xl md:text-2xl mb-4 font-bold text-black">{item.title}</h3>
                <div className="text-sm md:text-base lg:text-lg">{item.content}</div>
              </div>
            </div>
          ))}

          <div
            style={{ height: height + "px" }}
            className="absolute left-4 md:left-5 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 to-transparent"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
            />
          </div>
        </div>
      </div>
    )
  }

  function TimelineDemo() {
    const data = [
      {
        title: "Choose your Service",
        content: (
          <div>
            <p className="mb-6 md:mb-8 text-gray-700 leading-relaxed">
              Explore our range of offerings—Vastu, Jyotish, Tarot Counselling, Rudraksha Consultation, and Energy
              Healing
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/v.png"
                alt="Vastu Consultation"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="/j.png"
                alt="Jyotish Consultation"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="/t.jpg"
                alt="tarot consultation"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
              <img
                src="/r.png"
                alt="rudraksh consultation"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Book Appointment",
        content: (
          <div>
            <p className="mb-6 md:mb-8 text-gray-700 leading-relaxed">
              Schedule a convenient time with our expert through our easy online booking system
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/call.jpeg"
                alt="book appointment"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Personalized Guidance",
        content: (
          <div>
            <p className="mb-6 md:mb-8 text-gray-700 leading-relaxed">
              Receive tailored insights, solutions, and remedies based on your unique needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/mentor.jpeg"
                alt="personalized guidance"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Experience Transformation",
        content: (
          <div>
            <p className="mb-6 md:mb-8 text-gray-700 leading-relaxed">
              Implement our expert advice to bring harmony, clarity, and positive energy into your life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src="/guide.webp"
                alt="transformation guidance"
                className="h-32 md:h-40 lg:h-48 w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="relative w-full overflow-hidden">
        <Timeline data={data} />
      </div>
    )
  }

  const SanctityFooter: React.FC = () => {
    return (
      <div className="bg-[#f2f2f2] text-black">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-6 border-b border-gray-300">
          <div className="text-lg md:text-xl">Hello@Antarrdriishtie</div>
        </nav>

        {/* Main Footer Content */}
        <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
              {/* Left Column - Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4 md:mb-6">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl md:text-2xl font-light">Antarrdriishtie</span>
                </div>
                <p className="text-gray-600 mb-6 md:mb-8">Delhi-NCR, India</p>

                {/* Social Icons */}
                <div className="flex space-x-4">
                  <button className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                    <X size={18} className="md:w-5 md:h-5" />
                  </button>
                  <button className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                    <Linkedin size={18} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>

              {/* Company Links */}
              <div className="lg:col-span-1">
                <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Company</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <a href="#aboutUs" className="text-black hover:text-gray-600 transition-colors flex items-center">
                      About us
                      <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:devanshwalecha93@gmail.com"
                      className="text-black hover:text-gray-600 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media Links */}
              <div className="lg:col-span-1">
                <h3 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Social Media</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <a href="#" className="text-black hover:text-gray-600 transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-gray-600 transition-colors">
                      X
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Large Logo */}
            <div className="mt-12 md:mt-16 lg:mt-20">
              <div className="text-4xl md:text-6xl lg:text-8xl font-light tracking-wider">
                <span className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <span className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 md:border-4 border-black rounded-full flex items-center justify-center">
                    <span className="text-lg md:text-2xl lg:text-4xl">©</span>
                  </span>
                  <span className="font-semibold text-center md:text-left">Antarrdriishtie</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="font-urbanist scroll-smooth">
      <section>
        <div>
          <Navbar />
        </div>
        <div id="hero">
          <Hero />
        </div>
        <div id="services">
          <Services services={services} autoplay={false} />
        </div>
        <div id="aboutUs">
          <AboutUs />
        </div>
        <div id="timeline">
          <TimelineDemo />
        </div>
        <div className="text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mt-8 md:mt-12 lg:mt-16 px-4">
          Don't take our Word
        </div>
        <div id="testimonials" className="py-8 md:py-12 lg:py-16">
          <Testimonials />
        </div>
        <div id="footer">
          <SanctityFooter />
        </div>
      </section>
    </main>
  )
}
