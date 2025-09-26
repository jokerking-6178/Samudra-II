import React from 'react'

function Research() {
  return (
    <>
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
                    <a href="index.html" className="nav-link text-sm font-medium hover:text-copper-orange">Home</a>
                    <a href="research.html" className="nav-link text-sm font-medium text-copper-orange">Research</a>
                    <a href="data.html" className="nav-link text-sm font-medium hover:text-copper-orange">Data</a>
                    <a href="about.html" className="nav-link text-sm font-medium hover:text-copper-orange">About</a>
                    <button className="bg-copper-orange text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-copper-orange/90 transition-colors">
                        Get Started
                    </button>
                </div>
                
                <button className="md:hidden p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <section className="pt-32 pb-16 bg-gradient-to-br from-soft-cream to-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 reveal">
                <h1 className="text-5xl font-display font-bold mb-6">
                    Advanced Research <span className="text-copper-orange">Tools</span>
                </h1>
                <p className="text-xl text-warm-stone max-w-3xl mx-auto leading-relaxed">
                    Powerful AI-driven analysis tools designed for oceanographic research, data exploration, and collaborative scientific discovery.
                </p>
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-display font-bold mb-4">Data Exploration Dashboard</h2>
                <p className="text-warm-stone max-w-2xl mx-auto">
                    Interactive tools for exploring oceanographic datasets with real-time visualization and analysis capabilities.
                </p>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
                <div className="lg:col-span-1 reveal stagger-delay-1">
                    <div className="dashboard-panel rounded-2xl p-6 h-full">
                        <h3 className="font-display font-semibold mb-6">Dataset Controls</h3>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Data Source</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper-orange/50">
                                    <option>ARGO Floats</option>
                                    <option>Satellite Data</option>
                                    <option>Research Vessels</option>
                                    <option>Moored Buoys</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-2">Parameter</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper-orange/50">
                                    <option>Temperature</option>
                                    <option>Salinity</option>
                                    <option>Current Velocity</option>
                                    <option>Oxygen Content</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-2">Time Range</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper-orange/50">
                                    <option>Last 30 Days</option>
                                    <option>Last 6 Months</option>
                                    <option>Last Year</option>
                                    <option>Last 5 Years</option>
                                </select>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium mb-2">Region</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-copper-orange/50">
                                    <option>Global</option>
                                    <option>Pacific Ocean</option>
                                    <option>Atlantic Ocean</option>
                                    <option>Indian Ocean</option>
                                    <option>Arctic Ocean</option>
                                </select>
                            </div>
                            
                            <button className="w-full bg-copper-orange text-white py-2 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors">
                                Update Visualization
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 reveal stagger-delay-2">
                    <div className="dashboard-panel rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-display font-semibold">Global Temperature Distribution</h3>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs bg-copper-orange/20 text-copper-orange rounded-full">2D Map</button>
                                <button className="px-3 py-1 text-xs text-warm-stone rounded-full">3D View</button>
                                <button className="px-3 py-1 text-xs text-warm-stone rounded-full">Cross Section</button>
                            </div>
                        </div>
                        <div id="global-map" className="w-full h-96 bg-gray-50 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-soft-cream">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-display font-bold mb-4">Research Capabilities</h2>
                <p className="text-warm-stone max-w-2xl mx-auto">
                    Comprehensive suite of tools for oceanographic analysis, visualization, and collaboration.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="tool-card bg-white rounded-2xl p-8 reveal stagger-delay-1">
                    <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-4">Query Builder</h3>
                    <p className="text-warm-stone leading-relaxed mb-6">
                        Construct complex oceanographic queries with intuitive filters for regions, time periods, and data parameters.
                    </p>
                    <button className="text-copper-orange font-medium hover:text-copper-orange/80 transition-colors">
                        Explore Tool →
                    </button>
                </div>
                
                <div className="tool-card bg-white rounded-2xl p-8 reveal stagger-delay-2">
                    <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-4">Visual Generator</h3>
                    <p className="text-warm-stone leading-relaxed mb-6">
                        Create publication-ready charts, maps, and cross-sections with automatic source attribution and styling.
                    </p>
                    <button className="text-copper-orange font-medium hover:text-copper-orange/80 transition-colors">
                        Create Visual →
                    </button>
                </div>
                
                <div className="tool-card bg-white rounded-2xl p-8 reveal stagger-delay-3">
                    <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-4">AI Analysis</h3>
                    <p className="text-warm-stone leading-relaxed mb-6">
                        Leverage machine learning to identify patterns, anomalies, and trends in oceanographic data automatically.
                    </p>
                    <button className="text-copper-orange font-medium hover:text-copper-orange/80 transition-colors">
                        Run Analysis →
                    </button>
                </div>
                
                <div className="tool-card bg-white rounded-2xl p-8 reveal stagger-delay-1">
                    <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-4">Data Export</h3>
                    <p className="text-warm-stone leading-relaxed mb-6">
                        Export datasets and visualizations in multiple formats including CSV, NetCDF, and high-resolution graphics.
                    </p>
                    <button className="text-copper-orange font-medium hover:text-copper-orange/80 transition-colors">
                        Export Data →
                    </button>
                </div>
                
                <div className="tool-card bg-white rounded-2xl p-8 reveal stagger-delay-2">
                    <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-4">Collaboration</h3>
                    <p className="text-warm-stone leading-relaxed mb-6">
                        Share research projects, visualizations, and insights with team members and external collaborators.
                    </p>
                    <button className="text-copper-orange font-medium hover:text-copper-orange/80 transition-colors">
                        Collaborate →
                    </button>
                </div>
                
                <div className="tool-card bg-white rounded-2xl p-8 reveal stagger-delay-3">
                    <div className="w-12 h-12 bg-copper-orange/20 rounded-xl flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-copper-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-4">Smart Queries</h3>
                    <p className="text-warm-stone leading-relaxed mb-6">
                        Natural language processing for conversational data analysis with contextual understanding.
                    </p>
                    <button className="text-copper-orange font-medium hover:text-copper-orange/80 transition-colors">
                        Try Queries →
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-display font-bold mb-4">Research Applications</h2>
                <p className="text-warm-stone max-w-2xl mx-auto">
                    Real-world applications of Samudra-I in oceanographic research and climate science.
                </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="reveal stagger-delay-1">
                    <img src="resources/field-science.png" alt="Field scientist on research vessel with oceanographic equipment and scientific instruments" className="w-full rounded-2xl shadow-lg mb-6"></img>
                    <h3 className="text-xl font-display font-semibold mb-4">Field Expedition Support</h3>
                    <p className="text-warm-stone leading-relaxed mb-4">
                        Research vessels use Samudra-I to validate real-time measurements against historical ARGO data, ensuring data quality and identifying oceanographic features during expeditions.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-warm-stone">
                        <span>• Real-time validation</span>
                        <span>• Historical comparison</span>
                        <span>• Quality control</span>
                    </div>
                </div>
                
                <div className="reveal stagger-delay-2">
                    <img src="resources/policy-meeting.png" alt="Modern policy maker presenting oceanographic data to colleagues in professional meeting room" className="w-full rounded-2xl shadow-lg mb-6"></img>
                    <h3 className="text-xl font-display font-semibold mb-4">Climate Policy Development</h3>
                    <p className="text-warm-stone leading-relaxed mb-4">
                        Policy makers generate evidence-based visualizations for marine conservation strategies, climate adaptation planning, and international ocean governance decisions.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-warm-stone">
                        <span>• Evidence-based decisions</span>
                        <span>• Visual reporting</span>
                        <span>• Policy documentation</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-16 bg-deep-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="reveal">
                <h2 className="text-3xl font-display font-bold mb-6">
                    Start Your Research Journey
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Access powerful oceanographic analysis tools and accelerate your research with AI-powered insights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-copper-orange text-white px-8 py-3 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors">
                        Access Research Tools
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-deep-charcoal transition-colors">
                        View Documentation
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
    </>
  )
}

export default Research