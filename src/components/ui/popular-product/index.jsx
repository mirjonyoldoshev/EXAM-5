import React from 'react'
import { Rate } from 'antd'
import { useNavigate } from 'react-router-dom'


function index({datas, func}) {
  const navigate = useNavigate()
  function handleClick(){
    localStorage.setItem('product_id', JSON.stringify(datas?.id))
    func()
    navigate(`/product`)
  }
  
  return (
    <div onClick={() => handleClick()} className='flex items-start gap-[25px] hover:shadow-2xl duration-300 cursor-pointer'>
        <div>
          <img className='w-[152px] h-[152px]' src={datas?.image} alt="Product IMG" />
        </div>
        <div>
           <h2 className='text-[22px] w-[249px] mb-[16px] '>{datas?.brand}</h2>
           <Rate value={datas?.rating} className='mb-[17px]'/>
           <p className='flex items-center gap-[10px] text-[18px] font-medium'><span className='text-[#40BFFF]'>${datas?.price}</span> <span className='text-[#9098B1]' style={{textDecoration: 'initial'}}>$534,33</span></p>
        </div>
    </div>
  )
}

export default index