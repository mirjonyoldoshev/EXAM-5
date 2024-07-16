import React, { useContext } from 'react'
import {Container} from '@components'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import LOGO from '../../assets/images/FOOTER.png'
import { Badge, Button } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App';

function Index() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext);
  return (
    <header className='py-[20px]'>
      <Container>
        <select className='mb-[55px]'>
          <option value='en'>English</option>
          <option value='fr'>Français</option>
        </select>
        <nav className='flex justify-between items-center'>
          {
            JSON.parse(localStorage.getItem('access_token')) ? <p className='text-[18px] font-medium cursor-pointer'><UserOutlined /> My profile</p> : <Button onClick={() => navigate('/login')} type='primary'>LOGIN</Button>
          }
          <NavLink to={'/'}><img src={LOGO} alt="LOGO" className=' cursor-pointer' /></NavLink>
          <Badge onClick={() => navigate('/card')} count={user?.length}>
              <ShoppingCartOutlined className='text-[30px] cursor-pointer'/>
          </Badge>
        </nav>
      </Container>
    </header>
  )
}

export default Index