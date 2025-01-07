import React from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold">Portfolio</span>
          <div className="flex space-x-6">
            {['about', 'certifications', 'projects'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors 
                  ${activeSection === section
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;