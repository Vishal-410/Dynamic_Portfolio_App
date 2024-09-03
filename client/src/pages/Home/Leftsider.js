import React from 'react'

function Leftsider() {
  return (
    <div className='fixed left-0 bottom-0 px-10  sm:static'>
      <div className="flex flex-col items-center ">
        <div className="flex flex-col gap-2 text-2xl sm:flex-row">
          <a href="https://www.facebook.com/gudiya.kumari.12139" target='_blank'>
            <i className="ri-facebook-circle-line text-gray-400 "> </i>
          </a>
          <a
      href="mailto:"
                    target='_blank'
    >
          <i className="ri-mail-line text-gray-400 "></i>
          </a>
          <a href="https://www.instagram.com/vishal_singh410/" target='_blank'>
            <i className="ri-instagram-line text-gray-400 "></i>
          </a>
          <a href="https://www.linkedin.com/in/vishal-singh-019810190/" target='_blank'>
            <i className="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a href="https://github.com/Vishal-410/" target='_blank'>
          <i className="ri-github-line text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden "></div>
      </div>
    </div>
  )
}

export default Leftsider