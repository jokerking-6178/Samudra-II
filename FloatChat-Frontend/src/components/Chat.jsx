import React from 'react'

function Chat() {
  return (
    <>
        <nav className="bg-soft-cream/90 backdrop-blur-md border-b border-warm-stone/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-copper-orange to-warm-stone rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <span className="font-display font-bold text-xl">Samudra-I</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="index.html" className="text-sm font-medium text-warm-stone hover:text-copper-orange transition-colors">Home</a>
                        <a href="research.html" className="text-sm font-medium text-warm-stone hover:text-copper-orange transition-colors">Research</a>
                        <a href="data.html" className="text-sm font-medium text-warm-stone hover:text-copper-orange transition-colors">Data</a>
                    </div>
                </div>
                
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2 text-sm text-warm-stone">
                        <div className="w-6 h-6 user-avatar rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-medium" id="user-initials">JD</span>
                        </div>
                        <span id="user-name">John Doe</span>
                    </div>
                    <button id="logout-btn" className="text-sm text-warm-stone hover:text-copper-orange transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <div className="flex h-screen">
        <div className="sidebar w-80 flex flex-col">
            <div className="p-6 border-b border-gray-200">
                <button id="new-chat" className="w-full bg-copper-orange text-white py-3 rounded-lg font-medium hover:bg-copper-orange/90 transition-colors flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>New Research Query</span>
                </button>
            </div>

            <div className="p-6 border-b border-gray-200">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                    <button className="quick-action w-full text-left p-3 rounded-lg hover:bg-soft-cream transition-colors">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-sm">Temperature Analysis</div>
                                <div className="text-xs text-warm-stone">Global ocean trends</div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="quick-action w-full text-left p-3 rounded-lg hover:bg-soft-cream transition-colors">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-sm">Salinity Patterns</div>
                                <div className="text-xs text-warm-stone">Regional comparisons</div>
                            </div>
                        </div>
                    </button>
                    
                    <button className="quick-action w-full text-left p-3 rounded-lg hover:bg-soft-cream transition-colors">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-sm">Current Analysis</div>
                                <div className="text-xs text-warm-stone">Ocean circulation</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
                <h3 className="font-semibold mb-4">Recent Queries</h3>
                <div id="recent-queries" className="space-y-2">
                </div>
            </div>

            <div className="p-6 border-t border-gray-200">
                <div className="space-y-2">
                    <button className="nav-link w-full text-left p-2 rounded-lg flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Settings</span>
                    </button>
                    
                    <button className="nav-link w-full text-left p-2 rounded-lg flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Help & Support</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="flex-1 flex flex-col">
            <div className="chat-area border-b border-gray-200 p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-display font-semibold">Samudra-I Assistant</h2>
                        <p className="text-sm text-warm-stone">AI-powered oceanographic research assistant</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button id="export-chat" className="p-2 text-warm-stone hover:text-copper-orange transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </button>
                        <button id="fullscreen" className="p-2 text-warm-stone hover:text-copper-orange transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="chat-messages" className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="message-bubble">
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 ai-avatar rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">S</span>
                        </div>
                        <div className="flex-1">
                            <div className="bg-soft-cream rounded-2xl p-4">
                                <p className="text-sm leading-relaxed mb-3">
                                    Welcome to Samudra-I! I'm your AI-powered oceanographic research assistant. I can help you analyze ocean data, generate visualizations, and provide insights from ARGO floats and other oceanographic datasets.
                                </p>
                                <p className="text-sm text-warm-stone">
                                    Try asking me about temperature trends, salinity patterns, current velocities, or any other oceanographic phenomena. I'll provide you with data-driven insights and traceable sources.
                                </p>
                            </div>

                            <div className="mt-4">
                                <p className="text-xs text-warm-stone mb-2">Quick start:</p>
                                <div className="flex flex-wrap gap-2">
                                    <button className="quick-suggest px-3 py-1 bg-white border border-gray-200 rounded-full text-xs hover:bg-copper-orange hover:text-white hover:border-copper-orange transition-colors">
                                        Show me Pacific temperature trends
                                    </button>
                                    <button className="quick-suggest px-3 py-1 bg-white border border-gray-200 rounded-full text-xs hover:bg-copper-orange hover:text-white hover:border-copper-orange transition-colors">
                                        Compare Arctic and Antarctic salinity
                                    </button>
                                    <button className="quick-suggest px-3 py-1 bg-white border border-gray-200 rounded-full text-xs hover:bg-copper-orange hover:text-white hover:border-copper-orange transition-colors">
                                        Generate Gulf Stream analysis
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chat-area border-t border-gray-200 p-6">
                <div className="flex items-end space-x-4">
                    <div className="flex-1">
                        <textarea 
                            id="chat-input" 
                            className="chat-input w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-copper-orange/50 focus:border-copper-orange"
                            placeholder="Ask about oceanographic data, trends, or phenomena..."
                            rows="1"
                        ></textarea>
                    </div>
                    <button 
                        id="send-message" 
                        className="bg-copper-orange text-white p-3 rounded-lg hover:bg-copper-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </button>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                    <button className="input-suggest px-3 py-1 bg-soft-cream rounded-full text-xs text-warm-stone hover:bg-copper-orange hover:text-white transition-colors">
                        What are the current ARGO float positions?
                    </button>
                    <button className="input-suggest px-3 py-1 bg-soft-cream rounded-full text-xs text-warm-stone hover:bg-copper-orange hover:text-white transition-colors">
                        Show me thermocline depth variations
                    </button>
                    <button className="input-suggest px-3 py-1 bg-soft-cream rounded-full text-xs text-warm-stone hover:bg-copper-orange hover:text-white transition-colors">
                        Analyze ocean heat content trends
                    </button>
                </div>
            </div>
        </div>
    </div>

 
    <div id="chart-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div className="bg-white rounded-2xl p-8 max-w-4xl max-h-96 mx-4 w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display font-semibold">Data Visualization</h3>
                <button id="close-chart" className="text-warm-stone hover:text-copper-orange transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stokeLinecap="round" stokeLinejoin="round" stokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div id="chart-content" className="h-80">
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Chat