import React from 'react'
import Header from "../../Components/Header"
import Intro from './intro'
import About from './About'
import Experiences from './Experiences'
import Project from './Project'
import Courses from './Courses'
import Contact from './contact'
import Footer from './Footer'
import Leftsider from './Leftsider'
import {useSelector} from "react-redux"

function Home() {
  const {portfolioData} = useSelector((state)=>state.root)

  return (
    <div >
      <Header/>
     {portfolioData && (
       <div className='bg-primary px-40 sm:px-5'>
       <Intro/>
       <About/>
       <Experiences/>
       <Project/>
       <Courses/>
       <Contact/>
       <Footer/>
       <Leftsider/>

       </div>
     )}
      
    </div>
  )
}

export default Home