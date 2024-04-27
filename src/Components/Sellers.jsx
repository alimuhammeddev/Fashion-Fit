import React, {useEffect} from 'react'
import KeenSlider from 'keen-slider';
import { lady, rating1, rating2, shoes, short, wishlist } from '../assets';

function Sellers() {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
    
        // Load the script asynchronously
        script.async = true;
    
        // Define a function to initialize the slider
        const initializeSlider = () => {
          const keenSlider = new KeenSlider(
            '#keen-slider',
            {
              loop: true,
              slides: {
                origin: 'center',
                perView: 1,
                spacing: 16,
              },
              breakpoints: {
                '(min-width: 1024px)': {
                  slides: {
                    origin: 'auto',
                    perView: 3,
                    spacing: 20,
                  },
                },
              },
            },
            []
          );
    
          const keenSliderPrevious = document.getElementById('keen-slider-previous');
          const keenSliderNext = document.getElementById('keen-slider-next');
    
          keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
          keenSliderNext.addEventListener('click', () => keenSlider.next());
        };
    
        // Set the onload event to initialize the slider after the script is loaded
        script.onload = initializeSlider;
    
        // Append the script to the document head
        document.head.appendChild(script);
    
        // Cleanup: Remove the script when the component unmounts
        return () => {
          document.head.removeChild(script);
        };
      }, []); // Empty dependency array ensures the effect runs only once
  return (
    <section>
    <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-0 xl:py-24">
        <div className='relative'>
        <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="absolute lg:-left-5 -left-9 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition hover:bg-[#CAD7DF] text-white z-10 bg-[#557F99]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="absolute lg:-right-5 -right-9 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition bg-[#557F99] hover:bg-[#CAD7DF] text-white z-10"
          >
           <svg
            className="size-6 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      <div className="-mx-6 lg:col-span-2 lg:mx-0">
        <div className='bg-[#0A3B5A] p-3 py-3 w-fit'>
            <h1 className='text-[#FFFFFF] lg:text-[24px] text-[15px] font-medium'>Our Best Sellers</h1>
        </div>
        <div id="keen-slider" className="keen-slider -mt-10">
          <div className="keen-slider__slide justify-center flex">
            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                <div className='relative'>
                    <img src={lady} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Corset Midi Dress</h1>
                    <h2 className='text-[16px]'>N34,000</h2>
                </div>
                <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                  <img src={rating1} alt="" />
                  <div>
                    <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                  </div>
                </div>
            </div>
          </div>
  
          <div className="keen-slider__slide justify-center flex">
            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                <div className='relative'>
                    <img src={short} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>Textured Shorts</h1>
                    <h2 className='text-[16px]'>N25,000</h2>
                </div>
                <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                  <img src={rating1} alt="" />
                  <div>
                    <h1 className='text-[10px]'>4.5 (41 reviews)</h1>
                  </div>
                </div>
            </div>
          </div>
          <div className="keen-slider__slide justify-center flex">
            <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                <div className='relative'>
                    <img src={shoes} alt="" />
                    <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                        <img src={wishlist} alt="" />
                    </div>
                </div>
                <div className='text-center space-y-2'>
                    <h1 className='mt-2 text-[20px] font-medium'>White Sneakers</h1>
                    <h2 className='text-[16px]'>N33,000</h2>
                </div>
                <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                  <img src={rating2} alt="" />
                  <div>
                    <h1 className='text-[10px]'>4.0 (24 reviews)</h1>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  </section>
  )
}

export default Sellers 