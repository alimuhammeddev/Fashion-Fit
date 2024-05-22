import React from 'react'
import { accessories, beauty, darkwoman, fashion, style, talking } from '../../assets'

const BlogList = () => {
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:px-10 lg:gap-5 gap-7 mt-7'>
        <div>
          <img src={fashion} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>The ultimate fashion guide is here...</h1>
          <p className='text-[16px] lg:pr-0 pr-1 mt-1'>The ultimate fashion guide will help you to learn how to put your outfits together and look great without breaking the bank. Save more and shop ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={beauty} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>The Beauty of Monochromic outfits...</h1>
          <p className='text-[16px] lg:pr-0 pr-1 mt-1'>Monochromic fashion can never go wrong, learn how to style your outfits to produce great looks. The first thing you need to know about this is you... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={accessories} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>Pick the right accessories for your outfits...</h1>
          <p className='text-[16px] mt-1'>Pairing your outfits with the right accessories is a great way to upscale your fashion sense and look outstanding. Accessories are very ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={talking} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>Dressing for every occasion...</h1>
          <p className='text-[16px] mt-1'>Whether it's a casual coffee date, a formal gala, or an adventurous getaway, dressing appropriately is an art. Dive into a comprehensive guide ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={darkwoman} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>Building a Sustainable Wardrobe...</h1>
          <p className='text-[16px] mt-1'>Fashion isn't just about looking good; it's about feeling good too. Explore the concept of ethical and sustainable fashion, and discover how... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={style} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>Elevating your casual style, chic looks...</h1>
          <p className='text-[16px] mt-1'>In this blog, we explore how to upgrade your casual wardrobe to achieve chic & stylish everyday outfits. From mastering the art of layering to... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={fashion} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>The ultimate fashion guide is here...</h1>
          <p className='text-[16px] lg:pr-0 pr-1 mt-1'>The ultimate fashion guide will help you to learn how to put your outfits together and look great without breaking the bank. Save more and shop ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={beauty} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>The Beauty of Monochromic outfits...</h1>
          <p className='text-[16px] lg:pr-0 pr-1 mt-1'>Monochromic fashion can never go wrong, learn how to style your outfits to produce great looks. The first thing you need to know about this is you... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={accessories} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>Pick the right accessories for your outfits...</h1>
          <p className='text-[16px] mt-1'>Pairing your outfits with the right accessories is a great way to upscale your fashion sense and look outstanding. Accessories are very ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>
      </div>
    </section>
  )
}

export default BlogList