import { Button, Form } from 'antd'
import {Container} from '@components'
import React, { useState } from 'react'
import { ProFormText } from '@ant-design/pro-components'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

function index() {
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()

  async function clickBtn(value){
    setLoad(true)
    const response = await axios.post('https://backend-e-commerce-production.up.railway.app/api/v1/users/login', value)
    if(response.status == 200){
      toast.success('Successfully logged in')
      localStorage.setItem('access_token', JSON.stringify(response?.data?.token))
      navigate('/')
    }
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }
  return (
    <div>
      <ToastContainer/>
       <Container>
          <div className='w-[420px]  mx-auto mt-[100px] mb-[200px]'>
            <h1 className='text-[52px] font-medium text-center mb-[11px]'>Login</h1>
              <p className='text-[16px] text-[#828282] text-center mb-[63px]'>Enter your credential to access your account.</p>
            <Form onFinish={(value) => clickBtn(value)}>
              <p className='text-[16px]'>Email address</p>
              <ProFormText
              hasFeedback
                name="email"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <UserOutlined
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'email@domain.com'}
                rules={[{
                  required: true,
                  message: 'Enter your Email',
                  type: 'email',
                }]}
              />
              <div className='flex justify-between items-center'>
                <p className='text-[16px]'>Password</p>
                <NavLink className={'text-[blue]'} to={'/'}>
                    Forgot Password?
                </NavLink>
              </div>
               <ProFormText.Password
               hasFeedback
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <LockOutlined
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'Password'}
                rules={[{
                  required: true,
                  message: 'Enter your password',
                }]}
              />
              <Button loading={load} type='primary' htmlType='submit' className={'w-full py-[20px]'}>
                  Login
              </Button>
              <p className='text-center mt-[22px]'>Don’t have an account? <NavLink className={'text-[blue]'} to={'/register'}>Register here.</NavLink></p>
            </Form>
          </div>
       </Container>
    </div>
  )
}

export default index