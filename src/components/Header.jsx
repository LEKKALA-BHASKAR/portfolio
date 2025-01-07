import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-black">
        LEKKALA BHASKAR
      </h1>
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/LEKKALA-BHASKAR" className="text-gray-800 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
          <Github className="w-7 h-7" />
        </a>
        <a href="https://www.linkedin.com/in/LEKKALA-BHASKAR" className="text-gray-800 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-7 h-7" />
        </a>
        <a href="mailto:bassnaidu1242@gmail.com" className="text-gray-800 hover:text-black transition-colors">
          <Mail className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default Header;