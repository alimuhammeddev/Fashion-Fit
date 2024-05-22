import React from 'react'
import Navbar from '../Components/Navbar'
import styles from '../style'
import HeroBlog from '../Components/Blog/HeroBlog'
import BlogList from '../Components/Blog/BlogList'
import { Footer } from '../Components'

const Blogs = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className='mt-20'>
          <div>
            <HeroBlog />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <BlogList />
          </div>
        </div>

        <div className='bg-[#F3E5D9] pb-8 mt-28'>
        <div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs