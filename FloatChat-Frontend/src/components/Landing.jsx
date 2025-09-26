import React, { useState, useEffect, useCallback } from 'react';

// --- Configuration matching the original Tailwind/CSS setup ---
const config = {
  colors: {
    'deep-charcoal': '#2A2A2A',
    'warm-stone': '#8B7D6B',
    'copper-orange': '#B87333',
    'soft-cream': '#F8F6F3',
  },
  // Ensure Tailwind uses these colors directly where possible
};

// --- Custom Hooks and Utilities ---

// Utility for smooth scroll revealing (converted from original JS logic)
const useReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const handleScroll = () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Utility to match the original gradient text style
const GradientText = ({ children, className = '' }) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-[${config.colors['copper-orange']}] to-[${config.colors['warm-stone']}] ${className}`}
  >
    {children}
  </span>
);

// --- Icon Components (using simple inline SVG for portability, matching the original HTML) ---
const IconChat = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>
);

const IconChart = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
  </svg>
);

const IconData = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
  </svg>
);

const IconFlash = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
);

const IconUsers = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

const IconShield = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
  </svg>
);

const IconPencil = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
  </svg>
);

const IconGlobe = (props) => (
  <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

// --- Component Definitions ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home', current: true },
    { name: 'Research', href: '#research', current: false },
    { name: 'Data', href: '#data', current: false },
    { name: 'About', href: '#about', current: false },
  ];

  const NavLink = ({ name, href, current }) => (
    <a
      href={href}
      className={`relative inline-block text-sm font-medium transition-colors text-deep-charcoal
        ${current ? 'text-copper-orange' : 'hover:text-copper-orange'}
        after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-copper-orange after:transition-all
        ${current ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
      `}
      onClick={() => setIsOpen(false)}
    >
      {name}
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[${config.colors['soft-cream']}]/90 backdrop-blur-md border-b border-warm-stone/20`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 bg-gradient-to-br from-[${config.colors['copper-orange']}] to-[${config.colors['warm-stone']}] rounded-lg flex items-center justify-center shadow-lg`}>
              <span className="text-white font-bold text-sm font-mono">S</span>
            </div>
            <span className="font-display font-bold text-xl text-deep-charcoal">Samudra-I</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} {...item} />
            ))}
            <button className={`bg-[${config.colors['copper-orange']}] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-copper-orange/90`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-deep-charcoal hover:text-copper-orange transition-colors"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[${config.colors['soft-cream']}]/95 border-t border-warm-stone/20`}>
        <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col items-center">
          {navItems.map((item) => (
            <NavLink key={item.name} {...item} />
          ))}
          <button className={`w-full max-w-[200px] mt-4 bg-[${config.colors['copper-orange']}] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-copper-orange/90`}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const CardHoverStyle = () => (
    // Replicating the custom CSS hover effect precisely
    <style jsx="true">{`
        .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
            transform: translateY(-8px) rotateX(0deg); /* Keeping the translateY and removing rotateX for simplicity unless strictly required */
            box-shadow: 0 20px 40px rgba(42, 42, 42, 0.15);
        }
        .chat-bubble {
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    `}</style>
)

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <div
    className={`card-hover bg-soft-cream rounded-2xl p-8 shadow-md border border-warm-stone/10 reveal stagger-delay-${delay}`}
  >
    <CardHoverStyle />
    <div className={`w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6`}>
      <Icon />
    </div>
    <h3 className="text-xl font-display font-semibold mb-4 text-deep-charcoal">{title}</h3>
    <p className="text-warm-stone leading-relaxed">{description}</p>
  </div>
);

const ResearchPoint = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className={`w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center flex-shrink-0`}>
      <Icon className="w-6 h-6 text-copper-orange"/>
    </div>
    <div>
      <h3 className="text-xl font-display font-semibold mb-2 text-deep-charcoal">{title}</h3>
      <p className="text-warm-stone leading-relaxed">{description}</p>
    </div>
  </div>
);


// --- Main App Component ---
const Landing = () => {
  useReveal();
  const [argoProfiles, setArgoProfiles] = useState(0);

  // Counter effect
  useEffect(() => {
    let animationFrameId = null;
    let start = 0;
    const end = 124500; // Mock data from the original JS intent (0 to 124500)
    const duration = 2000;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const value = Math.min(end, Math.floor((progress / duration) * end));
      setArgoProfiles(value);

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setArgoProfiles(end);
      }
    };

    const counterElement = document.getElementById('profile-counter-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && argoProfiles === 0) { // Only run once on intersection
          animationFrameId = requestAnimationFrame(step);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.5
    });

    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (counterElement) observer.unobserve(counterElement);
    };
  }, [argoProfiles]);


  // Placeholder URL for the hero background image (replace with user's actual image if accessible)
  const HERO_BG_URL = 'https://placehold.co/1920x1080/E5E3E0/8B7D6B?text=Ocean+Data+Platform+Background';
  // Placeholder URL for the researcher image (replace with user's actual image if accessible)
  const RESEARCHER_IMG_URL = 'https://placehold.co/800x600/2A2A2A/F8F6F3?text=Researcher+Workstation';

  return (
    <div className={`min-h-screen font-display text-deep-charcoal`}>
      {/* Global Styles for fidelity */}
      <style jsx="true">{`
        /* Global Background Gradient */
        body {
            background: linear-gradient(135deg, ${config.colors['soft-cream']} 0%, #F5F3F0 100%);
            margin-top: 5rem; /* Space for fixed navbar */
        }

        /* Hero Background with Overlay (mimics original CSS) */
        .hero-bg {
            background-image: url('${HERO_BG_URL}');
            background-size: cover;
            background-position: center;
            position: relative;
            overflow: hidden;
        }

        .hero-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            /* Match the original semi-transparent overlay */
            background: linear-gradient(135deg, rgba(248, 246, 243, 0.9) 0%, rgba(245, 243, 240, 0.8) 100%);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
        }
        
        /* Data Counter Font Override */
        .data-counter div {
            font-family: 'JetBrains Mono', monospace;
        }
        
        /* Scroll Reveal Styles - Must be outside the component scope for global application */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
        }
        
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .reveal.stagger-delay-1.active { transition-delay: 0.1s; }
        .reveal.stagger-delay-2.active { transition-delay: 0.2s; }
        .reveal.stagger-delay-3.active { transition-delay: 0.3s; }
        .reveal.stagger-delay-4.active { transition-delay: 0.4s; }

        /* Ensuring Tailwind is loaded and available for configuration */
        @media (min-width: 768px) {
            .md\\:flex {
                display: flex !important;
            }
        }
      `}</style>
      <CardHoverStyle />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
        <div className="hero-content max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="reveal">
                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                  Transform Ocean Data Into
                  <GradientText className="block sm:inline-block">Instant Insights</GradientText>
                </h1>
              </div>

              <div className="reveal stagger-delay-1">
                <p className="text-xl text-warm-stone leading-relaxed">
                  **Samudra-I** is an AI-powered assistant that turns complex ocean datasets like ARGO into simple, conversational insights with instant maps, charts, and traceable sources.
                </p>
              </div>

              <div id="profile-counter-section" className="reveal stagger-delay-2 flex items-center space-x-6">
                <div className="data-counter">
                  <div className={`text-2xl font-bold text-[${config.colors['copper-orange']}]`}>{argoProfiles.toLocaleString()}</div>
                  <div className="text-sm text-warm-stone mt-1">ARGO Profiles Analyzed</div>
                </div>
              </div>

              <div className="reveal stagger-delay-3 flex flex-col sm:flex-row gap-4">
                <button className={`bg-[${config.colors['copper-orange']}] text-white px-8 py-4 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors`}>
                  Try Live Demo
                </button>
                <button className={`border-2 border-[${config.colors['warm-stone']}] text-[${config.colors['warm-stone']}] px-8 py-4 rounded-lg font-medium hover:bg-warm-stone hover:text-white transition-colors`}>
                  View Research Tools
                </button>
              </div>
            </div>

            <div className="reveal stagger-delay-4">
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-semibold text-lg">Try Samudra-I</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4 h-48 overflow-y-auto pr-2" id="chat-interface">
                  <div className="bg-gray-100 rounded-lg p-4 shadow-sm chat-bubble">
                    <p className="text-sm">"Show me temperature trends in the Pacific Ocean over the last 5 years"</p>
                  </div>

                  <div className={`bg-[${config.colors['copper-orange']}]/10 rounded-lg p-4 ml-8 border border-copper-orange/10`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-2 h-2 bg-[${config.colors['copper-orange']}] rounded-full animate-pulse`}></div>
                      <span className={`text-xs text-[${config.colors['copper-orange']}] font-mono font-medium`}>Analyzing ARGO data...</span>
                    </div>
                    <p className="text-sm text-deep-charcoal">Generating temperature trend visualization with statistical analysis...</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Ask about ocean data..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper-orange/50 transition-shadow"
                      aria-label="Chat input"
                    />
                    <button className={`bg-[${config.colors['copper-orange']}] text-white p-2 rounded-lg hover:bg-copper-orange/90 transition-colors shadow-md`} aria-label="Send message">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-display font-bold mb-6 text-deep-charcoal">Powerful Research Capabilities</h2>
            <p className="text-xl text-warm-stone max-w-3xl mx-auto">
              Built for oceanographers, data scientists, and policy makers who need instant access to evidence-based insights from complex ocean datasets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={IconChat}
              title="Conversational Analysis"
              description="Ask complex oceanographic questions in natural language and get instant visualizations with statistical analysis and source attribution."
              delay={1}
            />
            <FeatureCard
              icon={IconChart}
              title="Real-time Data Integration"
              description="Access live ARGO float data, satellite measurements, and historical oceanographic datasets with automated quality control and validation."
              delay={2}
            />
            <FeatureCard
              icon={IconData}
              title="Publication-Ready Visuals"
              description="Generate high-quality charts, maps, and visualizations with automatic source attribution, ready for academic publications and presentations."
              delay={3}
            />
            <FeatureCard
              icon={IconFlash}
              title="Rapid Analysis"
              description="Reduce analysis time from days to minutes with AI-powered data processing and pattern recognition across massive oceanographic datasets."
              delay={1}
            />
            <FeatureCard
              icon={IconUsers}
              title="Collaborative Research"
              description="Share queries, visualizations, and insights with research teams. Build collaborative knowledge bases for oceanographic studies."
              delay={2}
            />
            <FeatureCard
              icon={IconShield}
              title="Traceable Sources"
              description="Every visualization includes complete source attribution and data lineage, ensuring research reproducibility and academic integrity."
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Research Applications */}
      <section id="research" className={`py-20 bg-[${config.colors['soft-cream']}]`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl font-display font-bold mb-8 text-deep-charcoal">Trusted by Leading Researchers</h2>
              <div className="space-y-8">
                <ResearchPoint
                  icon={IconPencil}
                  title="Academic Researchers"
                  description="Oceanographers and climate scientists use Samudra-I to accelerate research, validate hypotheses, and generate publication-ready visualizations from ARGO and satellite datasets."
                />

                <ResearchPoint
                  icon={IconGlobe}
                  title="Field Scientists"
                  description="Scientists on research vessels and expeditions access real-time data validation, compare field measurements with historical trends, and generate quick reports for expedition planning."
                />

                <ResearchPoint
                  icon={IconUsers}
                  title="Policy Makers"
                  description="Government agencies and environmental organizations use evidence-based visualizations to inform climate policy, marine conservation efforts, and ocean resource management decisions."
                />
              </div>
            </div>

            <div className="reveal stagger-delay-2">
              <img
                src={RESEARCHER_IMG_URL}
                alt="Professional data scientist working with oceanographic visualizations on multiple screens in a modern research laboratory"
                className="w-full rounded-2xl shadow-2xl"
                // Fallback style for the image border/padding implied by the screenshot
                style={{ border: '4px solid white' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Showcase */}
      <section id="data" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-display font-bold mb-6 text-deep-charcoal">Real-time Ocean Data Analysis</h2>
            <p className="text-xl text-warm-stone max-w-3xl mx-auto">
              Explore live ARGO float data and historical oceanographic measurements with our interactive visualization tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 reveal stagger-delay-1">
                    <div class="bg-soft-cream rounded-2xl p-6 h-96">
                        <div id="temperature-chart" class="w-full h-full"></div>
                    </div>
                </div>

            <div className="space-y-6 reveal stagger-delay-2">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-display font-semibold mb-4 text-deep-charcoal">Global Coverage</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-stone">Active ARGO Floats</span>
                    <span className={`font-mono font-semibold text-[${config.colors['copper-orange']}]`}>3,847</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-stone">Data Points Today</span>
                    <span className={`font-mono font-semibold text-[${config.colors['copper-orange']}]`}>1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-warm-stone">Ocean Coverage</span>
                    <span className={`font-mono font-semibold text-[${config.colors['copper-orange']}]`}>92%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-display font-semibold mb-4 text-deep-charcoal">Recent Analysis</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-deep-charcoal">Pacific Warming Trend</div>
                    <div className="text-warm-stone">+0.3°C over 5 years</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-deep-charcoal">Salinity Changes</div>
                    <div className="text-warm-stone">North Atlantic anomaly</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-deep-charcoal">Current Patterns</div>
                    <div className="text-warm-stone">Gulf Stream analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gray-700 text-white`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="text-4xl font-display font-bold mb-6">
              Ready to Transform Your Ocean Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading oceanographers and research institutions using **Samudra-I** to accelerate discovery and generate evidence-based insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`bg-[${config.colors['copper-orange']}] text-white px-8 py-4 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors`}>
                Start Free Trial
              </button>
              <button className={`border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-400 hover:text-deep-charcoal transition-colors`}>
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-[${config.colors['soft-cream']}] py-12 border-t border-warm-stone/20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 bg-gradient-to-br from-[${config.colors['copper-orange']}] to-[${config.colors['warm-stone']}] rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-sm font-mono">S</span>
              </div>
              <span className="font-display font-bold text-xl text-deep-charcoal">Samudra-I</span>
            </div>

            <div className="text-sm text-warm-stone text-center md:text-right">
              &copy; 2024 Samudra-I. Empowering oceanographic research through AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
