"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import About from "../AboutMe/about";
import Header from "../Hader/header";
import ProjectsPortfolio from "../Project/project";
import Skills from "../Skills/skills";
import Contact from "../Contact/contact";

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState(""); // kosong default

 const aboutRef = useRef<HTMLDivElement>(null); // 🔹 Ref untuk scroll
  const projectRef = useRef<HTMLDivElement>(null); // 🔹 Ref untuk scroll
  const skillsRef = useRef<HTMLDivElement>(null); // 🔹 Ref untuk scroll
  const contactRef = useRef<HTMLDivElement>(null); // 🔹 Ref untuk scroll

  const slides = [
  {
    id: "intro",
    text: <>Hello!! <br /> I’m Syauqi Akmal Deffansyah... <br /> Let’s explore my portfolio !!</>,
    video: "/bedroom.mp4",
    buttons: ["Prev", "Next"],
  },
  {
    id: "about",
    text: <>How about  we get to <br />know each other first... <br /> click About to start...</>,
    video: "/about.mp4",
    buttons: ["Prev", "About", "Next"],
  },
  {
    id: "project",
    text: <>I’ve built several websites...<br /> if you’re interested <br /> in checking them out<br />  click Project!</>,
    video: "/project.mp4",
    buttons: ["Prev", "Project", "Next"],
  },
  {
    id: "skills",
    text: <>I also have some <br /> programming language skills... <br /> want to see more details?</>,
    video: "/about.mp4",
    buttons: ["Prev", "Skills", "Next"],
  },
  {
    id: "contact",
    text: <>If you’d like to chat more...<br /> click Contact!</>,
    video: "/bedroom.mp4",
    buttons: ["Prev", "Contact", "Next"],
  },
];


    // 🔹 Transisi awal saat refresh
  useEffect(() => {
    setTimeout(() => setIsFading(false), 800); // fade keluar setelah 0.8 detik
  }, []);

  const changeSlide = (newIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setSlideIndex(newIndex);
      setTimeout(() => setIsFading(false), 500); // fade out black
    }, 500); // fade in black
  };

const nextSlide = () => {
  changeSlide((slideIndex + 1) % slides.length);
  setCurrentSection(""); // reset section saat pindah slide
};

const prevSlide = () => {
  changeSlide((slideIndex - 1 + slides.length) % slides.length);
  setCurrentSection(""); // reset section saat pindah slide
};
  const goToSlide = (id: string) => {
    const targetIndex = slides.findIndex((slide) => slide.id === id);
    setCurrentSection(id);
    if (targetIndex !== -1) changeSlide(targetIndex);
    setTimeout(() => {
      if (id=== "about" && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (id=== "project" && projectRef.current) {
        projectRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (id=== "skills" && skillsRef.current) {
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
      }
      if (id=== "contact" && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay kecil supaya render dulu
    
  };


const scrollToSection = (section: string) => {
  if (section === "about" && aboutRef.current) aboutRef.current.scrollIntoView({ behavior: "smooth" });
  if (section === "projects" && projectRef.current) projectRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "skills" && skillsRef.current) skillsRef.current.scrollIntoView({ behavior: "smooth" });
  if (section === "contact" && contactRef.current) contactRef.current.scrollIntoView({ behavior: "smooth" });
};

  return (
    <>
    <Header scrollToSection={scrollToSection} />
    <div className={styles.background}>

      <video
        key={slides[slideIndex].video}
        autoPlay
        muted
        loop
        playsInline
        className={styles.videoSlide}
      >
        <source src={slides[slideIndex].video} type="video/mp4" />
      </video>

      <div className={`${styles.fadeOverlay} ${isFading ? styles.fadeIn : styles.fadeOut}`}></div>

      <div className={styles.contine}><div className={styles.relative}>
            <Image
              src="/foto4.png"
              alt="Image 1"
              width={3000}
              height={1}
              className={`${styles.image1} transition-all duration-300`}
              style={{
                zIndex: isHovered ? 10 : 1,
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            /></div>
        <div className={styles.frameBox}>
       <div className={styles.imageRowContainer}>

  <div className={`${styles.cornerDecor} ${styles.topLeft}`}></div>
  <div className={`${styles.cornerDecor} ${styles.topRight}`}></div>
  <div className={`${styles.cornerDecor} ${styles.bottomLeft}`}></div>
  <div className={`${styles.cornerDecor} ${styles.bottomRight}`}></div>
  
\

  <div className={`${styles.sideAccent} ${styles.top}`}></div>
  <div className={`${styles.sideAccent} ${styles.bottom}`}></div>
  

  <div className={styles.particle}></div>
  <div className={styles.particle}></div>
  <div className={styles.particle}></div>
  <div className={styles.particle}></div>


  <div key={slideIndex} className={styles.overlayText}>
    {slides[slideIndex].text}
  </div>
  </div>
  
  <div className={styles.buttonGroup}>
    {slides[slideIndex].buttons.includes("Prev") && (
      <button className={styles.nextBtn} onClick={prevSlide}>
        Prev
      </button>
    )}
    {slides[slideIndex].buttons.includes("About") && (
      <button
        className={styles.nextBtn}
        onClick={() => goToSlide("about")}
      >
        About
      </button>
    )}
    {slides[slideIndex].buttons.includes("Project") && (
      <button
        className={styles.nextBtn}
        onClick={() => goToSlide("project")}
      >
        Project
      </button>
    )}
    {slides[slideIndex].buttons.includes("Skills") && (
      <button
        className={styles.nextBtn}
        onClick={() => goToSlide("skills")}
      >
        Skills
      </button>
    )}
    {slides[slideIndex].buttons.includes("Contact") && (
      <button
        className={styles.nextBtn}
        onClick={() => goToSlide("contact")}
      >
        Contact
      </button>
    )}
    {slides[slideIndex].buttons.includes("Next") && (
      <button className={styles.nextBtn} onClick={nextSlide}>
        Next
      </button>
    )}
  </div>

          </div>
        </div>
      </div>

      {/* 🔹 Section terpisah di bawah slider */}
      <div ref={aboutRef} className={styles.sectionContainer}>   
        {currentSection === "about" && <About />}
      </div>

            {/* 🔹 Section terpisah di bawah slider */}
      <div ref={projectRef} className={styles.sectionContainer}>   
        {currentSection === "project" && <ProjectsPortfolio />}
      </div>

      <div ref={skillsRef} className={styles.sectionContainer}>   
        {currentSection === "skills" && <Skills />}
      </div>

      <div ref={contactRef} className={styles.sectionContainer}>   
        {currentSection === "contact" && <Contact />}
      </div>
    </>

  );
};

export default Home;
