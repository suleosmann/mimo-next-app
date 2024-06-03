import React, { useState } from 'react';
import { IndexType } from '../../types/types'

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(5).fill(''));

  const handleChange = (index: IndexType, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      const nextInput = document.querySelector(`input[data-otp-index="${index + 1}"]`) as HTMLInputElement;
      nextInput.focus();
    } else if (!value && index > 0) {
      const prevInput = document.querySelector(`input[data-otp-index="${index - 1}"]`) as HTMLInputElement;
      prevInput.focus();
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-white text-lg font-bold'>Verification Code </h1>
      <p className="text-white text-sm sm:px-56 mt-1 text-center opacity-70">Please enter the 5-digit verification code sent to your phone number &amp; email</p>
      <div className="flex justify-center mt-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            data-otp-index={index}
            autoComplete="off"
            className="w-16 h-16 mr-2 border-2 border-custom-green border-dashed bg-custom-pastel rounded-md text-center focus:outline-none focus:bg-white"
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
