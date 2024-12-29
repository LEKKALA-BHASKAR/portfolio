import React, { useState } from 'react';
import { Github, Linkedin, Mail, User, Code, BookOpen } from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import CertificationCard from './components/CertificationCard';
import ProjectCard from './components/ProjectCard';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const certifications = [
    {
      title: "iNeuron Internship",
      issuer: "iNeuron Intelligence Pvt Ltd",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      link: "https://www.linkedin.com/posts/lekkala-bhaskar_ineuron-intelligence-pvt-ltd-internship-activity-7258459600721440769-ck3j"
    },
    {
      title: "React development",
      issuer: "Tech Grow",
      date: "2024",
      image:"/images/react.webp",
      link: "https://drive.google.com/file/d/1fJ5psxsh49IFi_7gWVH8mev0unt1-p2n/view?usp=drive_link"
    },
    {
      title: "Android App Development",
      issuer: "Android Studio",
      date: "2023",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
      link: "https://drive.google.com/file/d/1bXtkUI6ZwK7911EoWUd0xtx69x_SLoot/view"
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/iframe/d8f03edc02ae"
    },
    {
      title: "Python Problem Solving",
      issuer: "HackerRank",
      date: "2023",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/iframe/67f76da0c4f6"
    },
    {
      title: "Analyzing Data with Python",
      issuer: "edX",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://courses.edx.org/certificates/d6dc43c7eda0481696788f0ef711e5f3"
    },
    {
      title: "C++ Programming",
      issuer: "edX",
      date: "2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://courses.edx.org/certificates/e56cf3a1b85c46e085c1a73de1b1a0b5"
    },
    {
      title: "SOFTWARE ENGINEER",
      issuer: "HACKER RANK",
      date: "2024",
      image: "images/SE.avif",
      link: "https://www.hackerrank.com/certificates/e976910fa4cf"
    }
  ];

  const skills = [
    'Java', 'Python', 'C++', 
    'Android Development', 'Data Analysis',
    'Problem Solving', 'HTML/CSS',
    'JavaScript', 'React'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-black text-white z-50 border-b border-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold">Portfolio</span>
            <div className="flex space-x-6">
              {['about', 'certifications', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section )}
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

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
  <a href="https://www.instagram.com/syntax__error__18/" className="text-gray-800 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5a4.25 4.25 0 00-4.25 4.25v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25zm-4.25 3a5 5 0 100 10 5 5 0 000-10zm5.375-1.125a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm-5.375 2.625a3.375 3.375 0 110 6.75 3.375 3.375 0 010-6.75z" />
    </svg>
  </a>
</div>
</div>

        <div className="grid gap-8">
          {activeSection === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <ProfileCard
                title="About Me"
                icon={<User  className="w-6 h-6 text-black" />}
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
                title="Data Analysis Projects"
                description="Python-based data analysis and visualization projects"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                githubUrl="https://github.com/LEKKALA-BHASKAR"
              />
              <ProjectCard
                title="Portfolio Website"
                description="Personal portfolio built with React and Tailwind CSS"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                githubUrl="https://github.com/LEKKALA-BHASKAR"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
