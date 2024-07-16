import React, { useContext, useEffect, useState } from 'react'
import {Container} from '@components'
import {CardProduct} from '@ui'
import { Button } from 'antd'
import { UserContext } from '../../App';



function index() {
  const { user } = useContext(UserContext);
  const [price, setPrice] = useState(0)

  useEffect(() => {
    let totalPrice = 0
    user?.forEach(e => {
      totalPrice += e.price
    })
    setPrice(totalPrice)      
  }, [user])
  return (
    <section>
        <Container>
          <p className='flex text-[18px] gap-[20px] justify-center mt-[30px] mb-[60px]'><span className='text-[#33A0FF]'>Home</span> <span className='text-[#33A0FF]'>Hot Deal</span> Nike Airmax 270 React</p>
              <div className='flex w-full mb-[60px]'>
                <p className='w-[600px] font-medium text-[20px]'>PRODUCT</p>
                <p className='w-[200px] font-medium text-[20px]'>PRICE</p>
                <p className='w-[270px] font-medium text-[20px]'>QTY</p>
                <p className='w-[150px] font-medium text-[20px]'>UNIT PRICE</p>
              </div>

              <div>
                  {
                    user.length ? <div className='flex flex-col gap-[80px] mb-[100px]'>
                    {
                       user?.map((e, index) => (
                        <CardProduct key={index} datas={e}/>
                      ))
                    }
                </div>
                :
                <p className='text-[20px] text-center mt-[200px] mb-[100px]'>No items added yet.</p>
                  }

                  {
                    user.length && <div className='w-[300px] mx-auto mb-[172px]'>
                    <p className='flex justify-between w-[300px] items-center mb-[24px] '><span>Subtotal</span> <span>${price}</span></p>
                    <p className='flex justify-between w-[300px] items-center mb-[24px] '><span>Shipping fee</span> <span>${price}</span></p>
                    <p className='flex justify-between w-[300px] items-center mb-[54px] '><span>Coupon</span> <span>No</span></p>
                    <p className='flex justify-between w-[300px] items-center mb-[54px] text-[30px] font-medium'><span>TOTAL</span> <span>${price}</span></p>
                    <Button type='primary' className='w-[300px] py-[20px]'>
                    Check out
                    </Button>
                  </div>
                  }
              </div>
        </Container>
    </section>
  )
}

export default index