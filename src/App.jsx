import styles from './style'
import { Benefit, Blog, Collection, Footer, Hero, Navbar, Occassion, Reviews, Sellers,} from './Components';

const App = () =>
  (
    <div className='bg-white w-full overflow-hidden text-black'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
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
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} mt-16`}>
            <Footer />
          </div>
        </div>
        <div>
            <h1 className='border border-[#82776D] mt-10'></h1>
        </div>
        <div className='flex items-center gap-3 text-[12px] mx-auto justify-center mt-10'>
          <h1>2023 FASHION FIT</h1>
          <h1 className='bg-[#82776D] p-1 w-fit rounded-full'></h1>
          <p>All right reserved.</p>
          <p>Designed by Adenike Abioye</p>
        </div>
      </div>
    </div>
  );


export default App