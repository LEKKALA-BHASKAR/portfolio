import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MainContent from './components/MainContent';

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
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Header />
        <MainContent 
          activeSection={activeSection}
          certifications={certifications}
          skills={skills}
        />
      </main>
    </div>
  );
}

export default App;
