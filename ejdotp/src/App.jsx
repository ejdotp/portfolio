import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import CareerPage from './pages/CareerPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';

// --- Data - You can easily update your info here ---
const personalInfo = {
  name: "E. Jagadeeswar Patro",
  location: "Bhubaneswar, Odisha",
  linkedin: "https://linkedin.com/in/ejdotp",
  github: "https://github.com/ejdotp",
};

const pageConfig = {
  home: {
    title: 'Home', vol: '1', sections: [
      { id: 'aboutme', title: 'About Me' },
      { id: 'projects', title: 'Projects' },
      { id: 'cocurricular', title: 'Co-curricular' },
      { id: 'gallery-preview', title: 'Creations' }
    ]
  },
  career: {
    title: 'Career', vol: '2', sections: [
      { id: 'careertimeline', title: 'Timeline' }
    ]
  },
  gallery: { title: 'Gallery', vol: '3', sections: [] },
  resume: { title: 'Resume', vol: '4', sections: [] },
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'career':
        return <CareerPage />;
      case 'gallery':
        return <GalleryPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const currentVol = pageConfig[currentPage]?.vol || '1';

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="font-serif bg-[#FDFDF5] dark:bg-[#1A1A1A] text-[#333] dark:text-[#E0E0E0] min-h-screen transition-colors duration-500">
        <div className="flex">
          <Sidebar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            personalInfo={personalInfo}
            pageConfig={pageConfig}
          />
          <main className="w-full">
            <div className="max-w-6xl mx-auto sm:p-8 md:p-12">
              <Header
                name={personalInfo.name}
                location={personalInfo.location}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                currentVol={currentVol}
              />
              {renderPage()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}