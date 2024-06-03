"use client";
import React from 'react';
import useTabStore from '@/stores/useTabStore';
import Profile from '../../../../public/assets/profile.jpeg';
import Image from 'next/image';

const Page = () => {
  const setActiveTab = useTabStore((state) => state.setActiveTab);

  const handleBeneficiaryClick = () => {
    setActiveTab('Beneficiaries');
  };

  return (
    <div className="flex flex-col items-center min-h-screen font-montserrat overflow-y-auto">
      <div
        className="flex justify-center items-center w-[160px] h-[160px] rounded-full mt-10"
        style={{
          borderWidth: '8px',
          borderStyle: 'solid',
          borderTopColor: '#4DBFA3',
          borderRightColor: '#869794',
          borderBottomColor: '#4DBFA3',
          borderLeftColor: '#4DBFA3',
        }}
      >
        <Image
          src={Profile}
          alt="Profile image"
          className="w-[142px] h-[142px] rounded-full"
        />
      </div>
      <div className="mt-2 text-center">
        <div className="text-lg font-extrabold">60%</div>
        <div className="text-xs">Complete</div>
      </div>
      <div className="bg-white w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 h-auto mt-5 p-4 rounded-lg space-y-3">
        <div className="flex justify-between">
          <h1 className="text-lg sm:text-2xl font-bold">Personal Details</h1>
          <h4 className="text-xs sm:text-sm">Edit</h4>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-1/2">
            <div>
              <h1 className="font-bold text-xs sm:text-lg">First Name</h1>
              <h1 className="text-sm  opacity-60">Jane</h1>
            </div>
            <div>
              <h1 className="font-bold text-xs sm:text-lg">Phone Number</h1>
              <h1 className="text-sm  opacity-60">+254 711 000 000</h1>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div>
              <h1 className="font-bold text-xs sm:text-lg">Last Name</h1>
              <h1 className="text-sm  opacity-60">Smith</h1>
            </div>
            <div>
              <h1 className="font-bold text-xs sm:text-lg">Email</h1>
              <h1 className="text-sm  opacity-60">j.smith@mail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 h-auto mt-5 p-4 rounded-lg">
        <div className="flex justify-between">
          <h1 className="text-lg sm:text-2xl font-bold">Beneficiaries</h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="mt-3">
            <span className="font-bold">3</span> Jane{' '}
            <span className="font-bold">+3 more</span>
          </div>
          <button
            className="bg-custom-green p-2 rounded-lg"
            onClick={handleBeneficiaryClick}
          >
            View
          </button>
        </div>
      </div>
      <div className="bg-white w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 h-auto mt-5 p-4 rounded-lg">
        <div>
          <h1 className="text-lg sm:text-2xl font-bold">Registered Top Up Options</h1>
        </div>
        <div className="mt-4 flex flex-wrap justify-between sm:space-x-0 space-x-1">
          {['Mpesa', 'Card', 'Bank', 'RTGS'].map((option) => (
            <div
              key={option}
              className="bg-custom-green sm:w-24 w-16 h-16 text-white rounded-lg flex justify-center items-center mb-2"
            >
              <span>{option}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-custom-green w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 mt-5 h-12 rounded-lg">
        LOG OUT
      </button>
    </div>
  );
};

export default Page;
