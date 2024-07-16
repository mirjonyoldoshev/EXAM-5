import React from 'react'
import { Rate } from 'antd'
import { useNavigate } from 'react-router-dom'

function index({datas}) {
  const navigate = useNavigate()

  function handleClick(){
    localStorage.setItem('product_id', JSON.stringify(datas?.id))
    navigate("/product")
  }
  return (
    <div className='h-[370px] rounded-lg w-[295px] shadow-xl p-[20px]'>
        <img src={datas?.image} className='cursor-pointer w-[70%] h-[200px] object-cover mb-[30px] mx-auto' onClick={() => handleClick()} alt="Product IMG" />
        <div className='flex flex-col justify-center items-center'>
           <p className='font-bold mt-[10px] mb-[5px] text-[18px]'>{datas?.brand}</p>
           <Rate value={datas?.rating} className='mb-[10px]'/>
            <p className='flex items-center gap-[10px] text-[18px] font-medium'><span className='text-[#40BFFF]'>${datas?.price}</span> <span className='text-[#9098B1]' style={{textDecoration: 'initial'}}>$534,33</span> <span className='text-[#FB7181]'>24% Off</span></p>
        </div>
    </div>
  )
}

export default index