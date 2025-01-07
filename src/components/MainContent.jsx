import React from 'react';
import { User, Code, BookOpen } from 'lucide-react';
import ProfileCard from './ProfileCard';
import CertificationCard from './CertificationCard';
import ProjectCard from './ProjectCard';

const MainContent = ({ activeSection, certifications, skills }) => {
  return (
    <div className="grid gap-8">
      {activeSection === 'about' && (
        <div className="space-y-8 animate-fadeIn">
          <ProfileCard
            title="About Me"
            icon={<User className="w-6 h-6 text-black" />}
            content="I'm a passionate B.Tech student specializing in Computer Science & Engineering. With a strong foundation in multiple programming languages and a keen interest in software development, I'm constantly working on projects that challenge and enhance my skills. My experience ranges from Android development to data analysis, showcasing my versatility as a developer."
          />
          <ProfileCard
            title="Technical Skills"
            icon={<Code className="w-6 h-6 text-black" />}
            content={
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <span key={skill} className="bg-gray-800 rounded-full px-4 py-1 text-sm text-white text-center">
                    {skill}
                  </span>
                ))}
              </div>
            }
          />
          <ProfileCard
            title="Education"
            icon={<BookOpen className="w-6 h-6 text-black" />}
            content={
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bachelor of Technology</h3>
                  <p className="text-gray-500">Computer Science & Engineering</p>
                  <p className="text-gray-600">Currently Pursuing</p>
                </div>
              </div>
            }
          />
        </div>
      )}

      {activeSection === 'certifications' && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              {...cert}
            />
          ))}
        </div>
      )}

      {activeSection === 'projects' && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
          <ProjectCard
            title="Android Development"
            description="Mobile application development using Android Studio"
            image="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80"
            githubUrl="https://github.com/LEKKALA-BHASKAR"
          />
          <ProjectCard
            title="SeminarHallBookingSystem"
            description="web-based Seminar Hall Booking System projects"
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
            githubUrl="https://seminar-hall-booking-system-qall.vercel.app"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio built with React and Tailwind CSS"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            githubUrl="https://profile-overview.vercel.app/"
          />
          <ProjectCard
            title="Intern management System created with team for IISPPR"
            description="team made project"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            githubUrl="scaleindia.org.in"
          />
          <ProjectCard
            title="Quizz app"
            description="test your technical knowledge "
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            githubUrl="quiz-app-green-gamma.vercel.app"
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;