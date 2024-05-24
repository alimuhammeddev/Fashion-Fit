import React from 'react'
import { arrowleft, arrowright, blackarrow, blackgown, boystyle, browngown, cargojean, corset, croptop, earings, hoops, huggygown, jeans, meshgown, oxfordshoe, rating1, rating2, rating3, schoolbag, shirt, shoe, top, wishlist } from '../../assets'

const CollectionHero = () => {
  return (
    <section>
        <div className='lg:flex justify-between'>
            <div>
                <h1 className='text-[#141415] lg:text-[20px] font-semibold'>8,428 Items</h1>
                <p className='border-[#B1C4D0] border'></p>
                <div className='mt-5'>
                    <h1 className='text-[#141415] lg:text-[20px] font-bold'>Collections</h1>
                    <ul className='mt-3'>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">All products</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Men</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Women</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">New collections</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Top sellers</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Sales</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Playsuits</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Men's suit</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Dresses</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Skirts</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Shorts</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Beach wear</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Bags</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Jewelries</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Shoes</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Watches</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Sunglasses</a></li>
                        <li className='hover:bg-[#F9F3EE] w-[180px] h-[26px] px-2 -ml-2'><a href="#!">Belts</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#141415] lg:text-[28px] text-[16px] font-bold mt-12'>All Products</h1>
                    <div>
                        <h1 className='text-[#141415] font-bold'>Sort by:</h1>
                        <div className='flex items-center space-x-10 border w-fit p-2'>
                            <h1 className='lg:text-[16px] text-[12px]'>Price: High to Low</h1>
                            <img src={blackarrow} alt="" />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 lg:gap-5'>
                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={boystyle} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Tee and Drawstring Short</h1>
                            <h2 className='text-[12px] font-bold'>N16,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating2} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.0 (24 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={earings} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Golden Hoops</h1>
                            <h2 className='text-[12px] font-bold'>N8,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={croptop} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>V-neck Cropped Top</h1>
                            <h2 className='text-[12px] font-bold'>N18,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating3} alt="" />
                        <div>
                        <h1 className='text-[10px]'>3.0 (13 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={cargojean} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Cargo Jean</h1>
                            <h2 className='text-[12px] font-bold'>N10,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={shirt} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Floral Hawaii Shirt</h1>
                            <h2 className='text-[12px] font-bold'>N4,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (79 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={corset} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Spliced Corset</h1>
                            <h2 className='text-[12px] font-bold'>N13,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={top} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Top</h1>
                            <h2 className='text-[12px] font-bold'>N3,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating3} alt="" />
                        <div>
                        <h1 className='text-[10px]'>3.0 (13 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={shoe} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Men Shoes</h1>
                            <h2 className='text-[12px] font-bold'>N38,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={oxfordshoe} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Oxford Shoes</h1>
                            <h2 className='text-[12px] font-bold'>N52,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={blackgown} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Black Mesh Gown</h1>
                            <h2 className='text-[12px] font-bold'>N16,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={schoolbag} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Sling Bag</h1>
                            <h2 className='text-[12px] font-bold'>N7,200</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={browngown} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Huggy Gown</h1>
                            <h2 className='text-[12px] font-bold'>N16,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={huggygown} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Huggy Gown</h1>
                            <h2 className='text-[12px] font-bold'>N16,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={hoops} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Golden Hoops</h1>
                            <h2 className='text-[12px] font-bold'>N8,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating2} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (32 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={meshgown} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Mesh Gown</h1>
                            <h2 className='text-[12px] font-bold'>N15,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>

                    <div className='bg-[#ffffff] w-fit pb-2 mt-10 border-[#F1E0D2] border shadow-md'>
                        <div className='relative'>
                            <img src={jeans} alt="" />
                            <div className='absolute bottom-10 right-7 transform translate-y-1/2 bg-[#FFFFFFCC] shadow-xl px-2 py-2 rounded-full w-fit'>
                                <img src={wishlist} alt="" />
                            </div>
                        </div>
                        <div className='text-center space-y-2'>
                            <h1 className='mt-2 text-[16px] font-medium'>Levi Jeans</h1>
                            <h2 className='text-[12px] font-bold'>N34,000</h2>
                        </div>
                        <div className='flex items-center mx-auto justify-center space-x-1 mt-2'>
                        <img src={rating1} alt="" />
                        <div>
                        <h1 className='text-[10px]'>4.9 (67 reviews)</h1>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10 flex items-center justify-between'>
                    <h1 className='text-[#141415D9] font-bold lg:text-[16px] text-[13px]'>1-16 of 8,428 items</h1>
                    <div className='flex items-center lg:space-x-5 space-x-2'>
                        <img src={arrowleft} alt="" className='hover:bg-[#F9F3EE] cursor-pointer p-2 rounded-sm'/>
                        <h1 className='cursor-pointer'>1</h1>
                        <h2 className='cursor-pointer'>2</h2>
                        <h3 className='cursor-pointer'>3</h3>
                        <h4 className='cursor-pointer'>4</h4>
                        <h5 className='cursor-pointer'>5</h5>
                        <h1 className='cursor-pointer'>...</h1>
                        <h2 className='cursor-pointer'>526</h2>
                        <img src={arrowright} alt="" className='hover:bg-[#F9F3EE] cursor-pointer p-2 rounded-sm'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollectionHero