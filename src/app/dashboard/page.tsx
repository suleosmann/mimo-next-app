'use client'
import React from 'react';
import SideBar from './components/SideBar';
import useTabStore from '@/stores/useTabStore';
import Home from '../dashboard/home/Home';
import Profile from '../dashboard/profile/Profile';
import Statements from '../dashboard/statements/Statements';
import Scan from '../dashboard/scan/Scan';
import Header from './components/Header';
import Beneficiaries from '../dashboard/beneficiaries/Beneficiaries'
import Notifications from '../dashboard/notifications/Notifications'
import Settings from '../dashboard/settings/Settings'

const Page = () => {
    const activeTab = useTabStore((state) => state.activeTab);
    

    return (
        <div className='flex w-full min-h-screen'>
            <div className='sm:w-36'>
                <SideBar />
            </div>
            <div className='sm:w-5/6 w-full '>
                <div className='w-full'>
                    <Header />
                </div>
                <div className='w-full '>
                    {activeTab === 'Home' && <Home />}
                    {activeTab === 'Profile' && <Profile />}
                    {activeTab === 'Statements' && <Statements />}
                    {activeTab === 'Scan' && <Scan />}
                    {activeTab === 'Beneficiaries' && <Beneficiaries />}
                    {activeTab === 'Notification' && <Notifications />}
                    {activeTab === 'Settings' && <Settings />}
                </div>
            </div>
        </div>
    );
};

export default Page;

