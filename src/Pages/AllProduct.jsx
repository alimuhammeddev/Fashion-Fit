import React from 'react'
import styles from '../style'
import { Navbar } from '../Components'
import ProductHero from '../Components/AllProduct/ProductHero'

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
    </section>
  )
}

export default AllProduct