import React from 'react'
import SectioTitle from '../../Components/SectioTitle'
// import { projects } from '../../resources/project'
import {useSelector} from "react-redux"



function Project() {
    const [selectedItems, setSelectedItems] = React.useState(0)
    const {portfolioData} = useSelector((state)=>state.root);
    
    const {projects }= portfolioData;
  
    return (
        <div>
            <SectioTitle title="Projects" />
            <div className="flex py-10 gap-20 sm:flex-col">
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    { projects.map((project, index) => (
                        <div onClick={() => {
                            setSelectedItems(index)
                        }}
                            className='cursor-pointer'
                        >
                            <h1>
                                <div className={`text-xl  px-5 ${selectedItems === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 ' : 'text-white'}`}>{project.title}</div>
                            </h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>
                    <img src={projects[selectedItems].image} alt="" className='h-60 w-72 ' />
                <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-2xl">{projects[selectedItems].title}</h1>
                    <p className="text-white" ><ins className='text-tertiary'><strong>Technologies:</strong></ins>  { projects[selectedItems].technologies}</p>
                    <p className='text-white'><ins className='text-tertiary'><strong>Descriotion:</strong></ins> { projects[selectedItems].description}</p>

                </div>

                </div>
            </div>
        </div>
    )
}

export default Project