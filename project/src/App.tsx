import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ExternalLink, Download, Mail, Palmtree as PalmTree, Code, Globe2, Palette, Zap, Target, Users, Plus } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projectHighlights = {
  leftColumn: [
    {
      icon: <Code size={24} />,
      title: "Clean Architecture",
      description: "Built with scalability in mind, using modern development practices and patterns."
    },
    {
      icon: <Globe2 size={24} />,
      title: "Global Impact",
      description: "Solutions that reach users across different cultures and regions."
    },
    {
      icon: <Palette size={24} />,
      title: "Intuitive Design",
      description: "User interfaces that feel natural and effortless to navigate."
    }
  ],
  centerImages: [
    {
      src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=600",
      alt: "Mobile app interface"
    },
    {
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=600",
      alt: "Development workspace"
    },
    {
      src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600",
      alt: "Analytics dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600",
      alt: "Code editor"
    }
  ],
  rightColumn: [
    {
      icon: <Zap size={24} />,
      title: "Performance First",
      description: "Optimized for speed and efficiency across all devices."
    },
    {
      icon: <Target size={24} />,
      title: "Goal-Oriented",
      description: "Every feature aligned with clear business objectives."
    },
    {
      icon: <Users size={24} />,
      title: "User-Centered",
      description: "Designed around real user needs and feedback."
    }
  ]
};

const skills = [
  "• Figma",
  "• Illustrator",
  "• Webflow",
  "• Photoshop",
  "• Premiere Pro",
  "• Cinema 4D",
  "• After Effects",
  "• Sketch",
  "• InDesign"
];

function ProjectHighlight({ item, inView }) {
  return (
    <div className={`highlight-item ${inView ? 'fade-in-up' : ''}`}>
      <div className="highlight-icon">
        {item.icon}
      </div>
      <h4 className="highlight-title">{item.title}</h4>
      <p className="highlight-description">{item.description}</p>
    </div>
  );
}

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [highlightsRef, highlightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ['Work.', 'Me.', 'Collaboration.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const onProjectHover = () => {
      cursor.classList.add('visible');
    };

    const onProjectLeave = () => {
      cursor.classList.remove('visible');
    };

    document.addEventListener('mousemove', onMouseMove);

    const projectImages = document.querySelectorAll('.project-image-wrapper');
    projectImages.forEach(image => {
      image.addEventListener('mouseenter', onProjectHover);
      image.addEventListener('mouseleave', onProjectLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      projectImages.forEach(image => {
        image.removeEventListener('mouseenter', onProjectHover);
        image.removeEventListener('mouseleave', onProjectLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor">
        OPEN
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="site-container d-flex align-items-center justify-content-between py-4">
          <a className="navbar-brand" href="#home">Victor Marquez</a>
          
          <div className="nav-center d-none d-lg-block">
            <ul className="navbar-nav flex-row gap-5">
              <li className="nav-item">
                <a className="nav-link" href="#work">WORK</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>

          <div className="location-wrapper d-none d-lg-flex">
            <span className="location-text">Miami, Florida</span>
            <PalmTree size={16} className="location-icon" />
          </div>
        </div>
      </nav>

      <div className="hero-wrapper">
        <section className="hero-section">
          <div className="site-container">
            <div className="hero-content">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="hero-text">
                    <p className="intro-text">I'M VICTOR MARQUEZ, A</p>
                    <h1 className="main-title">Web & App Designer | Front-End Developer</h1>
                    <div className="animated-text-container">
                      <span className="static-text">Explore more about</span>
                      <div className="word-animation-wrapper">
                        {rotatingWords.map((word, index) => (
                          <span
                            key={word}
                            className={`animated-word ${index === currentWordIndex ? 'active' : ''}`}
                          >
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="hero-visual">
                    <div className="profile-wrapper">
                      <div className="profile-image-container">
                        <img 
                          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80" 
                          alt="Profile" 
                          className="profile-image"
                        />
                      </div>
                      <div className="profile-shape"></div>
                      <div className="profile-dots">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="dot" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="scroll-indicator">
                <span className="scroll-text">Scroll to Discover</span>
                <ArrowDown size={24} />
              </div>
              <div className="availability-badge">
                <span className="badge-dot"></span>
                Available to Work
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="content-wrapper">
        <section id="work" className="project-highlights-section" ref={highlightsRef}>
          <div className="site-container">
            <h2 className="projects-heading">
              <em>Work</em>
            </h2>
            <div className="highlights-wrapper">
              <div className="highlights-column left">
                {projectHighlights.leftColumn.map((item, index) => (
                  <ProjectHighlight 
                    key={index} 
                    item={item} 
                    inView={highlightsInView}
                  />
                ))}
              </div>
              
              <div className="highlights-image-grid">
                {projectHighlights.centerImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`grid-image ${highlightsInView ? 'fade-in' : ''}`}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
                <a 
                  href="mailto:victor@example.com"
                  className={`grid-image your-project ${highlightsInView ? 'fade-in' : ''}`}
                >
                  <div className="your-project-content">
                    <h3>Your Project</h3>
                    <Plus size={32} />
                  </div>
                </a>
              </div>
              
              <div className="highlights-column right">
                {projectHighlights.rightColumn.map((item, index) => (
                  <ProjectHighlight 
                    key={index} 
                    item={item} 
                    inView={highlightsInView}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="site-container">
            <h2 className="projects-heading">
              <em>About</em>
            </h2>
            <div className="about-content">
              <p className="about-text">
                I am a Senior Creative & Digital Producer and also a Judge at CSS Design Awards. Having 7 years' 
                experience of working with international level brands, I've produced several award-winning projects, 
                which I'm really proud of. I'm always highly involved in product development work.
              </p>
              <p className="about-text">
                I have technical background, and it helps me to get into details and work on large complicated projects.
              </p>
            </div>
          </div>
        </section>

        <div className="skills-ticker-wrapper">
          <div className="skills-ticker" ref={tickerRef}>
            <div className="ticker-content">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <span key={index} className="ticker-item">
                  {skill}
                </span>
              ))}
            </div>
            <div className="ticker-content" aria-hidden="true">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <span key={`clone-${index}`} className="ticker-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section id="contact" className="contact-section">
          <div className="site-container">
            <h2 className="projects-heading">
              <em>Contact</em>
            </h2>
            <div className="contact-content">
              <h2 className="contact-title">Let's create something together.</h2>
              <p className="contact-description">
                I'm currently open to new projects, collaborations, or just a chat.
              </p>

              <div className="contact-links">
                <div className="contact-links-row">
                  <a href="mailto:victor@example.com" className="contact-link">
                    <Mail size={24} />
                    <span>victor@example.com</span>
                  </a>
                  
                  <a href="/resume.pdf" download className="contact-link">
                    <Download size={24} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;