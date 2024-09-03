import React from 'react'
import SectioTitle from '../../Components/SectioTitle'
import {useSelector} from "react-redux"



function Experiences() {
    const [selectedItems,setSelectedItems]=React.useState(0)
    const {portfolioData} = useSelector((state)=>state.root);
    
    const {experiences}= portfolioData;
  return (
    <div>
        <SectioTitle title="Experiences"/>
        <div className="flex py-10 gap-20 sm:flex-col">
            <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
           {experiences.map((experienc,index)=>(
            <div onClick={()=>{
                setSelectedItems(index)
            }}
            className='cursor-pointer'
            >
                <h1>
                    <div className={`text-xl  px-5 ${selectedItems===index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 ':'text-white' }`}>{experienc.period}</div>
                </h1>
            </div>
           ))}
            </div>
            <div className='flex flex-col gap-5'>
             <h1 className="text-secondary text-2xl">{experiences[selectedItems].title}</h1>
             <h1 className="text-tertiary text-2xl">{experiences[selectedItems].company}</h1>
             <p className='text-white'>{experiences[selectedItems].description}</p>

            </div>
       
        </div>
        </div>
  )
}

export default Experiences