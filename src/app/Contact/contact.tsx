import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import styles from './contact.module.css';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [ropeLength, setRopeLength] = useState(200);
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [emailError, setEmailError] = useState("");
  const [errors, setErrors] = useState({
  name: "",
  email: "",
  message: ""
});


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - 100;

        const maxX = 150;
        const maxY = 200;
        const limitedX = Math.max(-maxX, Math.min(maxX, x));
        const limitedY = Math.max(-50, Math.min(maxY, y));

        setCardPosition({ x: limitedX, y: limitedY });

        const distance = Math.sqrt(limitedX * limitedX + limitedY * limitedY);
        setRopeLength(200 + distance * 0.5);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setCardPosition({ x: 0, y: 0 });
        setRopeLength(200);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });

  if (name === "email") {
    // Regex sederhana untuk cek format email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setEmailError("Format email tidak valid (harus ada @ dan domain)");
    } else {
      setEmailError("");
    }
  }
};


const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();


  let newErrors = { name: "", email: "", message: "" };
  let isValid = true;

  // Validasi Nama
  if (!formData.name.trim()) {
    newErrors.name = "Nama wajib diisi";
    isValid = false;
  }

  // Validasi Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email.trim()) {
    newErrors.email = "Email wajib diisi";
    isValid = false;
  } else if (!emailPattern.test(formData.email)) {
    newErrors.email = "Format email tidak valid (harus ada @ dan domain)";
    isValid = false;
  }

  // Validasi Pesan
  if (!formData.message.trim()) {
    newErrors.message = "Pesan tidak boleh kosong";
    isValid = false;
  }

  setErrors(newErrors);

  if (!isValid) return; // Stop submit kalau error

  setIsSubmitting(true);

  emailjs
    .send(
        "service_eh2lmed",   // Ganti dengan Service ID dari EmailJS
        "template_qgdnaek",
      {
        name: formData.name,      // harus sama dengan {{name}} di template
        email: formData.email,    // harus sama dengan {{email}} di template
        message: formData.message // harus sama dengan {{message}} di template
      },
        "8EP4fAZSexKjUMg6a"    // Public Key dari EmailJS
    )
    .then(
      () => {
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        alert("Gagal mengirim pesan. Coba lagi.");
        console.error(error);
        setIsSubmitting(false);
      }
    );
};


  const handleCardMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactGrid}>
        
        {/* Contact Form */}
        <div className={styles.formSection}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>
              Get In <span className={styles.titleGradient}>Touch</span>
            </h2>
            <p className={styles.formSubtitle}>
              Mari berkolaborasi dan wujudkan ide kreatif Anda bersama saya
            </p>
          </div>

          <div className={styles.formFields}>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} />
              <input
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={styles.inputField}
              />  {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>

            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.inputField}
                
              /> {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </div>

            <div className={styles.inputWrapper}>
              <MessageSquare className={styles.inputIcon} />
              <textarea
                name="message"
                placeholder="Pesan Anda..."
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className={styles.textArea}
              />  {errors.message && <p className={styles.errorText}>{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.loadingSpinner}></div>
                  Mengirim...
                </>
              ) : (
                <>
                  <Send className={styles.sendIcon} />
                  Kirim Pesan
                </>
              )}
            </button>
          </div>
        </div>

        {/* Animated Card */}
        <div ref={containerRef} className={styles.cardContainer}>
          <svg
            className={styles.rope}
            width="300"
            height={ropeLength + 100}
          >
            <path
              d={`M 150 0 Q ${150 + cardPosition.x * 0.3} ${ropeLength * 0.4} ${150 + cardPosition.x} ${ropeLength * 0.8}`}
              className={styles.ropeMain}
            />
            <path
              d={`M 150 0 Q ${150 + cardPosition.x * 0.3} ${ropeLength * 0.4} ${150 + cardPosition.x} ${ropeLength * 0.8}`}
              className={styles.ropeDash}
            />
          </svg>

            <div
              ref={cardRef}
              onMouseDown={handleCardMouseDown}
              className={`${styles.businessCard} ${isDragging ? styles.dragging : ''}`}
              style={{
                transform: `translate(${cardPosition.x}px, ${cardPosition.y}px) rotateX(${cardPosition.y * 0.1}deg) rotateY(${cardPosition.x * 0.1}deg)`,
                transition: isDragging ? 'none' : 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.cardPattern}></div>
          
                {/* Foto profil bulat di tengah */}
                <div className={styles.profileContainer}>
                  <img 
                    src="/foto2.png" /* ganti dengan foto profil kamu */
                    alt="Profile Syauqi"
                    className={styles.profileImage}
                  />
                </div>
          
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={styles.cardName}>Syauqi</h3>
                    <p className={styles.cardRole}>
                      LinkedIn: <a href="https://www.linkedin.com/in/syauqi-akmal-deffansyah-9833261b7/" target="_blank" rel="noopener noreferrer">linkedin.com/in/syauqi-akmal-deffansyah</a>
                    </p>
                    <p className={styles.cardRole}>
                      Github: <a href="https://github.com/syauqiakmal" target="_blank" rel="noopener noreferrer">github.com/syauqiakmal</a>
                    </p>
                  </div>
                  <div>
                    <p className={styles.cardRole}>WhatsApp: 081384852270</p>
                    <p className={styles.cardEmail}>Email: syauqi171715@gmail.com</p>
                    <p className={styles.cardTagline}>Portfolio & Creative Solutions</p>
                  </div>
                </div>
          
                <div className={styles.cardShine}></div>
              </div>
            </div>


          <div className={styles.particles}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.particle} style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 2) * 40}%`, animationDelay: `${i * 0.2}s`, animationDuration: `${3 + i * 0.5}s` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
