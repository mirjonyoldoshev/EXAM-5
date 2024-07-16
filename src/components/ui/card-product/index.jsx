import React, { useContext, useState } from 'react'
import { Button } from 'antd'
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { UserContext } from '../../../App';


function index({datas}) {
  const [count, setCount] = useState(1);
  const { user, setUser } = useContext(UserContext);

  function deleteCard(){
      const arr = user?.filter(e => {
        return e.id != datas?.id;
      })
      setUser(arr);
  }
  return (
    <div className='flex items-center'>
      <div className='w-[600px] flex gap-[30px] items-center'>
          <Button onClick={() => deleteCard()}>
            <DeleteOutlined/>
          </Button>
          <img className='w-[137px] h-[94px] object-cover' src={datas?.image} alt="CARD IMG" />
          <p className='text-[18px] text-[#262626]'>{datas?.name}</p>
      </div>
      <div className='w-[200px] '>
           <p className='text-[18px] '>${datas?.price * count}</p>
      </div>
      <div className='w-[270px] flex gap-[20px]'>
          <Button onClick={() => setCount(count-1)} disabled={count == 1}><MinusOutlined/></Button>
          <p className='text-[20px] font-semibold'>{count}</p>
          <Button onClick={() => setCount(count+1)}><PlusOutlined/></Button>
      </div>
      <div className='w-[150px] '>
           <p className='text-[18px] '>${datas?.price}</p>
      </div>
    </div>
  )
}

export default index