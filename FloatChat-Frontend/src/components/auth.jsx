import React, { useState } from 'react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    institution: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(`${isSignUp ? 'Account created' : 'Signed in'} successfully!`);
  };

  const handleGuestAccess = () => {
    console.log('Guest access');
    alert('Welcome to Samudra-I as a guest!');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F8F6F3 0%, #F5F3F0 100%)'
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left circle */}
        <div 
          className="absolute w-20 h-20 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #D4B896 0%, #C4A484 100%)',
            top: '8%',
            left: '8%',
            animationDelay: '0s'
          }}
        />
        
        {/* Top right square */}
        <div 
          className="absolute w-16 h-16 rounded-lg opacity-15 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #B8906B 0%, #A67C5A 100%)',
            top: '15%',
            right: '12%',
            animationDelay: '2s'
          }}
        />
        
        {/* Bottom left circle */}
        <div 
          className="absolute w-12 h-12 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #D4B896 0%, #C4A484 100%)',
            bottom: '25%',
            left: '15%',
            animationDelay: '4s'
          }}
        />
        
        {/* Bottom right rounded square */}
        <div 
          className="absolute w-24 h-24 rounded-xl opacity-15 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #B8906B 0%, #A67C5A 100%)',
            bottom: '18%',
            right: '8%',
            animationDelay: '1s'
          }}
        />
        
        {/* Additional floating elements */}
        <div 
          className="absolute w-8 h-8 rounded-full opacity-10 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #D4B896 0%, #C4A484 100%)',
            top: '60%',
            left: '5%',
            animationDelay: '3s'
          }}
        />
        
        <div 
          className="absolute w-14 h-14 rounded-lg opacity-12 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #B8906B 0%, #A67C5A 100%)',
            top: '40%',
            right: '5%',
            animationDelay: '1.5s'
          }}
        />
      </div>

      <div className="w-full max-w-md z-10 relative">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #B87333 0%, #A0632B 100%)'
              }}
            >
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-3xl text-gray-800">Samudra-I</span>
          </div>
          <p className="text-gray-600 text-lg">AI-Powered Oceanographic Research</p>
        </div>

        {/* Main Auth Card */}
        <div 
          className="rounded-2xl p-8 shadow-2xl"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          {/* Toggle Buttons */}
          <div className="relative bg-gray-100 rounded-lg p-1 mb-8">
            <div 
              className={`absolute top-0 left-0 w-1/2 h-full rounded-md transition-transform duration-300 ease-out ${
                isSignUp ? 'transform translate-x-full' : ''
              }`}
              style={{ background: '#B87333' }}
            />
            <div className="flex relative z-10">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                  !isSignUp ? 'text-white' : 'text-gray-600'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-3 text-sm font-medium rounded-md transition-colors duration-200 ${
                  isSignUp ? 'text-white' : 'text-gray-600'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Sign In Form */}
          {!isSignUp && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="researcher@institution.edu"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-orange-600 hover:text-orange-700">
                  Forgot password?
                </a>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-lg font-medium text-white transition-colors duration-200 hover:opacity-90"
                style={{ background: '#B87333' }}
              >
                Sign In to Samudra-I
              </button>
            </div>
          )}

          {/* Sign Up Form */}
          {isSignUp && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Institution/Organization
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="Oceanographic Institute"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="researcher@institution.edu"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="Create a strong password"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 rounded border-gray-300 text-orange-500 focus:ring-orange-400"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-orange-600 hover:text-orange-700">
                    Privacy Policy
                  </a>
                </span>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-lg font-medium text-white transition-colors duration-200 hover:opacity-90"
                style={{ background: '#B87333' }}
              >
                Create Account
              </button>
            </div>
          )}

          {/* Guest Access Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Or try Samudra-I without an account
            </p>
            <button
              onClick={handleGuestAccess}
              className="w-full py-3 rounded-lg font-medium border-2 transition-colors duration-200 hover:text-white hover:border-orange-600"
              style={{ 
                borderColor: '#B87333', 
                color: '#B87333'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#B87333';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#B87333';
              }}
            >
              Continue as Guest
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            By accessing Samudra-I, you agree to our research collaboration terms
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;