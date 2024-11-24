import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githubUrl }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <div className="flex space-x-3">
          <a 
            href={githubUrl}
            className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 mr-1" />
            View Code
          </a>
          <a 
            href={githubUrl}
            className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;