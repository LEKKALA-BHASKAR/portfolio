import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, issuer, date, image, link }) => {
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
        <div className="flex items-center mb-2">
          <Award className="w-5 h-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-1">{issuer}</p>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;