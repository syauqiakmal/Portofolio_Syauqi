"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from "./Header.module.css";

// interface HeaderProps {
//   scrollToSection: (section: string) => void; // 🔹 fungsi dari parent
// }

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuWrapperRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Tutup menu jika klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navInner}  ref={menuWrapperRef}>
          {/* Logo */}
          <div>
            <Link href="/" className={styles.logo}>
              Portofolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          {/* <div className={styles.desktopNav}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <button onClick={() => scrollToSection("about")} className={styles.navLink}>About</button>
              <button onClick={() => scrollToSection("projects")} className={styles.navLink}>Projects</button>
              <button onClick={() => scrollToSection("skills")} className={styles.navLink}>Skills</button>
              <button onClick={() => scrollToSection("contact")} className={styles.navLink}>Contact</button>
            </div>
          </div> */}

          {/* CTA */}
          <div className={styles.desktopNav}>
            <Link href="#contact" className={styles.ctaButton}>
              <svg className="inline h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download CV
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={styles.mobileMenuBtn}>
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            {/* <button onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }} className={styles.mobileNavLink}>About</button>
            <button onClick={() => { scrollToSection("projects"); setIsMenuOpen(false); }} className={styles.mobileNavLink}>Projects</button>
            <button onClick={() => { scrollToSection("skills"); setIsMenuOpen(false); }} className={styles.mobileNavLink}>Skills</button>
            <button onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }} className={styles.mobileNavLink}>Contact</button> */}
            <Link href="#contact" className={styles.mobileCTA} onClick={() => setIsMenuOpen(false)}>
              <svg className="inline h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download CV
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;