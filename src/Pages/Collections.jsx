import React from 'react'
import styles from '../style'
import { Footer, Navbar } from '../Components'
import CollectionHero from '../Components/Collection/CollectionHero'

const Collections = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} lg:mt-32 mt-28 lg:p-10`}>
            <CollectionHero/>
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

export default Collections