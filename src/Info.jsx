import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Info = () => {
  return (
    <div>
              <div className="flex  justify-between px-44 text-white" >
        <p >Rawalpindi, Pakistan</p>
        <p className='mr-24'>+92-308-6371273</p>
        <div className="flex space-x-4">
      <a href="https://www.instagram.com/iabdullaahh" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
      <a href="https://www.x.com/iabdullaaahh" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.facebook.com/Abdullah.shAykh.11" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook size={24} />
      </a>
    </div>

      </div>
      
    </div>
  )
}

export default Info
