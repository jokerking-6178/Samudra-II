
function App() {
  

  return (
    <>
      <div className="bg-gradient-to-br from-stone-50 to-stone-100 font-sans">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-soft-cream/90 backdrop-blur-md border-b border-warm-stone/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-copper-orange to-warm-stone rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="font-display font-bold text-xl">Samudra-I</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="index.html" className="nav-link text-sm font-medium text-copper-orange">Home</a>
                    <a href="research.html" className="nav-link text-sm font-medium hover:text-copper-orange">Research</a>
                    <a href="data.html" className="nav-link text-sm font-medium hover:text-copper-orange">Data</a>
                    <a href="about.html" className="nav-link text-sm font-medium hover:text-copper-orange">About</a>
                    <button className="bg-copper-orange text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-copper-orange/90 transition-colors">
                        Get Started
                    </button>
                </div>
                
                <button className="md:hidden p-2" aria-label="Toggle menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
          </div>
        </nav>

        <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
            <div id="p5-canvas-container" className="absolute inset-0"></div>
            <div className="hero-content max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="reveal">
                            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                                Transform Ocean Data Into 
                                <span className="gradient-text"> Instant Insights</span>
                            </h1>
                        </div>
                        
                        <div className="reveal stagger-delay-1">
                            <p className="text-xl text-warm-stone leading-relaxed">
                                Samudra-I is an AI-powered assistant that turns complex ocean datasets like ARGO into simple, conversational insights with instant maps, charts, and traceable sources.
                            </p>
                        </div>
                        
                        <div className="reveal stagger-delay-2 flex items-center space-x-6">
                            <div className="data-counter">
                                <div className="text-2xl font-bold text-copper-orange" id="profile-counter">0</div>
                                <div className="text-sm text-warm-stone">ARGO Profiles Analyzed</div>
                            </div>
                        </div>
                        
                        <div className="reveal stagger-delay-3 flex flex-col sm:flex-row gap-4">
                            <button className="bg-copper-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors">
                                Try Live Demo
                            </button>
                            <button className="border-2 border-warm-stone text-warm-stone px-8 py-4 rounded-lg font-medium hover:bg-warm-stone hover:text-white transition-colors">
                                View Research Tools
                            </button>
                        </div>
                    </div>
                    
                    <div className="reveal stagger-delay-4">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-display font-semibold text-lg">Try Samudra-I</h3>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                            </div>
                            
                            <div className="space-y-4" id="chat-interface">
                                <div className="bg-gray-100 rounded-lg p-4 chat-bubble">
                                    <p className="text-sm">"Show me temperature trends in the Pacific Ocean over the last 5 years"</p>
                                </div>
                                
                                <div className="bg-copper-orange/10 rounded-lg p-4 ml-8">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <div className="w-2 h-2 bg-copper-orange rounded-full animate-pulse"></div>
                                        <span className="text-xs text-copper-orange font-medium">Analyzing ARGO data...</span>
                                    </div>
                                    <p className="text-sm">Generating temperature trend visualization with statistical analysis...</p>
                                </div>
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center space-x-2">
                                    <input type="text" placeholder="Ask about ocean data..." className="pointer-events-none cursor-not-allowed flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper-orange/50" aria-label="Chat input"></input>
                                    <button className="bg-copper-orange text-white p-2 rounded-lg hover:bg-copper-orange/90 transition-colors" aria-label="Send message">
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

        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl font-display font-bold mb-6">Powerful Research Capabilities</h2>
                    <p className="text-xl text-warm-stone max-w-3xl mx-auto">
                        Built for oceanographers, data scientists, and policy makers who need instant access to evidence-based insights from complex ocean datasets.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="card-hover bg-soft-cream rounded-2xl p-8 reveal stagger-delay-1">
                        <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-4">Conversational Analysis</h3>
                        <p className="text-warm-stone leading-relaxed">
                            Ask complex oceanographic questions in natural language and get instant visualizations with statistical analysis and source attribution.
                        </p>
                    </div>
                    
                    <div className="card-hover bg-soft-cream rounded-2xl p-8 reveal stagger-delay-2">
                        <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-4">Model-Context Protocol Integration</h3>
                        <p className="text-warm-stone leading-relaxed">
                            Integrate real-time data feeds and external tools directly into AI workflows for enhanced functionality.
                        </p>
                    </div>
                    
                    <div className="card-hover bg-soft-cream rounded-2xl p-8 reveal stagger-delay-3">
                        <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-4">Publication-Ready Visuals</h3>
                        <p className="text-warm-stone leading-relaxed">
                            Generate high-quality charts, maps, and visualizations with automatic source attribution, ready for academic publications and presentations.
                        </p>
                    </div>
                    
                    <div className="card-hover bg-soft-cream rounded-2xl p-8 reveal stagger-delay-1">
                        <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-4">Rapid Analysis</h3>
                        <p className="text-warm-stone leading-relaxed">
                            Reduce analysis time from days to minutes with AI-powered data processing and pattern recognition across massive oceanographic datasets.
                        </p>
                    </div>
                    
                    <div className="card-hover bg-soft-cream rounded-2xl p-8 reveal stagger-delay-2">
                        <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-4">Collaborative Research</h3>
                        <p className="text-warm-stone leading-relaxed">
                            Share queries, visualizations, and insights with research teams. Build collaborative knowledge bases for oceanographic studies.
                        </p>
                    </div>
                    
                    <div className="card-hover bg-soft-cream rounded-2xl p-8 reveal stagger-delay-3">
                        <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-display font-semibold mb-4">Traceable Sources</h3>
                        <p className="text-warm-stone leading-relaxed">
                            Every visualization includes complete source attribution and data lineage, ensuring research reproducibility and academic integrity.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-soft-cream">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal">
                        <h2 className="text-4xl font-display font-bold mb-8">Trusted by Leading Researchers</h2>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-2">Academic Researchers</h3>
                                    <p className="text-warm-stone leading-relaxed">
                                        Oceanographers and climate scientists use Samudra-I to accelerate research, validate hypotheses, and generate publication-ready visualizations from ARGO and satellite datasets.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-2">Field Scientists</h3>
                                    <p className="text-warm-stone leading-relaxed">
                                        Scientists on research vessels and expeditions access real-time data validation, compare field measurements with historical trends, and generate quick reports for expedition planning.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-semibold mb-2">Policy Makers</h3>
                                    <p className="text-warm-stone leading-relaxed">
                                        Government agencies and environmental organizations use evidence-based visualizations to inform climate policy, marine conservation efforts, and ocean resource management decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="reveal stagger-delay-2">
                        <img src="resources/researcher-work.png" alt="Professional data scientist working with oceanographic visualizations on multiple screens in a modern research laboratory" className="w-full rounded-2xl shadow-2xl"></img>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl font-display font-bold mb-6">Real-time Ocean Data Analysis</h2>
                    <p className="text-xl text-warm-stone max-w-3xl mx-auto">
                        Explore live ARGO float data and historical oceanographic measurements with our interactive visualization tools.
                    </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 reveal stagger-delay-1">
                        <div className="bg-soft-cream rounded-2xl p-6 h-96">
                            <div id="temperature-chart" className="w-full h-full"></div>
                        </div>
                    </div>
                    
                    <div className="space-y-6 reveal stagger-delay-2">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <h3 className="font-display font-semibold mb-4">Global Coverage</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-warm-stone">Active ARGO Floats</span>
                                    <span className="font-mono font-semibold text-copper-orange">3,847</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-warm-stone">Data Points Today</span>
                                    <span className="font-mono font-semibold text-copper-orange">1.2M</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-warm-stone">Ocean Coverage</span>
                                    <span className="font-mono font-semibold text-copper-orange">92%</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                            <h3 className="font-display font-semibold mb-4">Recent Analysis</h3>
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

        <section className="py-20 bg-deep-charcoal text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="reveal">
                    <h2 className="text-4xl font-display font-bold mb-6">
                        Ready to Transform Your Ocean Research?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Join leading oceanographers and research institutions using Samudra-I to accelerate discovery and generate evidence-based insights.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-copper-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors">
                            Start Free Trial
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-deep-charcoal transition-colors">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-soft-cream py-12 border-t border-warm-stone/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-copper-orange to-warm-stone rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <span className="font-display font-bold text-xl">Samudra-I</span>
                    </div>
                    
                    <div className="text-sm text-warm-stone">
                        © 2024 Samudra-I. Empowering oceanographic research through AI.
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  )
}

export default App
