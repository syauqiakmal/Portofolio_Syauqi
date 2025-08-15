import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, CheckCircle, Eye } from 'lucide-react';
import styles from './skills.module.css';

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let scrollY = 0;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const velocity = currentScrollY - scrollY;
          const skewValue = Math.max(-20, Math.min(20, velocity * -0.02));

          skillsRef.current.forEach(skill => {
            if (skill) {
              skill.style.transform = `skewY(${skewValue}deg) perspective(1000px)`;
            }
          });

          scrollY = currentScrollY;
          isScrolling = false;

          setTimeout(() => {
            if (Math.abs(velocity) < 1) {
              skillsRef.current.forEach(skill => {
                if (skill) {
                  skill.style.transform = 'skewY(0deg) perspective(1000px)';
                }
              });
            }
          }, 100);
        });
        isScrolling = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const skills = [
  { id: 1, name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 95, description: 'ES6+, TypeScript, Node.js' },
  { id: 2, name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 90, description: 'Hooks, Context, Redux' },
  { id: 3, name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', level: 85, description: 'SSR, SSG, API Routes' },
  { id: 4, name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 80, description: 'Mobile Development, Expo' },
  { id: 5, name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 85, description: 'Django, Flask, FastAPI' },
  { id: 6, name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 88, description: 'Express, MongoDB, APIs' },
  { id: 7, name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 82, description: 'Type Safety, Interfaces' },
  { id: 8, name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, description: 'Semantic HTML, Accessibility' },
  { id: 9, name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 90, description: 'Flexbox, Grid, Animations' },
  { id: 10, name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', level: 70, description: 'Composition API, Vuex' },
  { id: 11, name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', level: 75, description: 'MVC, Blade, API Development' },
  { id: 12, name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 80, description: 'Containerization, K8s' },
  { id: 13, name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 70, description: 'NoSQL, Aggregation' },
  { id: 14, name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 90, description: 'SQL, JSONB, PostGIS' },
  { id: 15, name: 'Golang', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', level: 90, description: 'API Development, Concurrency' }
];

const certificates = [
  { 
    id: 1, 
    title: 'Author & Presenter of Paper at International Conference on Data Science and Its Application (ICoDSA)', 
    issuer: 'Jakarta', 
    date: '2024', 
    status: 'Completed', 
    color: '#FF9500', 
    link: 'https://drive.google.com/file/d/1eoydk7oQwbh5ewMr8Ge_34sKtLhDvPOt/view', 
    credlyId: 'ICoDSA-2024',
    description: 'Presented research paper at ICoDSA focusing on data science applications.'
  },
  { 
    id: 2, 
    title: 'Member in Frontend Certificate', 
    issuer: 'Bina Nusantara Computer Club - Jakarta', 
    date: '2022', 
    status: 'Completed', 
    color: '#61DAFB', 
    link: 'https://drive.google.com/file/d/1uI0nTw14mAnqISsnndK1nhwog_PpHrrV/view', 
    credlyId: 'BNCC-FE',
    description: `• Built and structured web applications using HTML, CSS, and JavaScript.
• Developed responsive user interfaces with CSS Flexbox, Grid, and media queries.
• Implemented dynamic functionality using JavaScript for DOM manipulation and API integration.
• Integrated Firebase services for authentication, real-time database, and cloud storage.
• Optimized performance and accessibility to enhance user experience.
• Worked collaboratively on projects using Git and version control systems.`
  }
];

  return (
    <div>
      <div className={styles.skillsWrapper} ref={wrapperRef}>
        <div className={styles.skillsContent}>
          <div className={styles.skillsText}>TECHNICAL SKILLS</div>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                ref={el => { if (el) skillsRef.current[index] = el }}
                className={styles.skillItem}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <img src={skill.logo} alt={skill.name} className={styles.skillLogo} />
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillLevel}>{skill.level}%</div>
                <div className={styles.skillProgress}>
                  <div className={styles.skillProgressBar} style={{ width: `${skill.level}%` }}></div>
                </div>
                <div className={styles.skillDescription}>{skill.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.certificatesSection}>
        <h2 className={styles.certificatesTitle}>Certifications</h2>
        <div className={styles.certificatesGrid}>
          {certificates.map(cert => (
            <a key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certificateCard}>
              <div className={styles.certificateHeader}>
                <Award size={28} style={{ color: cert.color }} />
                <div className={styles.certificateStatus}>
                  <CheckCircle size={14} /> {cert.status}
                </div>
              </div>
              <div className={styles.certificateTitle}>{cert.title}</div>
              <div className={styles.certificateIssuer}>{cert.issuer}</div>
              <div className={styles.certificateFooter}>
                <div className={styles.certificateDate}><Calendar size={12} /> {cert.date}</div>
                <div className={styles.certificateId}>{cert.credlyId}</div>
              </div>
              <div className={styles.viewButton}><Eye size={12} /> View</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
