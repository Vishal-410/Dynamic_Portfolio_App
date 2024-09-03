import React from 'react'
import SectioTitle from '../../Components/SectioTitle'
import { useSelector } from "react-redux"



function Courses() {
    const [selectedItems, setSelectedItems] = React.useState(0)
    const { portfolioData } = useSelector((state) => state.root);

    const { courses } = portfolioData;


    return (
        <div>
            <SectioTitle title="Education" />
            <div className="flex py-10 gap-20 sm:flex-col">
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {courses.map((course, index) => (
                        <div onClick={() => {
                            setSelectedItems(index)
                        }}
                            className='cursor-pointer'
                        >
                            <h1>
                                <div className={`text-xl  px-5 ${selectedItems === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 ' : 'text-white'}`}>{course.title}</div>
                            </h1>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-10 sm:flex-col'>

                    <div className='flex flex-col gap-5'>
                        <h1 className="text-tertiary text-2xl">  {courses[selectedItems].title}</h1>
                        <h1  className="text-white text-xl"><p className='text-secondary'>BOARD:</p> {courses[selectedItems].technologies}</h1>
                        <h1 className="text-white text-xl"><p className='text-secondary'>School:</p>  {courses[selectedItems].link}</h1>

                        <p className='text-white'><p className='text-secondary'>Descrption:</p>  {courses[selectedItems].description}</p>

                    </div>
                    {/* <img src={courses[selectedItems].image} alt="" className='h-52 w-80 ' /> */}
                </div>
            </div>
        </div>
    )
}

export default Courses