import React, { useEffect, useState } from 'react'
import Banner from '../../assets/images/Banner.png'
import {Container} from '@components'
import {ProductCard, PopularProduct} from '@ui'
import Shoes from '../../assets/images/shoes.png'
import Shipping from '../../assets/images/shipping.png'
import Refund from '../../assets/images/refund.png'
import Support from '../../assets/images/support.png'
import axios from 'axios'

function index() {
  const [products, setProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])

  async function getProducts(){
      const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products')  
      setProducts(response?.data)
      const arr = response?.data?.filter(e => {
         return e.rating > 3
      })
      setPopularProducts(arr)
  }


  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <section className='mb-[100px]'>
            <div className='flex justify-center'>
              <img src={Banner} alt="INTRO BANNER" className='w-full h-[650px]' />
            </div>
      </section>

      <section className='mb-[250px]'>
         <Container>
            <div>
              <h2 className='text-[35px] font-semibold text-center mb-[62px]'>ALL PRODUCTS</h2>
              <div className='flex gap-[35px] flex-wrap'>
                {
                  products?.map((e, index) => (
                    <ProductCard key={index} datas={e}/>
                  ))
                }
              </div>
            </div>
         </Container>
      </section>

        <section className='bg-[#40BFFF] h-[500px] mb-[202px]'>
          <Container>
            <div className='flex items-center justify-between '>
              <div className='pt-[100px]'>
                  <h1 className='text-[55px] font-medium text-white mb-[24px]'>Adidas Men Running Sneakers</h1>
                  <p className='text-white text-[24px] mb-[10px]'>Performance and design. Taken right to the edge.</p>
                  <p className='text-[20px] font-semibold text-white cursor-pointer'>SHOP NOW</p>
                  <div className='h-[3px] w-[75px] bg-white'></div>
              </div>
              <div>
                <img src={Shoes} alt="Shoes img" className='mt-[-120px]' />
              </div>
            </div>
          </Container>
      </section>

      <section className='mb-[300px]'>
        <Container>
           <div className='flex justify-center items-center gap-[257px]'>
              <div className='w-[197px] flex flex-col justify-center'>
                <img className='mb-[52px] w-[100px] h-[85px] mx-auto' src={Shipping} alt="Shipping Img" />
                <p className='font-medium text-[27px]  mb-[11px] text-center'>FREE SHIPPING</p>
                <p className='text-[18px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='w-[197px] flex flex-col justify-center'>
                <img className='mb-[52px] w-[100px] h-[85px] mx-auto' src={Refund} alt="Shipping Img" />
                <p className='font-medium text-[27px]  mb-[11px] text-center'>100% REFUND</p>
                <p className='text-[18px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
              <div className='w-[197px] flex flex-col justify-center'>
                <img className='mb-[52px] w-[100px] h-[85px] mx-auto' src={Support} alt="Shipping Img" />
                <p className='font-medium text-[27px]  mb-[11px] text-center'>SUPPORT 24/7</p>
                <p className='text-[18px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
           </div>
        </Container>
      </section>

      <section className='mb-[300px]'>
        <Container>
          <h1 className='text-[35px] font-semibold mb-[55px] text-center '>MOST TOP RATED PRODUCTS</h1>
          <div className='flex flex-wrap gap-[10px] gap-y-[80px]'>
                {
                  popularProducts.splice(0,6).map((e, index) => (
                    <PopularProduct key={index} datas={e} func={getProducts}/>
                  ))
                }
          </div>
        </Container>
      </section>
    </>
  )
}

export default index