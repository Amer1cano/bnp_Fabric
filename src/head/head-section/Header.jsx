import { useState, useEffect } from 'react';
import headSofa from '../../../public/bed-images/head-sofa.png';
// import ikat from '../../data/winter-images/ikat.jpg';
// import bambi from '../../data/winter-images/bambi.jpg';

const Header = () => {
  const images = [headSofa, headSofa, headSofa, headSofa,headSofa];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 3000; // 5 seconds interval
    const step = 100 / (interval / 100); // Calculate progress step

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          return 0;
        }
        return prevProgress + step;
      });
    }, 100);

    return () => clearInterval(progressInterval); // Clean up on unmount
  }, [images.length]);

  return (
    <div className='p-4 m-auto mt-[-1rem]'>
      <div className='bg-black  opacity-80 rounded-2xl pl-28 flex items-center justify-between 
      miniTablet:pl-0
      bigPhone:pl-0
      phone:pl-0
      miniPhone:pl-0
      '>
        <div className="relative rounded-xl overflow-hidden w-[37.5rem] h-[37.5rem]
        miniDesktop:z-10 miniDesktop:w-[60rem]
        bigTablet:z-20 bigTablet:w-[50rem]
        miniTablet:w-full miniTablet:h-[30rem]
        bigPhone:w-full bigPhone:h-[25rem]
        phone:w-full phone:h-[20rem]
        miniPhone:w-full miniPhone:h-[18rem]
        
        
        
        ">
          <div
            className="absolute inset-0 flex transition-transform duration-1000 
            "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index}`}
                className="w-[37.5rem]  h-[37.5rem] object-cover
                miniDesktop:z-10 miniDesktop:w-[50rem] miniDesktop:object-center
                bigTablet:z-10 bigTablet:w-[40rem] bigTablet:object-center
                tablet:h-[25rem] m-auto 
                miniTablet:w-full
                bigPhone:w-full bigPhone:h-[26rem]
                phone:w-full phone:h-[22rem]
                miniPhone:w-full miniPhone:h-[24rem]

                "
              />
            ))}
          </div>
        </div>

        <div className='relative text-white'>
          <div className='absolute top-1/2 right-4 transform -translate-y-1/2 
          bigPhone:right-1
          phone:right-0
          miniPhone:right-0
          '>
            <svg className='w-24 h-24 mt-[30rem]
            miniTablet:mt-[25rem]
            bigPhone:mt-[22rem] 
            phone:mt-[17rem]
            miniPhone:mt-[16rem]
            ' viewBox='0 0 100 100'>
              <circle
                cx='35'
                cy='35'
                r='30'
                stroke='lightgray'
                strokeWidth='6'
                fill='none'
              />
              <circle
                cx='35'
                cy='35'
                r='30'
                stroke='yellow' // Unique yellow border color
                strokeWidth='6'
                strokeDasharray='282.6' // Circumference of the circle
                strokeDashoffset={(282.6 * (100 - progress)) / 100}
                fill='none'
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
            </svg>
          </div>

          <h5 className='text-4xl text-right font-bold
          miniDesktop:text-3xl
          bigTablet:text-2xl
          tablet:text-2xl
          miniTablet:hidden
          bigPhone:hidden
          phone:hidden
          miniPhone:hidden
          '>
            Bukhara
          </h5>
          <h3 className='text-7xl text-right font-bold
          miniDesktop:text-6xl
          bigTablet:text-5xl
          tablet:text-5xl
           miniTablet:hidden
           bigPhone:hidden
          phone:hidden
          miniPhone:hidden
          '>
            Natural
          </h3>
          <h1 className='text-9xl text-right font-bold
          miniDesktop:text-8xl
          bigTablet:text-7xl
          tablet:text-7xl
           miniTablet:hidden
           bigPhone:hidden
          phone:hidden
          miniPhone:hidden
          '>
            PRODU
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
