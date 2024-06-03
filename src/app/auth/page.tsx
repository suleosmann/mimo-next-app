"use client"
import React from 'react';
import BgImage from "../../../public/assets/BgImage.jpeg";
import Logo from "../../../public/assets/MiMologo.png";
import Profile from "../../../public/assets/profile.jpeg";
import { useAuthStore } from "../../stores/authStore";
import Registration from './Registration';
import Login from './Login';
import OTPInput from './OTPInput';
import PinCreation from './PinCreation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
    const { authType, setAuthType } = useAuthStore();
    const router = useRouter();

    const handleRegisterClick = () => {
        setAuthType('register');
    };

    const handleLoginClick = () => {
        setAuthType('login');
    };

    const handleMainButtonClick = () => {
        switch (authType) {
            case 'register':
                setAuthType('otp');
                break;
            case 'otp':
                setAuthType('pin');
                break;
            case 'pin':
                setAuthType('login');
                break;
            case 'login':
                router.push('/dashboard');
                break;
            default:
                break;
        }
    };

    const getButtonText = () => {
        switch (authType) {
            case 'register':
                return 'Register';
            case 'login':
                return 'Login';
            case 'otp':
                return 'Verify OTP';
            case 'pin':
                return 'Create Pin';
            default:
                return 'Submit';
        }
    };

    return (
        <div className='flex h-screen'>
            <div className='hidden sm:block sm:w-1/3 sm:h-full cover'>
                <Image src={BgImage} alt='BgImage' className='w-full h-full' />
            </div>

            <div className='sm:w-2/3 w-full flex flex-col justify-center items-center' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Image src={Logo} alt='Logo' className='-mt-20 mb-20' />
                <div className='bg-custom-dark-green sm:w-2/3 w-full h-[60vh] flex flex-col items-center'>
                    <div>
                        <Image src={Profile} alt='Profile' className='mt-2 sm:w-32 sm:h-32 h-16 w-16 border-2 border-custom-green rounded-full' />
                    </div>
                    <div className='sm:w-[40vw] w-96 mx-12 h-20 bg-custom-pastel m-2 flex justify-center space-x-4 pt-4'>
                        <button
                            className={`h-12 mb-2 px-10 ${authType === 'register' ? 'bg-custom-dark-green border-2 border-custom-green rounded-2xl' : ''}`}
                            onClick={handleRegisterClick}
                        >
                            Register
                        </button>
                        <button
                            className={`h-12 mb-2 px-10 ${authType === 'login' ? 'bg-custom-dark-green border-2 border-custom-green rounded-2xl' : ''}`}
                            onClick={handleLoginClick}
                        >
                            Login
                        </button>
                    </div>
                    <div className='w-full h-full m-8 px-10'>
                        {authType === "register" && (<Registration />)}
                        {authType === "login" && (<Login />)}
                        {authType === "otp" && (<OTPInput />)}
                        {authType === "pin" && (<PinCreation />)}
                    </div>
                    <div>
                    </div>
                </div>
                <button 
                    className='sm:w-2/3 w-full h-16 bg-custom-green mt-2 rounded-2xl'
                    onClick={handleMainButtonClick}
                >
                    {getButtonText()}
                </button>
            </div>
        </div>
    );
};

export default Page;
