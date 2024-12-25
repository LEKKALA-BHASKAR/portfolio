import React, { ReactNode } from 'react';

interface ProfileCardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  isDarkMode: boolean; // New prop to toggle light/dark mode
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, icon, content, isDarkMode }) => {
  return (
    <div
      className={`rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${
        isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-900'
      }`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`p-2 rounded-lg mr-3 ${
            isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800'
          }`}
        >
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default ProfileCard;
