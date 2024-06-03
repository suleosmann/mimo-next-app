import React from 'react'

const Login = () => {
    return (
        <div >
            <label className='text-white opacity-70'>Enter National Id</label>
            <input
                type="text"
                placeholder="Enter 8 digits"
                className="w-full mt-2 py-2 px-4 mb-4 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
            />
            <label className='text-white opacity-70'>Enter Your Pin</label>
            <input
                type="password"
                placeholder="****"
                className="w-full mt-2 py-2 px-4 bg-gray-200 rounded-md focus:outline-none focus:bg-white"
                maxLength={4}
            />

        </div>
    )
}

export default Login
