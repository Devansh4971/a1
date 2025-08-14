"use client"

import {IconArrowDown, IconArrowLeft, IconArrowRight} from '@tabler/icons-react'
import { X, Linkedin, Instagram } from "lucide-react"

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
export default function Home() {
  type Services = {
    image: string
    title: string
    description: string
    link:string
  }
  type Testimonial={
    name :string,
    image:string,
    testimony:string,
    role:string;
  }
  const testimonials:Testimonial[]=[
    {
      name: "Sitamani Rajagopalan",
      image:"/t1.png",
      testimony:"Anoop Pandey ji is an excellent Occult person and an all rounder. I have taken Vastu, Astrology, Pranic healing, Crystal handling, Rudraksha counselling and Tarrot guidance.",
      role:"Education"
    },{
      name:"Dr Ashish Gupta",
      image:"/t2.png",
      testimony:"Its been beautiful experience and changes been seen quickly through pranic healing. No words to thank you Dr. Anoop Pandey. looking forward to meet you again for more blessings.",
      role:"Teacher"
    },{
      name:"NEERJA JINDAL ",
      image:"t3.jpg",
      testimony:"Excellent ",
      role:"Principal"
    }
  ]

  const services: Services[] = [
    {
      image: "/v.png",
      title: "Vastu Consultation",
      description:
        "Vastu consultation analyzes your home or workspace layout to align it with natural energy principles. It promotes harmony, prosperity, and health. This is especially helpful before building, buying, or renovating a property. Conducted on-site or virtually through floor plans, a Vastu expert evaluates directions, room placement, and energy flow, offering remedies to correct imbalances without major structural changes.",
      link:"https://examples.motion.dev/react/number-radix-slider"
    },
    {
      image: "/j.png",
      title: "Jyotish Consultation",
      description:
        "Jyotish (Vedic astrology) consultation interprets your birth chart to uncover life patterns, strengths, and challenges. It helps with decisions about career, relationships, and timing of events. Best done during transitions or uncertainty, it's conducted online or in person by analyzing your date, time, and place of birth. The astrologer provides insights based on planetary positions and offers remedial guidance if needed.",
      link:""
    },
    {
      image: "/r.png",
      title: "Rudraksh Consultation",
      description:
        "Rudraksha consultation helps you choose the right sacred bead based on your energy, life goals, and astrological profile. These beads are believed to balance chakras and enhance spiritual well-being. It's ideal when seeking mental clarity, healing, or spiritual growth. Done via a personal session or online, the practitioner assesses your needs and suggests specific Rudrakshas along with usage methods and precautions.",
      link:""
    },
    {
      image: "/t.jpg",
      title: "Tarot Consultation",
      description:
        "A Tarot consultation offers intuitive guidance using symbolic cards to explore your current energies and possible outcomes. It's used to gain clarity on personal, emotional, or career questions. Ideal during times of confusion or major decisions, it's typically done in person or online. The reader shuffles and draws cards, interpreting them in the context of your query to reveal insights and next steps.",
      link:""
    },
    {
      image: "/c.jpg",
      title: "Pranic and Crystal Healing",
      description:
        "Pranic Healing is an energy-based technique that cleanses and energizes your body's aura to accelerate physical and emotional healing. It's useful when dealing with stress, pain, or chronic conditions. Done in person or remotely, the healer uses hand movements to scan, cleanse, and energize your chakras without physical touch. Sessions are safe, non-intrusive, and customized to individual energy imbalances.",
      link:""
    },
  ]
  function Testimonials(){
    return(
      <div className="h-[20rem] gap-y-5 grid grid-cols-3 gap-x-5  items-center w-[100%] ">
        {testimonials.map((el,idx)=>{
          return(
            <div key={idx} className="h-[15rem] w-[27.5rem] rounded-3xl border-[#023134] border-2 gap-y-2 ml-[1.5rem] ">
              <div className="text-center pl-[5%] pr-[5%] mt-[9%] font-light text-[1.25rem] leading-6 h-[50%]">{el.testimony}</div>
              <div className="flex items-center justify-center gap-3">
                <div className="h-[4.125rem] rounded-full w-[4.125rem]"><img className="h-full rounded-full w-full object-contain" src={el.image} alt={el.name} /></div>
                <div className="w-[70%]  h-[4rem] text-[18px]">
                  <div className="mt-2">{el.name}</div>
                  <div className="font-light">{el.role}</div>
                </div>
              </div>
            </div>
          )
        })}

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
        const interval = setInterval(handleNext, 3000) // Changed to 3 seconds for better UX
        return () => clearInterval(interval) // Fixed cleanup function
      }
    }, [autoplay, servicesProp.length])

    const current = servicesProp[active]

    return (
      <div className="w-[90%] h-[35rem] rounded-[3rem] inset-y-[-2rem] flex items-center justify-center bg-[#f2f2f2] ml-[5%]">
        <div className="cursor-pointer">
          <IconArrowLeft onClick={handlePrev} className="h-[2rem] w-6 hover:opacity-70 transition-opacity" />
        </div>

        <div className="h-[80%] mt-[10%] mb-[10%] w-[80%]">
          {/* Removed unnecessary map - just render current service */}
          <div className="h-full w-full flex items-center justify-center" key={active}>
            <div className="w-[50%] rounded-[2rem] h-[80%] mt-[10%] mb-[10%] flex items-center justify-center">
              <div className="w-[25rem] h-[25rem] rounded-[1rem] overflow-hidden bg-white">
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.title}
                  className="h-full w-full object-contain rounded-[1rem]"
                />
              </div>
            </div>
            <div className="w-[50%] ml-[10%] h-[80%] pr-[2.5rem]">
              <div className="mt-[1rem] text-5xl font-semibold">{current.title}</div>
              <div className="mt-[1rem] text-xl font-light leading-7">{current.description}</div>
              <div className="mt-2">
                <a
                  href={current.link}
                  className="font-semibold gap-2 w-[20rem] text-black rounded-xl bg-[#fcfcfc] flex items-center justify-center h-[3rem] text-[1.25rem] hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Get Started
                  <IconArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor-pointer">
          <IconArrowRight onClick={handleNext} className="h-[2rem] w-6 hover:opacity-70 transition-opacity" />
        </div>
      </div>
    )
  }
  const Navbar = () => {
    return (
      <div className="h-[5rem] w-[90&] ml-[5%] bg-black text-white mt-[1.5rem] rounded-3xl mr-[5%] flex items-center ">
        <section className="text-[1.5rem] font-bold ml-[2.5%]">Antarrdriishtie</section>
        <section className="ml-[15%] font-light flex items-center justify-evenly gap-x-[1rem]  h-full w-[40%]">
          <a href="#">Home</a>
          <a href="#aboutUs">About Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="mailto:devanshwalecha93@gmail.com">Contact Us</a>
        </section>
        <section className="ml-[15%] font-semibold w-[10rem] text-black rounded-xl bg-[#fcfcfc] flex items-center justify-center  h-[75%] text-[1.25rem]">
          <a href="">Get Started</a>
        </section>
      </div>
    )
  }
  const AboutUs=()=>{
    return(
      <div className="w-full h-[50rem]">
        <section className="flex rounded-full leading-4 text-[#667085] bg-[#f2f2f2] items-center justify-center h-[2rem] w-[16.25rem] ml-[5rem] font-semibold mt-[5rem] ">Our Vision and Mision</section>
        <div className="text-[4.25rem] font-semibold ml-[5rem] mt-[2rem] text-base leading-[6rem]">Providing Timeless Wisdom for Inner Awakening and Balanced Life </div>
        <div className="ml-[5rem] mt-[2.25rem] w-[50%] leading-[2.5rem] text-[2rem] ">Our mission is to pass upon the ancient wisdom and knowledge of metaphysical tools, empowering individuals to gain clarity, foster deep healing, and discover their true purpose.</div>
        <div className="w-full h-[15rem] mt-[2.5rem] flex items-center justify-center space-x-8 ">
          <div className="h-full w-[30%]"><div className="text-center"><h1 className="text-[2.25rem]">Personalized Guidance</h1></div><div><p className="text-[1.25rem] pr-4 font-light">Every session is uniquely tailored to meet individual needs and life paths, combining personalized insights, practical guidance, and intuitive understanding to support each person’s journey toward growth, fulfillment, and authentic self-discover</p></div></div>
          <div className="h-full  w-[30%]">
            <div className="tetx-center"><h1 className="text-[2.25rem] text-center">Confidentiality and Trust</h1></div>
            <div><p className="text-[1.25rem] pr-4 font-light">
              A safe space where personal experiences are honored with respect and privacy, fostering trust, openness, and genuine connection, allowing individuals to share, heal, and grow without fear of judgment or compromise of their personal boundaries.</p></div>
          </div>
          <div className="h-full  w-[30%]">
            <div className="text-center"><h1 className="text-[2.25rem]">Transformation Oriented</h1></div>
            <p className="text-[1.25rem] pr-4 font-light">
              Beyond predictions—fostering actionable, positive change in clients’ lives by offering guidance, insights, and practical tools that inspire growth, encourage self-empowerment, and create lasting transformations in alignment with their highest potential.</p>
          </div>
        </div>

      </div>
    )
  }
  const Hero=()=>{
    return(
      <div style={{
        width: '100%',
        height: '35rem',
        backgroundColor: '#fcfcfc', // gray-950
        backgroundImage:
          'linear-gradient(rgba(237,237,237,0.75) 1px, transparent 1px), linear-gradient(90deg, rgba(237,237,237,0.75) 1px, transparent 1px)',
        backgroundSize: '120px 120px',
      }} className="">
        <div className="h-[4rem]  w-full flex items-center justify-center py-3"><section className="flex rounded-full leading-4 text-[#667085] bg-[#f2f2f2] items-center justify-center h-[2rem] w-[16.25rem]  font-semibold mt-[2rem] ">Technology X Astrology</section></div>
        <div className="flex mt-[2.5rem] items-center justify-center text-[4.325rem] font-semibold text-center height-[80%] w-[80%] ml-[10%] mr-[10%]">Harnessing Power <br></br>of Astrology <br></br>to Embark Success </div>
        <div className="h-[8rem] w-full  mt-[1.5rem] flex items-center justify-center"><a href="#services" className="bg-black border-2 flex items-center font-light justify-center border-[#f2f2f2] h-full w-[8rem] rounded-full"><IconArrowDown style={{height:"6rem",width:"4rem", fontWeight:"200"}} className="text-white  font-light"></IconArrowDown></a></div>

      </div>
      
    )
  }

  
  

  interface TimelineEntry {
    title: string;
    content: React.ReactNode;
  }

  const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }, [ref]);

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
      <div
        className="w-full bg-white  text-black md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-4xl md:text-[4.25rem] fonr-semibold mb-4 text-black  max-w-4xl">
            How Antarrdriishtie Works
          </h2>
          <p className="text-black  text-2xl md:text-base md:text-[1.25rem] max-w-sm">
            The following is a brief timeline explaining how we work.
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white  flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300  p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-black  ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black ">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    );
  };
  
  

  function TimelineDemo() {
    const data = [
      {
        title: "Choose your Service",
        content: (
          <div>
            <p className="mb-8 text-md font-normal text-black md:text-md ">
              Explore our range of offerings—Vastu, Jyotish, Tarot Counselling, Rudraksha Consultation, and Energy Healing


            </p>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/v.png"
                alt="Vastu Consultation"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/j.png"
                alt="Jyotish Consultation"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/t.jpg"
                alt="tarot consultation"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              <img
                src="/r.png"
                alt="rudraksh consultation"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Book a Appointment",
        content: (
          <div>
            <p className="mb-8 text-md font-normal text-black md:text-md ">
              Schedule a convenient time with our expert through our easy online booking system
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/call.jpeg"
                alt="book appointment"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              
              
            </div>
          </div>
        ),
      },
      {
        title: "Personalized Guidance",
        content: (
          <div>
            <p className="mb-4 text-md font-normal text-black md:text-md ">
              Receive tailored insights, solutions, and remedies based on your unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/mentor.jpeg"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />
              
            </div>
          </div>
        ),
      },
      {
        title: "Expirience Transformation",
        content: (
          <div>
            <p className="mb-4 text-md font-normal text-black md:text-md ">
              Implement our expert advice to bring harmony, clarity, and positive energy into your life.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/guide.webp"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
              />

            </div>
          </div>
        ),
      }
    ];
    return (
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    );
  }
  const SanctityFooter: React.FC = () => {
    return (
      <div className="bg-[#f2f2f2] text-black min-h-screen">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between px-16 py-6 border-b border-gray-800">
          
          <div className="text-xl ">Hello@Antarrdriishtie</div>
        </nav>

        {/* Main Footer Content */}
        <div className="px-16 py-16">
          <div className="grid grid-cols-4 gap-16 mb-20">
            {/* Left Column - Company Info */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-light">Antarrdriishtie</span>
              </div>
              <p className="text-gray-400 mb-8">Delhi-NCR, India</p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <button className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <X size={20} />
                </button>
                <button className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                  <Linkedin size={20} />
                </button>
                
              </div>
            </div>

            {/* Company Links */}
            <div className="col-span-1">
              <h3 className="text-xl font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#aboutUs" className="text-black hover:text-gray-400 transition-colors flex items-center">
                    About us
                    <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                  </a>
                </li>
               
               
                <li>
                  <a href="mailto:devanshwalecha93@gmail.com" className="text-black hover:text-gray-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="col-span-1">
              <h3 className="text-xl font-medium mb-6">Social Media</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-black hover:text-gray-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black hover:text-gray-400 transition-colors">
                    X
                  </a>
                </li>
                
                
              </ul>
            </div>

            
          </div>

          {/* Large Sanctity Logo */}
          <div className="mt-20">
            <div className="text-8xl font-light tracking-wider">
              <span className="inline-flex items-center">
                <span className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center mr-4">
                  <span className="text-4xl">©</span>
                </span>
                <span className='font-semibold'>Antarrdriishtie</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <main className=" font-urbanist scroll-smooth ">
      <section>
        <div ><Navbar></Navbar></div>
        <div id='hero'><Hero></Hero></div>
        <div id='services'><Services services={services} autoplay={false}></Services></div>
        <div id='aboutUs'><AboutUs></AboutUs></div>
        <div id='timeline'><TimelineDemo></TimelineDemo></div>
        <div className="text-center text-[4.25rem] font-semibold mt-[1.5rem]">Don't take our Word</div>
        <div id='testimonials'><Testimonials></Testimonials></div>
        <div id='footer'><SanctityFooter></SanctityFooter></div>
        

      </section>
    </main>
  );
}
