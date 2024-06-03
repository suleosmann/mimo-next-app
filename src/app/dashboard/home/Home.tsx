'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useState } from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import images from '@/images';

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showGreenDiv, setShowGreenDiv] = useState(false);
  const [billerContainer, setBillerContainer] = useState(false);
  const [addBill, setAddBill] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setShowGreenDiv(true);
  };

  const handleReturnToSlideshow = () => {
    setSelectedImage(null);
    setShowGreenDiv(false);
  };

  const handleBillClick = () => {
    setAddBill((prev) => !prev);
    setBillerContainer(false);
  };

  return (
    <div className="flex flex-col justify-center items-center sm:min-h-screen h-[60vh] p-4">
      {selectedImage ? (
        <div className="relative w-full h-[80vh] flex items-center justify-center">
          <div onClick={handleReturnToSlideshow} className="cursor-pointer absolute top-0 w-64 h-36 z-20">
            <Image
              src={selectedImage}
              alt="Selected Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg cover"
            />
          </div>
        </div>
      ) : (
        <Slider {...settings} initialSlide={currentSlide} className="w-[80vw] max-w-screen-lg sm:-mt-64">
          {images.map((src, index) => (
            <div key={index} className="h-[60vh] flex items-center justify-center p-2">
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
      {showGreenDiv && (
        <div className='bg-custom-dark-green absolute sm:top-96 top-64 h-[58vh] w-full sm:h-[50vh] sm:w-[60vw] z-10 rounded-lg'>
          <h1 className="mt-28 text-center mb-6 text-xs text-white font-bold">
            Tap on card to close
          </h1>
          {!billerContainer && (
            <div className='sm:ml-[420px] ml-20'>
              {addBill ? (
                <div
                  className="w-64 bg-gray-200 rounded-lg p-4"
                  onClick={handleBillClick}
                >
                  <h1 className="font-bold text-center">Add a Bill</h1>
                  <div className="mt-4 text-start text-sm">
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="border rounded-lg p-2 w-full mr-2 bg-custom-dark-green"
                      />
                      <input
                        type="text"
                        placeholder="Enter Account Number"
                        className="border rounded-lg p-2 w-full mr-2 bg-custom-dark-green"
                      />
                      <button className="bg-custom-green w-full text-custom-dark-green font-bold rounded-lg p-2 px-4">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="w-[140px] h-[97px] bg-white rounded-lg flex flex-col justify-center items-center"
                  onClick={handleBillClick}
                >
                  <div className="space-y-2 mt-2 text-center">
                    <h1 className="font-bold text-custom-green text-bold text-lg">
                      + ADD
                    </h1>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Page;
