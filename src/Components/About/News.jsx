import React from 'react'

const News = () => {
  return (
    <section>
        <div>
            <h1 className='lg:text-[36px] text-[24px] font-bold text-center'>Newsletter</h1>
            <h2 className='lg:text-[24px] text-[18px] font-medium text-center'>Let’s deliver fashion goodness into your inbox</h2>
        </div>

        <div className='flex justify-center mt-10'>
        <input
            type="email"
            placeholder="Enter your email address"
            class="w-[520px] rounded-md border-gray-200 bg-white p-3 text-[#285F81] shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#285F81] placeholder:text-[12px] placeholder:text-[#285F81]"
          />
        </div>
        <div>
            <div className='mx-auto text-center lg:mt-10 mt-7'>
                <button className='bg-[#307098] w-[190px] h-[48px] hover:text-[#307098] transition duration-500 ease-out text-[#ffffff] hover:bg-[#ffffff] border border-[#307098]'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}

export default News