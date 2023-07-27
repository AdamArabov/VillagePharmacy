import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useRouter } from 'next/router';


export default function Carousels() {
  const router = useRouter()
  const slides = [
    {
      url: 'https://lh5.googleusercontent.com/p/AF1QipMCYRfp03ii9rEQ0xD1BrWv7K6O6Ql5GC9bcjwc=w600-h650-p-k-no',
      buttonText: 'Services',
      link: '/services'
      
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipMONPUioJHgOtFG2JRu1SYMOFWu_S5dDRH_q_iH=s680-w680-h510',
      buttonText: 'Products',
      link: '/products'
    },
    {
      url: 'https://lh3.googleusercontent.com/p/AF1QipMF4Ol0QJx45FzdCodAwPQJTHcBvmOMZlGM1BV7=s680-w680-h510',
      buttonText: 'About Us',
      link: '/contact'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, );

  return (
    <div className='max-w-[75%] mx-auto h-[500px] m-auto py-16 px-4 relative group'>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          className={`w-full h-full rounded-2xl bg-center bg-cover ${
            slideIndex === currentIndex ? '' : 'hidden'
          }`}
          style={{ backgroundImage: `url(${slide.url})` }}
        >
          {/* Button */}
          <button
            className='absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded-md'
            onClick={() => {
              if (slide.link) {
                router.push(slide.link);
              }}}
          >
            {slide.buttonText}
          </button>
        </div>
      ))}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? 'text-blue-500' : ''
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

