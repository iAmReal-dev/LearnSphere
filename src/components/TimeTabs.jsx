import React, { useState } from 'react';
import ThreeCardCarousel from './ThreeCardCarousel';

// Simple Error Boundary Component
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

const TimeTabs = () => {
  const [activeTab, setActiveTab] = useState(1); // Default to first tab (Morning classes)
  const [hoveredTab, setHoveredTab] = useState(null); // null or tab id

  // Tab data
  const tabs = [
    { id: 1, name: 'Morning classes', time: '8am - 12pm', icon: './assets/sun.svg', iconWidth: '150px', activeBg: 'bg-blue-200', activeTextColor: 'text-black', activeColor: '#bfdbfe', borderColor: '#93c5fd' },
    { id: 2, name: 'Afternoon classes', time: '12pm - 4pm', icon: './assets/sun2.svg', iconWidth: '73px', activeBg: 'bg-orange-200', activeTextColor: 'text-black', activeColor: '#fed7aa', borderColor: '#fb923c' },
    { id: 3, name: 'Evening classes', time: '4pm - 8pm', icon: './assets/moon.svg', iconWidth: '58px', activeBg: 'bg-red-200', activeTextColor: 'text-black', activeColor: '#fecaca', borderColor: '#f87171' },
    { id: 4, name: 'Late evening classes', time: '8pm - 11pm', icon: './assets/moon2.svg', iconWidth: '81px', activeBg: 'bg-purple-200', activeTextColor: 'text-black', activeColor: '#d8b4fe', borderColor: '#c084fc' },
  ];

  // Content for each tab
  const tabContent = {
    1: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <ThreeCardCarousel category="morning-classes" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    2: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <ThreeCardCarousel category="afternoon-classes" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    3: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <ThreeCardCarousel category="evening-classes" />
          </div>
        </ErrorBoundary>
      </div>
    ),
    4: (
      <div className="flex gap-3 mx-auto justify-center mt-6 flex-col items-center">
        <ErrorBoundary>
          <div className="w-full max-w-[100vw]">
            <ThreeCardCarousel category="late-evening-classes" />
          </div>
        </ErrorBoundary>
      </div>
    ),
  };

  return (
    <>
      <div className="w-full flex justify-center gap-4 flex-wrap">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isHovered = hoveredTab === tab.id;
          const showBorder = isActive || isHovered;
          // use the active bg when either active or hovered
          const bgClass = isActive || isHovered ? tab.activeBg : 'bg-gray-100';
          // optionally change text color on hover as well
          const titleTextClass = isActive || isHovered ? tab.activeTextColor : 'text-black';
          const timeTextClass = isActive || isHovered ? 'text-gray-800' : 'text-gray-600';

          return (
            <div
              key={tab.id}
              className={`flex align-baseline justify-between h-[70px] rounded-2xl cursor-pointer p-2 pb-0 transition-all duration-300 ease-in-out ${bgClass} ${isActive ? 'shadow-lg' : ''}`}
              style={{
                border: showBorder ? `2px solid ${tab.borderColor}` : '2px solid #E5E5E5',
                ...(isActive && { boxShadow: `0 4px 20px 2px ${tab.activeColor}, 0 2px 4px 2px ${tab.activeColor}` }),
                ...(!isActive && { boxShadow: `0 4px 20px 2px transparent, 0 2px 4px 2px transparent` }),
              }}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <div className="flex flex-col text-left">
                <span
                  className={`text-[16px] font-poppins whitespace-nowrap transition-colors duration-300 ease-in-out ${titleTextClass}`}
                >
                  {tab.name}
                </span>
                <span
                  className={`text-[14px] whitespace-nowrap transition-colors duration-300 ease-in-out ${timeTextClass}`}
                >
                  {tab.time}
                </span>
              </div>
              <img className='hidden md:block' style={{ width: tab.iconWidth }} src={tab.icon} alt={tab.name} />
            </div>
          );
        })}
      </div>

      {/* Conditionally render content based on activeTab */}
      {tabContent[activeTab]}
    </>
  );
};

export default TimeTabs;
