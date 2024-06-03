"use client"
import React from 'react';
import useTabStore from '@/stores/useTabStore';
import { FaFileAlt, FaBell, FaCog } from "react-icons/fa";
import Image from 'next/image';
import Profile from '../../../../public/assets/profile.jpeg'
import MimoBalance from '../../../../public/assets/mimo-balance.png'

const Header = () => {
    const activeTab = useTabStore((state) => state.activeTab);
    const setActiveTab = useTabStore((state) => state.setActiveTab);

    const handleNotificationClick = () => {
        setActiveTab("Notification");
    };

    const handleSettingClick = () => {
        setActiveTab("Settings")
    }
    const handleProfileClick = () => {
        setActiveTab("Profile")
    }


    return (
        <>
        <div className='flex justify-between text-custom-dark-green  w-full'>
            <div className='sm:ml-20 ml-5 mt-10 sm:mt-5'>
                {activeTab === 'Home' && (
                    <div>
                        <h1 className='text-2xl'>Morning</h1>
                        <h1 className='font-bold sm:text-3xl text-2xl'>Jane Smith</h1>
                    </div>
                )}
                {activeTab === 'Statements' && (
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>Statements</h1>
                    </div>
                )}
                {activeTab === 'Scan' && (
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>Scan</h1>
                    </div>
                )}
                {activeTab === 'Profile' && (
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>Profile</h1>
                    </div>
                )}
                {activeTab === 'Notification' && (
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>Notifications</h1>
                    </div>
                )}
                {activeTab === 'Settings' && (
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>Settings</h1>
                    </div>
                )}
                {activeTab === 'Beneficiaries' && (
                    <div>
                        <h1 className='text-2xl font-bold mt-5'>Beneficiaries</h1>
                    </div>
                )}
            </div>
            <div className='mt-10'>
                {activeTab === 'Home' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div>
                            <Image src={Profile} alt='Profile' className='w-16 h-16 rounded-full' onClick={handleProfileClick} />
                        </div>
                    </div>
                )}
                {activeTab === 'Beneficiaries' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div>
                            <Image src={Profile} alt='Profile' className='w-16 h-16 rounded-full' onClick={handleProfileClick} />
                        </div>
                    </div>
                )}
                {activeTab === 'Statements' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div>
                            <Image src={Profile} alt='Profile' className='w-16 h-16 rounded-full' onClick={handleProfileClick} />
                        </div>
                    </div>
                )}
                {activeTab === 'Scan' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div>
                            <Image src={Profile} alt='Profile' className='w-16 h-16 rounded-full' onClick={handleProfileClick} />
                        </div>
                    </div>
                )}
                {activeTab === 'Settings' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div>
                            <Image src={Profile} alt='Profile' className='w-16 h-16 rounded-full' onClick={handleProfileClick} />
                        </div>
                    </div>
                )}
                {activeTab === 'Profile' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div className='mt-5'>                        
                            <FaCog className='text-3xl' onClick={handleSettingClick}/>
                        </div>
                        
                    </div>
                )}
                {activeTab === 'Notification' && (
                    <div className='flex space-x-2 mr-3'>
                        <div className='mt-5'>                        
                            <FaBell className='text-3xl' onClick={handleNotificationClick}/>
                        </div>
                        <div className='mt-5'>                        
                            <FaCog className='text-3xl' onClick={handleSettingClick} />
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
        {activeTab === 'Home' &&(
            <div className='flex flex-col justify-center items-center  mt-3'>
            <Image src={MimoBalance} alt='MimoBalance' className='sm:w-64 h-8'/>
            <div className="flex justify-center items-center text-custom-green font-bold space-x-4">
          <div className="flex items-baseline space-x-1">
            <span className="text-xs">KES</span>
            <h1 className="sm:text-2xl">
              176,239.90
            </h1>
          </div>
        </div>
        </div>
        )}
        </>
    );
};

export default Header;

