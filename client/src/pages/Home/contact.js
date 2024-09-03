import React from 'react'
import SectioTitle from '../../Components/SectioTitle';
import {useSelector} from "react-redux"


function Contact() {
    const {portfolioData} = useSelector((state)=>state.root);
    const {contacts}= portfolioData;
    return (
        <div>
            <SectioTitle title="Say Hello" />
            <div className='flex sm:flex-col item-center justify-between'>
                <div className="flex flex-col ">
                    <p className='text-white text'>{"{"}</p>
                    {Object.keys(contacts).map((key) => (
                        key !=='_id' &&
                        <p className='ml-5'>
                            <span className='text-tertiary '>{key} :</span><span className='text-white '>{contacts[key]}</span>:
                        </p>
                    ))}
                    <p className='text-white'>{"}"}</p>
                </div>

              <div className=' h-[250px] py-2'>
              <dotlottie-player src="https://lottie.host/ea16ffe1-dc2e-4431-911a-ef6e7af587db/ncitbdDdQN.json" background="transparent" speed="1" ></dotlottie-player>
              </div>
            </div>
        </div>
    )
}

export default Contact