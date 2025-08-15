"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./about.module.css";
import { useState } from "react";
import CV from "../cv/cv";

export default function About() {

const [showCV, setShowCV] = useState(false);

  const toggleCV = () => {
    setShowCV(!showCV);
  };

return (
    <div className={styles.overlayWrapper}>
      <div className={styles.overlayTest}>
      <div className={styles.overlayFrame}>
        <div className={styles.overlayContent}>
          <div className={styles.bioCard}>
            <Image
              src="/potosidang.jpg"
              alt="Avatar"
              width={150}
              height={150}
              className={styles.avatar}
            />
            <h2 className={styles.name}>Syauqi Akmal <br></br>Deffansyah</h2>
            <div className={styles.socialIcons}>
              <a href="https://github.com/syauqiakmal" target="_blank"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/syauqi-akmal-deffansyah-9833261b7/" target="_blank"><FaLinkedin /></a>
              <a href="https://www.instagram.com/syauqiakm/" target="_blank"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className={styles.socialCard}>
          <div className={styles.bioSection}>
            <h3 className={styles.sectionTitle}>
              About Me
            </h3>
            <p className={styles.bioText}>
              I am a Computer Science student at Bina Nusantara University, currently in my eighth semester. I have expertise in various programming languages, including NodeJS, NextJS, ReactJS, PostGIS, Golang, C, Python, Java, HTML, CSS, and JavaScript. I aspire to become a web developer, mobile developer, UI/UX designer, and full-stack developer, specializing in creating responsive and user-friendly applications using modern web development tools and frameworks. I am highly passionate about crafting visually appealing digital solutions and thrive in collaborative team environments.
            </p>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>University:</span>
              <span className={styles.infoValue}>Bina Nusantara University</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Major:</span>
              <span className={styles.infoValue}>Computer Science</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>GPA:</span>
              <span className={styles.infoValue}>3.50 / 4.00</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Status:</span>
              <span className={styles.infoValue}>Final Year Student</span>
            </div>
          </div>

          <div className={styles.dreamText}>
            "My dream is to become a world-class full-stack developer who creates innovative digital solutions that make a positive impact on people's lives."
          </div>

          {/* Button to toggle CV visibility */}
          <button onClick={toggleCV} className={styles.cvToggleButton}>
            {showCV ? "Hide CV" : "Preview CV"}
          </button>
        </div>
      </div>

      {/* Conditionally render CV */}
      {showCV && (
        <div className={styles.cvPreviewContainer}>
          <CV />
        </div>
      )}
      </div>
    </div>
  );
}
