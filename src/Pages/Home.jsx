import React from 'react'
import { Hero, Collection, Occassion, Sellers, Reviews, Benefit, Blog, Footer,Navbar  } from '../Components'
import styles from '../style'

const Home = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`mt-36`}>
            <Hero />
          </div>
        </div>

      <div className='bg-[#F9F3EE] mt-20 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-16`}>
            <Collection />
          </div>
        </div>
      </div>

      <div className='bg-[#ffffff] lg:mt-20 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-16`}>
            <Occassion />
          </div>
        </div>
      </div>

      <div className='bg-[#FDFBF9] mt-20 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-7`}>
            <Sellers />
          </div>
        </div>
      </div>

      <div className='bg-[#ffffff] lg:mt-10 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-10`}>
            <Reviews />
          </div>
        </div>
      </div>

      <div className='bg-[#FDFBF9] lg:mt-10 pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-10`}>
            <Benefit />
          </div>
        </div>
      </div>

      <div className='bg-[#F9F3EE] pb-10'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-16`}>
            <Blog />
          </div>
        </div>
      </div>

      <div className='bg-[#F3E5D9] pb-8'>
        <div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home