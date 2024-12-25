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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Award className="w-6 h-6 text-indigo-500 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-1">{issuer}</p>
        <p className="text-gray-400 text-sm mb-4">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-500 hover:text-indigo-400 transition-colors"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
