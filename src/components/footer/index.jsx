import React from 'react'
import {Container} from '@components'
import LOGO from '../../assets/images/FOOTER.png'
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import Karta1 from '../../assets/images/karta1.png'
import Karta2 from '../../assets/images/karta2.png'
import Karta3 from '../../assets/images/karta3.png'
import Karta4 from '../../assets/images/karta4.png'


function index() {
  return (
  <footer className='bg-[#BCDDFE] pt-[150px] pb-[54px]'>
      <Container>
          <div className='flex justify-between pb-[278px] border-b-[4px] border-[#F6F7F8]'>
              <div className='w-[221px]'>
                 <img src={LOGO} alt="Footer LOGO" />
                 <p className='text-[12px] mt-[24px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
              </div>
              <div className='w-[198px]'>
                <h1 className='text-[18px] mb-[20px] font-medium'>Follow Us</h1>
                <p className='text-[12px] mb-[22px]'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <div className='flex gap-[15px]'>
                  <FacebookOutlined className='text-[24px] text-[#385C8E]' />
                  <TwitterOutlined className='text-[24px] text-[#03A9F4]' />
                </div>
              </div>
              <div className='w-[148px]'>
                <h1 className='text-[18px] mb-[20px] font-medium'>Contact Us</h1>
                <p className='text-[14px] mb-[22px]'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
              </div>
          </div>
          <div className='flex gap-[20px] justify-end mt-[25px]'>
              <img src={Karta1} alt="Card IMG" />
              <img src={Karta2} alt="Card IMG" />
              <img src={Karta3} alt="Card IMG" />
              <img src={Karta4} alt="Card IMG" />
          </div>
          <p className='text-[#C1C8CE] text-[14px]'>© 2018 Ecommerce theme by www.bisenbaev.com</p>
      </Container>
    </footer>
  )
}

export default index