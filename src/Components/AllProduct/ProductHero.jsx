import React, { useEffect, useRef } from 'react'
import KeenSlider from 'keen-slider';
import { blackarrow, blackgown2, blackgown3, blackgown4, blackgown5, rating1, smallblackgown1, smallblackgown2, smallblackgown3, smallblackgown4, wishlist, } from '../../assets'

function ProductHero () {
    const sliderRef = useRef(null);
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
    
        // Load the script asynchronously
        script.async = true;
    
        // Define a function to initialize the slider
        const initializeSlider = () => {
          const keenSlider = new KeenSlider(
            "#product-keen-slider",
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
                    perView: 1,
                    spacing: 16,
                  },
                },
              },
            },
            []
          );
    
          const keenSliderPrevious = document.getElementById("product-keen-slider-previous");
          const keenSliderNext = document.getElementById("product-keen-slider-next");
    
          keenSliderPrevious.addEventListener('click', () => {
            keenSlider.prev();
          });
    
          keenSliderNext.addEventListener('click', () => {
            keenSlider.next();
          });
    
          const thumbnails = document.querySelectorAll('#thumbnail-container li');
          
          const updateActiveThumbnail = () => {
            thumbnails.forEach((thumb, index) => {
              if (index === keenSlider.track.details.rel) {
                thumb.classList.add('border-[#557F99]');
                thumb.classList.add('border-2');
              } else {
                thumb.classList.remove('border-[#557F99]');
                thumb.classList.remove('border-2');
              }
            });
          };

          // Update thumbnails on slide change
        keenSlider.on('slideChanged', () => {
            updateActiveThumbnail();
        });

    
          updateActiveThumbnail(); // Initial call to set the first thumbnail as active
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
        <div>
            <h1 className='text-[#999999] font-semibold'>Home / Collections / All Products</h1>
        </div>
        <div className='mt-7 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            <div>
            <ul id='thumbnail-container' className='space-y-4'>
                <li className='border-[#557F99] border-2 w-fit'><img src={smallblackgown1} alt="" /></li>
                <li className='w-fit'><img src={smallblackgown2} alt="" /></li>
                <li className='w-fit'><img src={smallblackgown3} alt="" /></li>
                <li className='w-fit'><img src={smallblackgown4} alt="" /></li>
            </ul>
            </div>
        <div>
            <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-0 xl:py-24 lg:-mt-16">
            <div className='relative lg:-space-x-56'>
                <button
                    aria-label="Previous slide"
                    id="product-keen-slider-previous"
                    className="absolute lg:-left-60 -left-9 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition hover:bg-[#CAD7DF] text-white z-10 bg-[#557F99]"
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
                    id="product-keen-slider-next"
                    className="absolute lg:right-16 -right-9 top-1/2 transform -translate-y-1/2 rounded-full p-2 transition bg-[#557F99] hover:bg-[#CAD7DF] text-white z-10"
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
        <div className="-mx-6 lg:col-span-2 lg:mx-0 flex">
            <div id="product-keen-slider" className="keen-slider -mt-10">
                <div className="keen-slider__slide justify-center">
                    <div className='pb-2 mt-10 '>
                    <img src={blackgown2} alt=""/>
                    </div>
                </div>
    
                <div className="keen-slider__slide justify-center">
                    <div className=' w-fit pb-2 mt-10'>
                        <img src={blackgown3} alt="" />
                    </div>
                </div>

                <div className="keen-slider__slide justify-center">
                    <div className='w-fit pb-2 mt-10'>
                        <img src={blackgown4} alt="" />
                    </div>
            ` </div>

                <div className="keen-slider__slide justify-center">
                    <div className='w-fit pb-2 mt-10'>
                        <img src={blackgown5} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>

        <div>
            <h1 className='lg:text-[24px] text-[#141415] font-semibold'>Black Mesh Gown</h1>
            <h2 className='lg:text-[28px] font-bold text-[#215373]'>N16,000</h2>
            <div className='flex items-center mx-auto space-x-1 mt-2'>
                    <img src={rating1} alt="" />
                <div>
                    <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                </div>
            </div>
            <p className='text-[12px] text-[#307098] font-bold underline'>Size guide</p>
            <div className='flex items-center gap-6'>
                <div>
                    <div className='flex items-center justify-between space-x-10 border lg:w-[180px] p-2'>
                        <h1 className='lg:text-[16px] text-[12px]'>Size</h1>
                        <img src={blackarrow} alt="" />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between space-x-10 border lg:w-[180px] p-2'>
                        <h1 className='lg:text-[16px] text-[12px]'>Color</h1>
                        <img src={blackarrow} alt="" />
                    </div>
                </div>
            </div>
            <div className='mx-auto text-center mt-7'>
                <button className='bg-[#307098] lg:w-[384px] w-[300px] h-[48px] lg:h-[48px] text-[#ffffff] transition duration-500 ease-out border border-[#307098] font-bold flex items-center justify-center'>Add to cart</button>
            </div>
            <div className='mx-auto text-center mt-7'>
                <button className='bg-[#ffffff] lg:w-[384px] w-[300px] h-[48px] lg:h-[48px] text-[#307098] transition duration-500 ease-out border border-[#307098] font-bold flex items-center gap-3 justify-center'>Add to wishlist
                <img src={wishlist} alt="" />
                </button>
            </div>
            <div className='mt-5'>
                <h1 className='text-[#141415] font-bold text-[12px]'>Description</h1>
                <h2 className='text-[#141415D9] font-medium text-[12px]'>Exude timeless elegance with this Mesh Gown. It was crafted from luxurious black fabric, this gown embraces simplicity with a touch of <span style={{background: 'linear-gradient(180.00deg, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.37) 41.304%)',backgroundClip: 'text', WebkitBackgroundClip: 'text',}}>sophistication. The mid-thigh length silhouette flatters...</span> <span><a href="#" className='hover:underline text-[#307098]'>Read More</a></span></h2>
            </div>
        </div>
    </div>
    <div>
    </div>
    </section>
  )
}

export default ProductHero