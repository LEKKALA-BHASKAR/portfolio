import React, { ReactNode } from 'react';

interface ProfileCardProps {
  title: string;
  icon: ReactNode;
  content: ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, icon, content }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-600 rounded-lg mr-3">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="text-gray-300">
        {content}
      </div>
    </div>
  );
};

export default ProfileCard;