import React, { useState } from 'react';
import CardCarousel from './CardCarousel';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p className="text-red-500 text-center">Error loading carousel. Please try again.</p>;
    }
    return this.props.children;
  }
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1); 

  const tabs = [
    { id: 1, name: 'Coding', icon: './assets/laptop.svg', iconWidth: '150px', activeBg: 'bg-orange-600', activeTextColor: 'text-white', shadowColor: '#9a3412' },
    { id: 2, name: 'Public speaking', icon: './assets/mic.svg', iconWidth: '73px', activeBg: 'bg-green-600', activeTextColor: 'text-white', shadowColor: '#1a3c34' },
    { id: 3, name: 'Chess', icon: './assets/horse.svg', iconWidth: '58px', activeBg: 'bg-yellow-600', activeTextColor: 'text-white', shadowColor: '#854d0e' },
    { id: 4, name: 'Home work help', icon: './assets/book.svg', iconWidth: '81px', activeBg: 'bg-blue-600', activeTextColor: 'text-white', shadowColor: '#1e3a8a' },
    { id: 5, name: 'App building', icon: './assets/mobile.svg', iconWidth: '62px', activeBg: 'bg-red-600', activeTextColor: 'text-white', shadowColor: '#991b1b' },
  ];

  const tabContent = {
    1: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <CardCarousel category="coding" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    2: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <CardCarousel category="public-speaking" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    3: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <CardCarousel category="chess" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    4: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <CardCarousel category="homework-help" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    5: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <CardCarousel category="app-building" />
          </div>
        </ErrorBoundary>
      </div>
    ),
  };

  return (
    <>
      <div className="w-full flex justify-center gap-8 mt-10 flex-wrap">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`md:h-[100px] flex align-baseline justify-between rounded-2xl w-auto md:w-[218px] cursor-pointer p-2 relative transition-all duration-300 ease-in-out ${
              activeTab === tab.id ? `${tab.activeBg} shadow-lg` : 'bg-gray-100'
            }`}
            style={{ 
              border: activeTab === tab.id ? `2px solid transparent` : '2px solid #E5E5E5',
              ...(activeTab === tab.id && { boxShadow: `-1px -3px 20px 2px ${tab.shadowColor}, 0 2px 4px 2px ${tab.shadowColor}` })
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            <span 
              className={`text-[16px] font-poppins mt-auto md:w-20 text-left transition-colors duration-300 ease-in-out ${
                activeTab === tab.id ? tab.activeTextColor : 'text-black'
              }`}
            >
              {tab.name}
            </span>
            <img className={`hidden md:block md:w-[${tab.iconWidth}] absolute right-0 top-[-30px]`} src={tab.icon} alt={tab.name} />
          </div>
        ))}
      </div>

      {/* Conditionally render content based on activeTab */}
      {tabContent[activeTab]}
    </>
  );
};

export default Tabs;