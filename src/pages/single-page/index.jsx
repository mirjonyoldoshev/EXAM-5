import React, { useContext, useEffect, useState } from 'react'
import {Container} from '@components'
import { Button, Rate } from 'antd'
import { FacebookOutlined, HeartOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined, TwitterOutlined } from '@ant-design/icons'
import {PopularProduct} from '@ui'
import axios from 'axios'
import { UserContext } from '../../App';

function index() {
  const [count, setCount] = useState(1)
  const [products, setProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])
  const { user, setUser } = useContext(UserContext);

  function AddToCard(){
      setUser([...user, products])
  }

  async function getProducts(){
      const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products')  
      const arr = response?.data?.filter(e => {
         return e.rating > 3
      })
      setPopularProducts(arr)
      const result = await axios.get(`https://backend-e-commerce-production.up.railway.app/api/v1/products/${JSON.parse(localStorage.getItem('product_id'))}`)
      setProducts(result?.data)
    }


  useEffect(() => {
    getProducts()
  }, [])
  return (
   <>
      <section className='mt-[110px] mb-[90px]'>
          <Container>
            <div className='flex justify-between mb-[100px]'>
              <div>
                <img className='w-[526px] h-[549px]' src={products?.image} alt="PRODUCT IMG" />
              </div>
              <div className='w-[700px]'>
                <h1 className='text-[24px] font-medium'>{products?.name}</h1>
              <div className='flex gap-[22px] mt-[26px]'>
                  <Rate value={products?.rating} className='mb-[17px] cursor-pointer'/>
                  <p className='text-[#C1C8CE]'>{products?.numReviews} reviews</p>
                  <p className='text-[#33A0FF]'>Submit a review</p>
              </div>
                <p className='flex items-center gap-[10px] text-[18px] font-medium mt-[40px]'><span className='text-[#40BFFF]'>${products?.price}</span> <span className='text-[#9098B1]' style={{textDecoration: 'initial'}}>$534,33</span> <span className='text-[#FB7181]'>24% Off</span></p>
                <p className='flex w-[250px] justify-between text-[14px] mt-[16px]'><span>Availability:</span> <span>In stock: {products?.countInStock}</span></p>
                <p className='flex w-[250px] justify-between text-[14px] mt-[16px]'><span>Category::</span> <span>{products?.brand}</span></p>
                <p className='flex w-[250px] justify-between text-[14px] mt-[16px] mb-[120px]'>Free shipping</p>

                <div className='flex justify-between items-center mb-[44px]'>
                    <div className='flex gap-[20px] items-center'>
                      <Button onClick={() => setCount(count-1)} disabled={count == 1}><MinusOutlined/></Button>
                      <p className='text-[22px] font-bold'>{count}</p>
                      <Button onClick={() => setCount(count+1)}><PlusOutlined/></Button>
                    </div>
                    <div className='flex gap-[20px]'>
                      <Button type='primary' onClick={() => AddToCard()} className='w-[200px] py-[20px]'><ShoppingCartOutlined /> Add to cart</Button>
                      <Button className='w-[50px] py-[20px]'><HeartOutlined/></Button>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                  <Button style={{background: '#385C8E', color: 'white' }} className='w-[47%] py-[25px] font-medium'><FacebookOutlined className='text-[22px]'/> Share on Facebook</Button>
                  <Button type='primary' className='w-[47%] py-[25px]'><TwitterOutlined className='text-[22px] font-medium'/> Share on Twitter</Button>
                </div>
              </div>  
            </div>

            <div className='p-[35px] bg-[#FAFAFB]'>
                <h2 className='text-[18px] text-[#2E90E5] mb-[30px]'>Product Infomation</h2>
                  <div className='h-[5px] w-[194px] bg-[#2E90E5] mb-[21px]'></div>
                <p className='text-[12px] text-[#9098B1] mb-[37px] w-[900px]'>{products?.description}</p>
                
            </div>
          </Container>
        </section>

        <section className='mb-[100px]'>
        <Container>
          <h1 className='text-[35px] font-semibold mb-[55px] text-center '>MOST TOP RATED PRODUCTS</h1>
          <div className='flex flex-wrap gap-[10px] gap-y-[80px]'>
                {
                  popularProducts.map((e, index) => (
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