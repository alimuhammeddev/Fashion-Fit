import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../Components'
import ProductHero from '../Components/AllProduct/ProductHero'
import Productcarousel from '../Components/AllProduct/Productcarousel'

const AllProduct = () => {
  return (
    <section>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-28 lg:p-16`}>
            <ProductHero />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} lg:-mt-48 mt-28 lg:p-16`}>
            <Productcarousel />
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

export default AllProduct