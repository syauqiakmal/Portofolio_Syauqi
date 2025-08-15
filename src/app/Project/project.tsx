import React, { useState, useEffect, useMemo } from 'react';
// import { ChevronDown, ChevronUp, ExternalLink, Github, Eye, Calendar, Code, Star } from 'lucide-react';
import styles from "./project.module.css";
import Image from 'next/image';

// Type definitions
interface ProjectDetails {
  description: string;
  features: string[];
  challenges: string;
  outcome: string;
}

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  images: string[]; // Changed from image to images array
  image: string;
  tech: string[];
  status: 'Completed' | 'In Progress' | 'Planning';
  date: string;
  github: string;
  demo: string;
  details: ProjectDetails;
}

const ProjectsPortfolio: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});


  // Data project dummy - bisa diganti dengan data real
  const projects = useMemo<Project[]>(() => [
  {
    id: 1,
    title: " Internship Frontend Developer Project in Bina Nusantara Grup: Petahilirisasi.id",
    shortDesc: "Geodashboard: Land Cover Change Detection Based-On Landsat For Downstreaming Nickel, Bauxite And Silica Sand Areas ",
    images: [ "/petahilirisasilanding.png", "/petahilirisasi.png", "/petahilirisasi_Arcitecture.png"],
    image: "",
    tech: ["React.js", "PostGIS", "Python", "Docker",  "FastAPI", "Landsat(.tiff) Data", "Leaflet"],
    status: "Completed",
    date: "2024-11-17",
    github: "https://github.com/syauqiakmal/petahilirisasi",
    demo: "https://petahilirisasi.id/",
    details: {
      description: "Petahilirisasi.id adalah platform berbasis teknologi geospasial yang mendukung proses hilirisasi sumber daya alam (nikel, bauksit, pasir silika) di Indonesia.",
      features: [
        "Interactive Map Visualization (Leaflet)",
        "Geospatial Data Integration with PostGIS",
        "Landing Page with React.js",
        "Data Management via FastAPI"
      ],
      challenges: "Menangani multi-layer rendering data geospasial secara real-time dan optimisasi performa visualisasi.",
      outcome: "Berhasil meningkatkan aksesibilitas data bagi pembuat kebijakan dan pemangku kepentingan."
    }
  },
  {
    id: 2,
    title: "Virtual Humans Framework with Emotions Model (Indonesian Folklore Storyteller)",
    shortDesc: "AI-driven storytelling app with emotion modeling",
    images: [
        "/Chatbootapp.png",
        "/Chatbootapp2.png",
        "/Chatbootapp3.png",
      ],
          image: "",
    tech: ["React Native", "Expo", "OpenAI API"],
    status: "Completed",
    date: "2024-10-17",
    github: "https://github.com/syauqiakmal/Chatgpt-Clone-with-history-of-indonesia",
    demo: "",
    details: {
      description: "Framework virtual human berbasis ChatGPT yang menjadi pendongeng folklore Indonesia dengan model emosi untuk meningkatkan pengalaman bercerita.",
      features: [
        "Emotion-driven Responses",
        "Cross-platform Mobile App (Android & iOS)",
        "Secure Environment Variable Management",
        "Dynamic AI Storytelling"
      ],
      challenges: "Mengintegrasikan emosi AI ke dalam storytelling dan menjaga performa aplikasi mobile.",
      outcome: "Aplikasi berhasil berjalan di Android & iOS dengan narasi yang interaktif dan dinamis."
    }
  },
  {
    id: 3,
    title: " Internship Frontend Developer Project in Bina Nusantara Grup: GeoBee Dashboard",
    shortDesc: "An Intelligent Geospatial Platform for Enhancing Waste Management in Tangerang City ",
    images: [ "/Geobee_about.png","/Geobee.png","/3DGeobee.png", "/Geobee_Layer.jpg"],
        image: "",
    tech: ["React.js", "PostGIS",  "Python", "FastAPI", "Docker", "Clustering", "Machine Learning", "Shapfile Data", "Leaflet"],
    status: "Completed",
    date: "2024-02-18",
    github: "https://github.com/syauqiakmal/Geobee_Dashboard",
    demo: "https://geobee.id/",
    details: {
      description: " In this study, we created an Intelligent Geospatial Platform called GeoBeeDashboard. The GeoBeeDashboard combines advanced geospatial technologies and artificial intelligence (AI), allowing real-time data visualization and optimized decision-making across multiple sectors. The system architecture consists of a React.js-based front end, a FastAPI-driven back end, and PostGIS for geospatial data management. One of the GeoBeeDashboard's primary use cases is addressing waste management issues in Tangerang City, Indonesia. As rapid urbanization increases waste generation, effective management becomes critical. The dashboard identifies critical trends and inefficiencies in Tangerang's districts by clustering waste management data from 2020 to 2023. Our findings identify distinct clusters, highlighting areas with effective waste management and those that require targeted interventions. The GeoBeeDashboard improves local government capabilities by providing a scalable model for other cities facing similar urban challenges. ",
        features: [
        
        "Utilitarian and Modern Design:<br/>",
        "The user interface is designed with a balance of functionality and modern aesthetics, following current design principles.<br/> <br/>",

        "Layer Selection and Control:<br/>",
        "Users can select various base maps and analytical layers from the left panel. It also supports dataset uploads in formats like Shapefile and GeoJSON.<br/> <br/>",

        "Interactive Data Visualization:<br/>",
        "The central map displays selected layers and allows users to click on districts to view detailed information such as district code, recycling statistics, waste data, and clustering results.<br/> <br/>",

        "Dynamic Data Filtering and Analysis Tools:<br/>",
        "The right panel includes tools to filter and analyze data based on user-selected attributes. The map's color legend updates dynamically to reflect the current filter.<br/> <br/>",

        "Data Table for Detailed Comparison:<br/>",
        "A tabular view below the analysis tools displays raw data that matches the current filters, enabling side-by-side comparison between visual and numerical data.<br/> <br/>",

        "Additional Functional UI Elements:<br/>",
        "The dashboard includes zoom controls, a print/export button for the map, and a coordinate display showing the cursor’s current latitude and longitude.<br/> <br/>"
        ],

      challenges: "Optimisasi rendering data besar dan kompatibilitas Shapefile dari berbagai sumber.",
      outcome: "Dipublikasikan pada IEEE Conference sebagai GeoBeeDashboard: An Intelligent Geospatial Platform for Enhancing Waste Management in Tangerang City."
    }
  },
  {
    id: 4,
    title: "Furniture Shop Website",
    shortDesc: "Responsive e-commerce furniture store",
    images: ["/Furniture_shop.png", "/Furniture_shop2.png"],
    image: "",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    date: "2024-01-10",
    github: "https://github.com/syauqiakmal/furniture-shop",
    demo: "",
    details: {
      description: "Website toko furnitur interaktif dengan desain responsif dan UI yang user-friendly.",
      features: [
        "Responsive UI (Flexbox & Grid)",
        "Interactive Product Pages",
        "Cross-device Compatibility"
      ],
      challenges: "Membuat desain responsif yang optimal di berbagai perangkat.",
      outcome: "Website berhasil memberikan pengalaman belanja yang lebih baik."
    }
  },
  {
    id: 5,
    title: "Instagram Clone Microservice",
    shortDesc: "Instagram clone built with Golang microservices",
    images: [],
    image: "",
    tech: ["Golang", "Docker", "PostgreSQL", "Redis", "RabbitMQ"],
    status: "Completed",
    date: "2025-03-01",
    github: "https://github.com/syauqiakmal/instagram-microservice", // ganti jika sudah ada repo
    demo: "",
    details: {
      description: "Instagram Microservice built with Golang using Docker, PostgreSQL, Redis, and RabbitMQ. Features include user authentication, posts, comments, likes, and media handling. Optimized with Redis caching and RabbitMQ for async tasks.",
      features: [
        "User Authentication & Authorization",
        "Posts, Comments, Likes Management",
        "Media Upload & Storage",
        "Redis Caching for Performance",
        "RabbitMQ for Async Processing"
      ],
      challenges: "Mengimplementasikan arsitektur microservices dengan asynchronous task handling sambil menjaga skalabilitas dan performa.",
      outcome: "Berhasil membangun platform dengan performa cepat, skalabel, dan mudah di-maintain."
    }
  }
  ], []); // ✅ kosong = cuma dibuat sekali

  // Initialize image indices
  useEffect(() => {
    const initialIndices: { [key: number]: number } = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCurrentImageIndex(initialIndices);
  }, [projects]); // ✅ sekarang aman

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const newIndices = { ...prev };
        projects.forEach(project => {
          if (project.images.length > 1) {
            newIndices[project.id] = (prev[project.id] + 1) % project.images.length;
          }
        });
        return newIndices;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [projects]);

  // Animation untuk counter
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      const interval = setInterval(() => {
        setProjectCount(prev => {
          if (prev < projects.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 150);
    }, 500);

    return () => clearTimeout(timer);
  }, [projects.length]);

  const toggleProject = (projectId: number): void => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const loadMoreProjects = (): void => {
    setVisibleProjects(prev => Math.min(prev + 3, projects.length));
  };

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

 return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.headerTitleWrapper}>
            <h1 className={styles.headerTitle}>My Projects</h1>
            <div className={styles.pulseCircle}></div>
            <div className={styles.bounceCircle}></div>
          </div>

          {/* Project Counter */}
          <div className={styles.counterWrapper}>
            <div className={styles.counterBox}>
              <div className={styles.counterContent}>
                <div className={styles.counterNumber}>
                  {isLoading ? (
                    <div className={styles.spinner}></div>
                  ) : (
                    <span className={styles.counterGradient}>
                      {projectCount.toString().padStart(2, "0")}
                    </span>
                  )}
                </div>
                <div className={styles.counterText}>
                  <p>Total</p>
                  <p>Projects</p>
                </div>
              </div>
              <div className={styles.progressBarWrapper}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${(projectCount / projects.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {expandedProject && (
          <div className={styles.detailsWrapper}>
            {(() => {
              const selectedProject = projects.find(
                (p) => p.id === expandedProject
              );
              if (!selectedProject) return null;

              return (
                <div className={styles.detailsCard}>
                  {/* Header Section */}
                  <div className={styles.detailsHeader}>
                    <div className={styles.detailsHeaderContent}>
                      <div className={styles.detailsHeaderLeft}>
                         <div className={styles.carouselWrapper}
                          onMouseDown={(e) => {
                            e.currentTarget.dataset.dragging = "true";
                            e.currentTarget.dataset.startX = String(e.clientX); // simpan sebagai string
                          }}
                          onMouseMove={(e) => {
                            if (e.currentTarget.dataset.dragging === "true") {
                              const startX = parseFloat(e.currentTarget.dataset.startX ?? "0");
                              const diff = e.clientX - startX;
                              const track = e.currentTarget.querySelector<HTMLElement>(`.${styles.carouselTrack}`);
                              if (track) {
                                track.style.transform =
                                  `translateX(calc(-${(currentImageIndex[selectedProject.id] || 0) * 100}% + ${diff}px))`;
                              }
                            }
                          }}
                          onMouseUp={(e) => {
                            if (e.currentTarget.dataset.dragging === "true") {
                              e.currentTarget.dataset.dragging = "false";
                              const startX = parseFloat(e.currentTarget.dataset.startX ?? "0");
                              const diff = e.clientX - startX;
                              const track = e.currentTarget.querySelector<HTMLElement>(`.${styles.carouselTrack}`);
                            
                              if (diff > 50) {
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [selectedProject.id]:
                                    (currentImageIndex[selectedProject.id] || 0) === 0
                                      ? selectedProject.images.length - 1
                                      : (currentImageIndex[selectedProject.id] || 0) - 1,
                                }));
                              } else if (diff < -50) {
                                setCurrentImageIndex((prev) => ({
                                  ...prev,
                                  [selectedProject.id]:
                                    (currentImageIndex[selectedProject.id] || 0) === selectedProject.images.length - 1
                                      ? 0
                                      : (currentImageIndex[selectedProject.id] || 0) + 1,
                                }));
                              } else if (track) {
                                track.style.transform =
                                  `translateX(-${(currentImageIndex[selectedProject.id] || 0) * 100}%)`;
                              }
                            }
                          }}
                        >
                        
                          <div
                            className={styles.carouselTrack}
                            style={{ transform: `translateX(-${(currentImageIndex[selectedProject.id] || 0) * 100}%)` }}
                          >
                           {selectedProject.images?.length > 0 ? (
                            selectedProject.images.map((image, index) => (
                              <div key={index} className={styles.carouselImageWrapper}>
                                <Image
                                  src={image}
                                  alt={`${selectedProject.title} ${index + 1}`}
                                  fill
                                  className={styles.carouselImage}
                                />
                              </div>
                            ))
                          ) : (
                            <div className={styles.carouselImageWrapper}>
                              <Image
                                src="/placeholder.png"
                                alt="No image available"
                                fill
                                className={styles.carouselImage}
                              />
                            </div>
                          )}

                          </div>
                          
                          {/* Tombol navigasi */}
                          <button
                            className={`${styles.carouselButton} ${styles.left}`}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [selectedProject.id]:
                                  (currentImageIndex[selectedProject.id] || 0) === 0
                                    ? selectedProject.images.length - 1
                                    : (currentImageIndex[selectedProject.id] || 0) - 1,
                              }))
                            }
                          >
                            ❮
                          </button>
                          <button
                            className={`${styles.carouselButton} ${styles.right}`}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [selectedProject.id]:
                                  (currentImageIndex[selectedProject.id] || 0) === selectedProject.images.length - 1
                                    ? 0
                                    : (currentImageIndex[selectedProject.id] || 0) + 1,
                              }))
                            }
                          >
                            ❯
                          </button>
                          
                          {/* Dots indikator */}
                          <div className={styles.carouselDots}>
                            {selectedProject.images.map((_, index) => (
                              <div
                                key={index}
                                className={`${styles.carouselDot} ${
                                  index === (currentImageIndex[selectedProject.id] || 0)
                                    ? styles.active
                                    : ""
                                }`}
                                onClick={() =>
                                  setCurrentImageIndex((prev) => ({
                                    ...prev,
                                    [selectedProject.id]: index,
                                  }))
                                }
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h2 className={styles.detailsTitle}>
                            {selectedProject.title}
                          </h2>
                          <p className={styles.detailsSubtitle}>
                            {selectedProject.shortDesc}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedProject(null)}
                        className={styles.closeButton}
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className={styles.detailsContent}>
                    <div className={styles.detailsSection}>
                      <h4>Description</h4>
                      <p>{selectedProject.details.description}</p>
                    </div>
                      <div className={styles.detailsSection}>
                        <h4>Key Features</h4>
                        <ul>
                          {selectedProject.details.features.map((feature, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: feature }} />
                          ))}
                        </ul>
                      </div>
                    <div className={styles.detailsSection}>
                      <h4>Tech Stack</h4>
                      <div className={styles.techList}>
                        {selectedProject.tech.map((tech, idx) => (
                          <span key={idx} className={styles.techBadge}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.detailsSection}>
                      <h4>Challenges</h4>
                      <p>{selectedProject.details.challenges}</p>
                    </div>
                    <div className={styles.detailsSection}>
                      <h4>Outcome</h4>
                      <p>{selectedProject.details.outcome}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      {/* Projects Grid */}
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className={styles.card}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Image */}
              <div className={styles.cardImageWrapper}>
                {project.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`${project.title} ${imgIndex + 1}`}
                    fill // ganti width/height jadi full container
                    className={`${styles.slideshowImage} ${
                      imgIndex === (currentImageIndex[project.id] || 0) 
                        ? 'opacity-100' 
                        : 'opacity-0'
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw" // biar responsif
                    priority={imgIndex === 0} // gambar pertama diprioritaskan
                  />
                ))}
                <div className={styles.cardImageOverlay}></div>

                {/* Status Badge */}
                <div className={styles.statusWrapper}>
                  <div className={`${styles.statusBadge} ${getStatusColor(project.status)}`}>
                    <div className={styles.statusDot}></div>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className={styles.techStackWrapper}>
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <div className={styles.cardDate}>
                    {project.date}
                  </div>
                </div>

                <p className={styles.cardDescription}>{project.shortDesc}</p>

                {/* Action Buttons */}
                <div className={styles.cardActions}>
                  <div className={styles.actionButtons}>
                    <a href={project.github} className={styles.iconButton}>
                      Code
                    </a>
                    {project.demo && project.demo.trim() !== "" && (
                      <a href={project.demo} className={styles.iconButton}>
                        Demo
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => toggleProject(project.id)}
                    className={styles.detailsButton}
                  >
                    <span>Details</span>
                    {expandedProject === project.id ? "▲" : "▼"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {visibleProjects < projects.length && (
          <div className={styles.loadMoreWrapper}>
            <button
              onClick={loadMoreProjects}
              className={styles.loadMoreButton}
            >
              Load More Projects ↓
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsPortfolio;