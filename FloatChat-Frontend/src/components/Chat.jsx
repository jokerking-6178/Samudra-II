import React, { useState, useEffect, useRef, useCallback } from 'react';
// We will use global references for animejs and echarts loaded via CDN in the component.

// --- Load External Scripts via CDN ---
// Since we cannot resolve 'animejs' or 'echarts' via standard NPM imports in this environment,
// we will load them via script tags directly within the component's scope or the main body.
// Note: In a production React app, these would be installed and imported normally.

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

const loadDependencies = async () => {
    // Check if libraries are already loaded globally before loading scripts
    const promises = [];
    if (typeof window.anime === 'undefined') {
        promises.push(loadScript("https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"));
    }
    // Echarts often exposes itself as 'echarts' globally
    if (typeof window.echarts === 'undefined') {
        promises.push(loadScript("https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"));
    }
    await Promise.all(promises);
};

// --- Configuration and Helpers ---

// Custom Tailwind-like colors for internal use in JS
const COLORS = {
    'deep-charcoal': '#2A2A2A',
    'warm-stone': '#8B7D6B',
    'copper-orange': '#B87333',
    'soft-cream': '#F8F6F3',
};

// Helper function to simulate initial user loading
const loadUser = () => {
    // This mocks the user object loaded from the original HTML logic.
    const mockUser = {
        name: 'Guest',
        initials: 'GS'
    };
    return mockUser;
};

// Custom hook for ECharts integration
const useECharts = (options, dependencies) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Ensure echarts is available globally before initialization
        if (typeof window.echarts === 'undefined' || !chartRef.current) return;

        let chartInstance = null;

        try {
            chartInstance = window.echarts.init(chartRef.current);
            chartInstance.setOption(options);
        } catch (error) {
            console.error("ECharts initialization failed:", error);
            return;
        }

        const handleResize = () => chartInstance?.resize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chartInstance?.dispose();
        };
    }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

    return chartRef;
};

// Helper for formatting timestamp
const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
};


// --- Message Sub-Components ---

const UserAvatar = ({ initials }) => (
    <div className="w-10 h-10 user-avatar rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#B87333] to-[#8B7D6B]">
        <span className="text-white font-bold text-sm">{initials}</span>
    </div>
);

const AIAvatar = () => (
    <div className="w-10 h-10 ai-avatar rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#2A2A2A] to-[#8B7D6B]">
        <span className="text-white font-bold text-sm">S</span>
    </div>
);

const TypingIndicator = () => (
    <div className="message-bubble">
        <div className="flex items-start space-x-4">
            <AIAvatar />
            <div className="bg-[#F8F6F3] rounded-2xl p-4">
                <div className="flex space-x-1">
                    <div className="loading-dots w-2 h-2 bg-[#8B7D6B] rounded-full animate-pulse" style={{ animationDelay: '-0.32s' }}></div>
                    <div className="loading-dots w-2 h-2 bg-[#8B7D6B] rounded-full animate-pulse" style={{ animationDelay: '-0.16s' }}></div>
                    <div className="loading-dots w-2 h-2 bg-[#8B7D6B] rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
);

const ChartContent = ({ content, onExpand }) => {
    const chartData = content.data;

    const options = {
        backgroundColor: 'transparent',
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(42, 42, 42, 0.9)',
            borderColor: COLORS['copper-orange'],
            textStyle: { color: COLORS['soft-cream'] }
        },
        legend: {
            data: ['Pacific Ocean', 'Atlantic Ocean'],
            textStyle: { color: COLORS['deep-charcoal'] }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: chartData.months,
            axisLine: { lineStyle: { color: COLORS['warm-stone'] } },
            axisLabel: { color: COLORS['deep-charcoal'] }
        },
        yAxis: {
            type: 'value',
            name: 'Temperature (°C)',
            axisLine: { lineStyle: { color: COLORS['warm-stone'] } },
            axisLabel: { color: COLORS['deep-charcoal'] }
        },
        series: [
            {
                name: 'Pacific Ocean',
                type: 'line',
                smooth: true,
                data: chartData.pacificData,
                lineStyle: { color: COLORS['copper-orange'], width: 3 },
                itemStyle: { color: COLORS['copper-orange'] }
            },
            {
                name: 'Atlantic Ocean',
                type: 'line',
                smooth: true,
                data: chartData.atlanticData,
                lineStyle: { color: COLORS['warm-stone'], width: 3 },
                itemStyle: { color: COLORS['warm-stone'] }
            }
        ]
    };

    const chartRef = useECharts(options, [chartData]);

    return (
        <div className="bg-[#F8F6F3] rounded-2xl p-4 max-w-2xl shadow-inner">
            <div className="chart-container rounded-lg p-4 mb-3 bg-white/80 border border-[#8B7D6B]/20">
                <div ref={chartRef} style={{ height: '200px' }}></div>
            </div>
            <p className="text-sm text-[#8B7D6B] mb-3">{content.description}</p>
            <div className="flex space-x-2">
                <button
                    onClick={onExpand}
                    className="chart-expand px-3 py-1 bg-[#B87333] text-white rounded text-xs hover:bg-[#B87333]/90 transition-colors shadow-md"
                >
                    Expand Chart
                </button>
                <button className="px-3 py-1 border border-[#B87333] text-[#B87333] rounded text-xs hover:bg-[#B87333] hover:text-white transition-colors shadow-md">
                    Export Data
                </button>
            </div>
        </div>
    );
};


const MessageBubble = ({ message, user, onExpandChart }) => {
    const isUser = message.sender === 'user';
    const initials = user?.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';

    return (
        <div className="message-bubble animate-messageSlide">
            <div className={`flex items-start space-x-4 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                {isUser ? <UserAvatar initials={initials} /> : <AIAvatar />}
                <div className={`flex-1 ${isUser ? 'text-right' : ''}`}>
                    {message.type === 'text' || message.type === 'welcome' ? (
                        <div className={`${isUser ? 'bg-[#B87333] text-white shadow-xl shadow-[#B87333]/30' : 'bg-[#F8F6F3] shadow-md'} rounded-2xl p-4 inline-block max-w-2xl text-left transition-all duration-300 transform hover:scale-[1.01]`}>
                            <div className="text-sm leading-relaxed">{message.content}</div>
                        </div>
                    ) : message.type === 'chart' ? (
                        <ChartContent content={message.content} onExpand={onExpandChart} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---

const Chat = () => {
    const user = loadUser();
    const chatMessagesRef = useRef(null);
    const chatInputRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isScriptsLoaded, setIsScriptsLoaded] = useState(false);
    // Use an array state, initializing from localStorage or an empty array
    const [recentQueries, setRecentQueries] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('samudra_recent_queries')) || [];
        } catch {
            return [];
        }
    });
    const [isChartModalOpen, setIsChartModalOpen] = useState(false);
    const [chartModalContent, setChartModalContent] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Start collapsed on mobile, open on desktop

    // Initial script loading effect
    useEffect(() => {
        loadDependencies().then(() => {
            setIsScriptsLoaded(true);
        }).catch(err => {
            console.error("Failed to load external libraries.", err);
        });

        // Set initial sidebar state based on screen size (desktop view)
        const checkIsDesktop = () => window.innerWidth >= 768;
        setIsSidebarOpen(checkIsDesktop());

        const handleResize = () => setIsSidebarOpen(checkIsDesktop());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initial load and animation (runs after scripts are confirmed loaded)
    useEffect(() => {
        if (!isScriptsLoaded || typeof window.anime === 'undefined') return;

        // Animate entrance
        if (isSidebarOpen) {
            window.anime({ targets: '.sidebar', translateX: [-300, 0], opacity: [0, 1], duration: 600, easing: 'easeOutCubic' });
        }
        window.anime({ targets: '.chat-main-area', translateX: [300, 0], opacity: [0, 1], duration: 600, delay: 200, easing: 'easeOutCubic' });

        // Initial welcome message (only once)
        if (messages.length === 0) {
             const welcomeMessage = {
                content: (
                    <>
                        <p className="text-sm leading-relaxed mb-3">
                            Welcome to Samudra-I! I'm your AI-powered oceanographic research assistant. I can help you analyze ocean data, generate visualizations, and provide insights from ARGO floats and other oceanographic datasets.
                        </p>
                        <p className="text-sm text-[#8B7D6B]">
                            Try asking me about **temperature trends**, **salinity patterns**, **current velocities**, or any other oceanographic phenomena. I'll provide you with data-driven insights and traceable sources.
                        </p>
                    </>
                ),
                sender: 'ai',
                type: 'welcome'
            };
            setMessages([welcomeMessage]);
        }
    }, [isScriptsLoaded, isSidebarOpen]); // Add isScriptsLoaded to dependencies

    // Scroll to bottom on new message
    useEffect(() => {
        if (chatMessagesRef.current) {
            // Smooth scroll implementation
            chatMessagesRef.current.scrollTo({
                top: chatMessagesRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, isTyping]);

    // Input change and auto-resize
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
    };

    // AI Response Logic
    const generateTemperatureData = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        // Ensure data points look realistic but varied
        const pacificData = months.map(() => parseFloat((15 + Math.random() * 10).toFixed(2)));
        const atlanticData = months.map(() => parseFloat((12 + Math.random() * 8).toFixed(2)));
        return { months, pacificData, atlanticData };
    };

    const getAIResponse = (userMessage) => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('temperature') || lowerMessage.includes('temp') || lowerMessage.includes('trend')) {
            return {
                content: {
                    description: "Based on **ARGO float data** from the last 6 months, I've analyzed global ocean temperature trends. The data shows significant warming in the Pacific Ocean, with an average increase of $0.3\degree C$ compared to historical baselines.",
                    data: generateTemperatureData()
                },
                type: 'chart'
            };
        } else if (lowerMessage.includes('salinity') || lowerMessage.includes('salt')) {
            return {
                content: "Salinity patterns reveal interesting variations across ocean basins. The **North Atlantic** shows higher salinity due to evaporation and limited freshwater input, while the **Arctic regions** exhibit lower salinity from ice melt and river runoff. ARGO data indicates a gradual freshening trend in subpolar regions over the past decade.",
                type: 'text'
            };
        } else if (lowerMessage.includes('current') || lowerMessage.includes('gulf stream') || lowerMessage.includes('velocity')) {
            return {
                content: "The **Gulf Stream** continues to show robust flow patterns, with current velocities averaging $1.5$-$2.5$ $\text{m/s}$ in the core region. Recent ARGO measurements indicate slight weakening in the subtropical gyre, potentially related to climate variability. The current maintains its characteristic meandering pattern, influencing regional climate and marine ecosystems.",
                type: 'text'
            };
        } else {
            return {
                content: "I understand you're asking about oceanographic data. Let me analyze the available ARGO datasets to provide you with evidence-based insights. I can help you explore temperature profiles, salinity patterns, current velocities, and other oceanographic parameters with full traceability to original data sources.",
                type: 'text'
            };
        }
    };

    // Save to Recent Queries
    const saveToRecentQueries = useCallback((query) => {
        const newQuery = { query: query, timestamp: new Date().toISOString() };
        setRecentQueries(prevQueries => {
            const updatedQueries = [newQuery, ...prevQueries].slice(0, 10);
            localStorage.setItem('samudra_recent_queries', JSON.stringify(updatedQueries));
            return updatedQueries;
        });
    }, []);

    // Main send message function
    const sendMessage = useCallback((messageToSend = inputValue) => {
        const trimmedMessage = messageToSend.trim();

        if (!trimmedMessage || isTyping) return;

        // Add user message
        const userMessage = { content: trimmedMessage, sender: 'user', type: 'text', timestamp: new Date().toISOString() };
        setMessages(prevMessages => [...prevMessages, userMessage]);

        // Clear input and reset height
        setInputValue('');
        if (chatInputRef.current) {
            chatInputRef.current.style.height = 'auto';
            chatInputRef.current.blur();
        }

        // Show typing indicator
        setIsTyping(true);

        // Simulate AI response generation
        setTimeout(() => {
            const response = getAIResponse(trimmedMessage);

            // Add AI response message
            setMessages(prevMessages => [...prevMessages, { ...response, sender: 'ai', timestamp: new Date().toISOString() }]);
            setIsTyping(false);

            saveToRecentQueries(trimmedMessage);

        }, 1500 + Math.random() * 1000); // Realistic delay

    }, [inputValue, isTyping, saveToRecentQueries]);

    // Handle quick suggestions and actions
    const handleSuggestClick = (text) => {
        setInputValue(text);
        if (chatInputRef.current) {
            chatInputRef.current.value = text;
            chatInputRef.current.style.height = 'auto';
            chatInputRef.current.style.height = Math.min(chatInputRef.current.scrollHeight, 120) + 'px';
            chatInputRef.current.focus();
            // Call sendMessage immediately if it's a quick suggest button (user intent to send)
            // sendMessage(text); // Decided not to auto-send, just populate the input field.
        }
    };

    const handleQuickAction = (action) => {
        let query = '';
        switch(action) {
            case 'Temperature Analysis':
                query = 'Analyze global ocean temperature trends over the past year';
                break;
            case 'Salinity Patterns':
                query = 'Compare salinity patterns between different ocean basins';
                break;
            case 'Current Analysis':
                query = 'Generate current velocity analysis for major ocean currents';
                break;
            default:
                return;
        }
        // Use handleSuggestClick which populates input
        handleSuggestClick(query);
    };

    const handleNewChat = () => {
        const welcomeMessage = {
            content: "Welcome back! I'm ready to help you with your oceanographic research. What would you like to explore today?",
            sender: 'ai',
            type: 'text'
        };
        setMessages([welcomeMessage]);
    };

    // Simulate Logout (as in original HTML)
    const handleLogout = () => {
        localStorage.removeItem('samudra_user');
        // In a real environment, this would be a client-side redirect
        console.log("Logged out. Simulating redirect to auth page.");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleExpandChart = (content) => {
        setChartModalContent(content);
        setIsChartModalOpen(true);
    };

    // Modal Chart Component
    const ModalChart = () => {
        // Only render if scripts are loaded and echarts is available
        if (!isScriptsLoaded || typeof window.echarts === 'undefined') return <div className="text-center p-10">Loading chart dependencies...</div>;

        const options = {
            backgroundColor: 'transparent',
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(42, 42, 42, 0.9)',
                borderColor: COLORS['copper-orange'],
                textStyle: { color: COLORS['soft-cream'] }
            },
            legend: {
                data: ['Pacific Ocean', 'Atlantic Ocean'],
                textStyle: { color: COLORS['deep-charcoal'] }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: chartModalContent.data.months,
                axisLine: { lineStyle: { color: COLORS['warm-stone'] } },
                axisLabel: { color: COLORS['deep-charcoal'] }
            },
            yAxis: {
                type: 'value',
                name: 'Temperature (°C)',
                axisLine: { lineStyle: { color: COLORS['warm-stone'] } },
                axisLabel: { color: COLORS['deep-charcoal'] }
            },
            series: [
                {
                    name: 'Pacific Ocean',
                    type: 'line',
                    smooth: true,
                    data: chartModalContent.data.pacificData,
                    lineStyle: { color: COLORS['copper-orange'], width: 3 },
                    itemStyle: { color: COLORS['copper-orange'] }
                },
                {
                    name: 'Atlantic Ocean',
                    type: 'line',
                    smooth: true,
                    data: chartModalContent.data.atlanticData,
                    lineStyle: { color: COLORS['warm-stone'], width: 3 },
                    itemStyle: { color: COLORS['warm-stone'] }
                }
            ]
        };

        // Key is necessary to re-initialize the chart when content changes
        const chartRef = useECharts(options, [chartModalContent]);

        return <div ref={chartRef} className="h-full w-full" />;
    };

    // --- Component Structure (JSX) ---

    return (
        // Custom CSS for animations and colors are handled via style blocks/props
        <div className="text-[#2A2A2A] min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #F8F6F3 0%, #F5F3F0 100%)' }}>

            {/* Global Style Injection for Animations (Original HTML behavior) */}
            <style jsx global>{`
                @keyframes messageSlide { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-messageSlide { animation: messageSlide 0.3s ease-out; }
                .font-display { font-family: 'Inter', sans-serif; }
                .font-mono { font-family: 'JetBrains Mono', monospace; }
                /* Define custom colors to ensure exact match */
                .text-deep-charcoal { color: #2A2A2A; }
                .text-warm-stone { color: #8B7D6B; }
                .bg-copper-orange { background-color: #B87333; }
                .bg-soft-cream { background-color: #F8F6F3; }

                /* Custom scrollbar for better aesthetics */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    background-color: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #8B7D6B;
                    border-radius: 4px;
                }
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #8B7D6B transparent;
                }
            `}</style>

            {/* Navigation */}
            <nav className="bg-[#F8F6F3]/90 backdrop-blur-md border-b border-[#8B7D6B]/20 text-4xl top-0 z-10 shadow-lg shadow-gray-100/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#B87333] to-[#8B7D6B] rounded-lg flex items-center justify-center shadow-md">
                                    <span className="text-white font-bold text-sm">S</span>
                                </div>
                                <span className="font-display font-bold text-xl text-[#2A2A2A]">Samudra-I</span>
                            </div>
                            <div className="hidden md:flex items-center space-x-6">
                                {/* Links are placeholders since this is a single file component */}
                                <a href="#" className="text-sm font-medium text-[#8B7D6B] hover:text-[#B87333] transition-colors">Home</a>
                                <a href="#" className="text-sm font-medium text-[#8B7D6B] hover:text-[#B87333] transition-colors">Research</a>
                                <a href="#" className="text-sm font-medium text-[#8B7D6B] hover:text-[#B87333] transition-colors">Data</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex items-center space-x-2 text-sm text-[#8B7D6B]">
                                <div className="w-6 h-6 user-avatar rounded-full flex items-center justify-center bg-gradient-to-br from-[#B87333] to-[#8B7D6B]">
                                    <span className="text-white text-xs font-medium">{user.initials}</span>
                                </div>
                                <span>{user.name}</span>
                            </div>
                            <button onClick={handleLogout} className="text-sm text-[#8B7D6B] hover:text-[#B87333] transition-colors p-1 rounded-full hover:bg-gray-100">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                            </button>
                             {/* Hamburger Menu for Mobile */}
                            <button className="md:hidden text-[#2A2A2A] p-1 rounded-md" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 68px)' }}>
                {/* Sidebar Overlay for Mobile */}
                {isSidebarOpen && !window.matchMedia('(min-width: 768px)').matches && (
                    <div className="fixed inset-0 bg-black/30 z-10" onClick={() => setIsSidebarOpen(false)}></div>
                )}
                
                {/* Sidebar */}
                <div className={`sidebar w-80 flex flex-col transform transition-transform duration-300 absolute md:relative z-20 ${isSidebarOpen ? 'translate-x-0 shadow-2xl md:shadow-none' : '-translate-x-full'} md:translate-x-0`} style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRight: '1px solid rgba(139, 125, 107, 0.2)'
                }}>
                    {/* New Chat Button */}
                    <div className="p-6 border-b border-gray-200">
                        <button onClick={handleNewChat} className="w-full bg-[#B87333] text-white py-3 rounded-xl font-medium hover:bg-[#B87333]/90 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#B87333]/30 transform hover:scale-[1.01]">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            <span>New Research Query</span>
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="font-semibold mb-4 text-[#2A2A2A]">Quick Actions</h3>
                        <div className="space-y-3">
                            {['Temperature Analysis', 'Salinity Patterns', 'Current Analysis'].map((action, index) => {
                                const icons = [
                                    { icon: (
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    ), text: 'Global ocean trends', bg: 'bg-blue-100' },
                                    { icon: (
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                    ), text: 'Regional comparisons', bg: 'bg-green-100' },
                                    { icon: (
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    ), text: 'Ocean circulation', bg: 'bg-purple-100' }
                                ];
                                const { icon, text, bg } = icons[index];

                                return (
                                    <button
                                        key={action}
                                        onClick={() => handleQuickAction(action)}
                                        className="quick-action w-full text-left p-3 rounded-xl hover:bg-[#F8F6F3] transition-all duration-300 transform hover:translate-x-1 hover:shadow-lg hover:shadow-[#B87333]/20"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shadow-inner`}>
                                                {icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm text-[#2A2A2A]">{action}</div>
                                                <div className="text-xs text-[#8B7D6B]">{text}</div>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recent Queries */}
                    <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                        <h3 className="font-semibold mb-4 text-[#2A2A2A]">Recent Queries</h3>
                        <div id="recent-queries" className="space-y-2">
                            {recentQueries.map((query, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSuggestClick(query.query)}
                                    className="w-full text-left p-3 rounded-lg hover:bg-[#F8F6F3] transition-colors text-sm group border border-transparent hover:border-[#8B7D6B]/10"
                                >
                                    <div className="font-medium text-[#2A2A2A] truncate">{query.query}</div>
                                    <div className="text-xs text-[#8B7D6B]">{formatTimestamp(query.timestamp)}</div>
                                </button>
                            ))}
                            {recentQueries.length === 0 && (
                                <p className="text-sm text-[#8B7D6B] italic">No recent queries.</p>
                            )}
                        </div>
                    </div>

                    {/* Settings */}
                    <div className="p-6 border-t border-gray-200">
                        <div className="space-y-2">
                            <button className="nav-link w-full text-left p-3 rounded-lg flex items-center space-x-3 transition-colors hover:bg-[#B87333]/10 text-[#8B7D6B] hover:text-[#B87333]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span>Settings</span>
                            </button>

                            <button className="nav-link w-full text-left p-3 rounded-lg flex items-center space-x-3 transition-colors hover:bg-[#B87333]/10 text-[#8B7D6B] hover:text-[#B87333]">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Help & Support</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="chat-main-area flex-1 flex flex-col transform transition-transform duration-300" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)'
                }}>
                    {/* Chat Header */}
                    <div className="chat-area border-b border-gray-200 p-6 sticky top-0 bg-[#F8F6F3]/95 z-50 shadow-md">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-display font-semibold text-[#2A2A2A]">Samudra-I Assistant</h2>
                                <p className="text-sm text-[#8B7D6B]">AI-powered oceanographic research assistant</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button className="p-2 text-[#8B7D6B] hover:text-[#B87333] transition-colors rounded-full hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                </button>
                                <button className="p-2 text-[#8B7D6B] hover:text-[#B87333] transition-colors rounded-full hover:bg-gray-100">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div ref={chatMessagesRef} className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                        {messages.map((message, index) => (
                            message.type === 'welcome' ? (
                                // Special handling for the welcome message structure
                                <div key={index} className="message-bubble animate-messageSlide">
                                    <div className="flex items-start space-x-4">
                                        <AIAvatar />
                                        <div className="flex-1">
                                            <div className="bg-[#F8F6F3] rounded-2xl p-4 shadow-md">
                                                {message.content}
                                            </div>
                                            <div className="mt-4 max-w-2xl">
                                                <p className="text-xs text-[#8B7D6B] mb-2 font-medium">Quick start suggestions:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {['Show me Pacific temperature trends', 'Compare Arctic and Antarctic salinity', 'Generate Gulf Stream analysis'].map(suggest => (
                                                        <button
                                                            key={suggest}
                                                            onClick={() => handleSuggestClick(suggest)}
                                                            className="quick-suggest px-4 py-2 bg-white border border-gray-300 rounded-full text-xs text-[#2A2A2A] hover:bg-[#B87333] hover:text-white hover:border-[#B87333] transition-all shadow-sm hover:shadow-lg hover:shadow-[#B87333]/30 transform hover:scale-[1.02]"
                                                        >
                                                            {suggest}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <MessageBubble
                                    key={index}
                                    message={message}
                                    user={user}
                                    onExpandChart={handleExpandChart}
                                />
                            )
                        ))}
                        {isTyping && <TypingIndicator />}
                        {/* Empty space for scrolling on mobile */}
                        <div className="h-20 md:h-0" />
                    </div>

                    {/* Chat Input */}
                    <div className="chat-area border-t border-gray-200 p-6 sticky bottom-0 bg-[#F8F6F3]/95 z-50 shadow-2xl shadow-gray-200">
                        <div className="flex items-end space-x-4">
                            <div className="flex-1">
                                <textarea
                                    ref={chatInputRef}
                                    id="chat-input"
                                    className="chat-input w-full px-4 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-[#B87333]/30 focus:border-[#B87333] transition-all duration-300 focus:translate-y-[-2px] shadow-lg shadow-gray-200/50"
                                    placeholder="Ask about oceanographic data, trends, or phenomena..."
                                    rows="1"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                ></textarea>
                            </div>
                            <button
                                onClick={() => sendMessage()}
                                className="bg-[#B87333] text-white p-4 rounded-xl hover:bg-[#B87333]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#B87333]/40 transform hover:scale-[1.05]"
                                disabled={!inputValue.trim() || isTyping}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Input suggestions */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {['What are the current ARGO float positions?', 'Show me thermocline depth variations', 'Analyze ocean heat content trends'].map(suggest => (
                                <button
                                    key={suggest}
                                    onClick={() => handleSuggestClick(suggest)}
                                    className="input-suggest px-3 py-1 bg-[#F8F6F3] rounded-full text-xs text-[#8B7D6B] hover:bg-[#B87333] hover:text-white transition-colors border border-transparent hover:border-[#B87333]"
                                >
                                    {suggest}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Chart Modal */}
            {isChartModalOpen && chartModalContent && (
                <div
                    id="chart-modal"
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]"
                    onClick={(e) => e.target.id === 'chart-modal' && setIsChartModalOpen(false)}
                >
                    <div className="bg-white rounded-2xl p-8 max-w-4xl mx-4 w-full shadow-2xl transition-all duration-300 transform scale-100">
                        <div className="flex items-center justify-between mb-6 border-b pb-3">
                            <h3 className="text-2xl font-display font-semibold text-[#2A2A2A]">Expanded Data Visualization</h3>
                            <button onClick={() => setIsChartModalOpen(false)} className="text-[#8B7D6B] hover:text-[#B87333] transition-colors p-2 rounded-full hover:bg-gray-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div id="chart-content" className="h-[400px] w-full">
                            <ModalChart />
                        </div>
                        <p className="mt-6 text-base text-[#8B7D6B] border-t pt-4 font-mono">{chartModalContent.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
