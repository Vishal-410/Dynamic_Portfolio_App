import React from 'react'
import {Form} from "antd";
import {useSelector,useDispatch} from "react-redux"
import {ShowLoading,HideLoading} from "../../redux/rootSlice"
import axios from "axios"
import {message} from "antd"


function AdminIntro() {
  const dispatch=useDispatch();
  const {portfolioData} = useSelector((state)=>state.root);

  const onFinish=async(values)=>{
    try {
     dispatch(ShowLoading())
     const response = await axios.post("/api/portfolio/update-intro",{
      ...values,
      _id:portfolioData.intros._id,
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
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intros}>
    <Form.Item name="welcomeText" label="Welcome Text">
      <input placeholder='Welcome Text'/>
    </Form.Item>
    <Form.Item name="firstname" label="First name">
      <input placeholder='First name'/>
    </Form.Item>
    <Form.Item name="lastname" label="Last Name" >
      <input placeholder='Last Name'/>
    </Form.Item>
    <Form.Item name="caption" label="Caption" >
      <input placeholder='Caption'/>
    </Form.Item>
    <Form.Item name="description" label="Description">
      <textarea placeholder='Description'/>
    </Form.Item>
    <div className="flex justify-end"><button className='px-10 py-2 text-white bg-primary' type='submit'>Save</button></div>
      </Form>
    </div>
  )
}

export default AdminIntro