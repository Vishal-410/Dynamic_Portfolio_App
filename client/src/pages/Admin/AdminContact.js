import React from 'react'
import {Form} from "antd";
import {useSelector,useDispatch} from "react-redux"
import {ShowLoading,HideLoading} from "../../redux/rootSlice"
import axios from "axios"
import {message} from "antd"


function AdminContact() {
  const dispatch=useDispatch();
  const {portfolioData} = useSelector((state)=>state.root);

  const onFinish=async(values)=>{
    try {
     dispatch(ShowLoading())
     const response = await axios.post("/api/portfolio/update-contact",{
      ...values,
      _id:portfolioData.contacts._id,
     });
     dispatch(HideLoading())
      if(response.data.success)
     {
      message.success(response.data.message)
     }else{
      message.error(response.data.message)

     }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }

  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.contacts}>
    <Form.Item name="name" label="Full Name">
      <input placeholder='Full name'/>
    </Form.Item>
    <Form.Item name="age" label="Age">
      <input placeholder='Age '/>
    </Form.Item>
    <Form.Item name="gender" label="Gender" >
      <input placeholder='Gender'/>
    </Form.Item>
    <Form.Item name="email" label="Email" >
      <input placeholder='Email'/>
    </Form.Item>
    <Form.Item name="mobile" label="Mobile">
      <input placeholder='Mobile'/>
    </Form.Item>
    <Form.Item name="country" label="Countary">
      <input placeholder='Countary'/>
    </Form.Item>
    <div className="flex justify-end"><button className='px-10 py-2 text-white bg-primary' type='submit'>Save</button></div>
      </Form>
    </div>
  )
}

export default AdminContact