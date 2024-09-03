import React, { useEffect } from 'react'
import Header from '../../Components/Header'
import AdminIntro from "./AdminIntro"
import AdminAbout from "./AdminAbout"
import { useSelector } from "react-redux"


import { Tabs } from 'antd';
import Experiences from './AdminExperiences'
import AdminProjects from './AdminProjects'
import AdminCourses from './AdminCourses'
import AdminContact from './AdminContact'

const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(() => {
    if (!localStorage.getItem("token")) { window.location.href = "/admin-login" };

  }, [])


  return (
    <div>
      <Header />
      <div className='flex gap-10 items-center px-5 py-2 justify-between '>
        <div className='flex gap-10 items-center'> <h1 className='text-3xl text-primary '>
          Portfolio Admin</h1>
          <div className="sm:w-12 w-60 h-[1px] bg-gray-500"></div></div>
        <h1 className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = '/admin-login'
          }
          }
        >LogOut</h1>
      </div>

      {portfolioData && <div className='pb-10 px-5  font-bold '>
        <Tabs defaultActiveKey='1'>
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experiences" key="3">
            <Experiences />
          </TabPane>
          <TabPane tab="Projects" key="4">
            <AdminProjects />
          </TabPane>
          <TabPane tab="Education" key="5">
            <AdminCourses />
          </TabPane>
          <TabPane tab="Contacts" key="6">
            <AdminContact />
          </TabPane>
        </Tabs>
      </div>
      }
    </div>
  )
}

export default Admin