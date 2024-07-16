import { Button, Form } from 'antd'
import {Container} from '@components'
import React, { useState } from 'react'
import { ProFormText } from '@ant-design/pro-components'
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { Radio } from 'antd';


function index() {
  const [load, setLoad] = useState(false)
  const navigate = useNavigate()
  const [value, setValue] = useState(1);
  async function clickBtn(value){
    value.apartment = +value.apartment
    const response = await axios.post('https://backend-e-commerce-production.up.railway.app/api/v1/users/register', value)
    if(response.status == 200){
      toast.success('Register succesfully')
      navigate('/login')
    }else{
      toast.error('Register Failed')
    }
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }


  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <ToastContainer/>
       <Container>
          <div className='w-[420px]  mx-auto mt-[100px] mb-[200px]'>
            <h1 className='text-[52px] font-medium text-center mb-[11px]'>Register:</h1>
              <p className='text-[16px] text-[#828282] text-center mb-[63px]'>Enter your credential to access your account.</p>
            <Form onFinish={(value) => clickBtn(value)}>
            <p className='text-[16px]'>First Name</p>
              <ProFormText
              hasFeedback
                name="name"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <UserOutlined
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'Jasurbek'}
                rules={[{
                  required: true,
                  message: 'Enter your Name',
                }]}
              />
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
               <p className='text-[16px]'>Phone</p>
              <ProFormText
               hasFeedback
                name="phone"
                fieldProps={{
                  size: 'large',
                  prefix: (
                    <PhoneOutlined
                      className={'prefixIcon'}
                    />
                  ),
                }}
                placeholder={'Number'}
                rules={[{
                  required: true,
                  message: 'Enter your number',
                }]}
              />
              <p className='text=[16px] '>Street</p>
               <ProFormText
              hasFeedback
                name="stret"
                fieldProps={{
                  size: 'large',
                }}
                placeholder={'Street'}
                rules={[{
                  required: true,
                  message: 'Enter your street',
                }]}
              />
                <p className='text=[16px] '>City</p>
               <ProFormText
              hasFeedback
                name="city"
                fieldProps={{
                  size: 'large',
                }}
                placeholder={'Enter your city'}
                rules={[{
                  required: true,
                  message: 'Enter your city',
                }]}
              />

              <p className='text=[16px] '>Country</p>
               <ProFormText
              hasFeedback
                name="country"
                fieldProps={{
                  size: 'large',
                }}
                placeholder={'Enter country'}
                rules={[{
                  required: true,
                  message: 'Enter your country',
                }]}
              />

                <p className='text=[16px] '>Zip</p>
               <ProFormText
              hasFeedback
                name="zip"
                fieldProps={{
                  size: 'large',
                }}
                placeholder={'Enter your zip code'}
                rules={[{
                  required: true,
                  message: 'Enter your zip code',
                }]}
              />
              <p className='text=[16px] '>Apartment</p>
               <ProFormText
              hasFeedback
                name="apartment"
                fieldProps={{
                  size: 'large',
                }}
                placeholder={'Enter your Apartment'}
                rules={[{
                  required: true,
                  message: 'Enter your apartment',
                }]}
              />
              <p className='text-[16px]'>Password</p>
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
                },
              {
                validator: (rule, value) => {
                  if (value.length < 8) {
                    return Promise.reject('Password must be at least 8 characters long');
                  }
                  return Promise.resolve();
                },
                message: 'Password must be at least 8 characters long',
              }]}
              />
              <p className='text-[16px]'>isAdmin</p>
              <Radio.Group onChange={onChange} name='isAdmin' value={value} className='mb-[30px] mt-[10px]'>
                <Radio value={1}>True</Radio>
                <Radio value={2}>False</Radio>
              </Radio.Group>
              
              <Button loading={load} type='primary' htmlType='submit' className={'w-full py-[20px]'}>
                  Register
              </Button>
              <p className='text-center mt-[22px]'>Do you have an account? <NavLink className={'text-[blue]'} to={'/login'}>Login here.</NavLink></p>
            </Form>
          </div>
       </Container>
    </div>
  )
}

export default index