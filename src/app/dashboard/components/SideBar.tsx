"use client"
import React, { useState } from 'react';
import { FaArrowLeft, FaHome, FaFileAlt, FaUser, FaBell, FaCog, FaQrcode } from 'react-icons/fa';
import useTabStore from '@/stores/useTabStore';

const SideBar = () => {
    const activeTab = useTabStore((state) => state.activeTab);
    const setActiveTab = useTabStore((state) => state.setActiveTab);

  const tabLabels = [
    { label: 'Home', icon: <FaHome /> },
    { label: 'Statements', icon: <FaFileAlt /> },
    { label: 'Scan', icon: <FaQrcode /> },
    { label: 'Profile', icon: <FaUser /> },
  ];

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };


  return (
    <div className="fixed bottom-0 w-full bg-custom-dark-green sm:border-t-0 border-t border-custom-pastel md:w-28 md:left-0 md:top-0 md:h-full">
      <div className="flex justify-around p-4 md:flex-col">
        {tabLabels.map((tab) => (
          <button
            key={tab.label}
            className={`flex flex-col items-center sm:mt-12 sm:text-3xl ${
              activeTab === tab.label ? 'text-white' : 'text-custom-green'
            }`}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.icon}
            <span className="text-xs sm:text-lg">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

