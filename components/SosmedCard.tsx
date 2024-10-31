import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const SosmedCard = () => {
  return (
    <div className='flex flex-wrap gap-5 pt-5'>
      <a href="https://www.linkedin.com/in/nur-arini">
        <FaLinkedin className='card-sosmed'/>
      </a>
      <a href="https://www.instagram.com/ryn_code">
        <FaInstagram className='card-sosmed'/>
      </a>
      <a href="https://github.com/nrrarnn">
        <FaGithub className='card-sosmed'/>
      </a>
      <a href="https://www.tiktok.com/@knyzkx">
        <FaTiktok className='card-sosmed'/>
      </a>
      <a href="mailto:nurarini0302@gmail.com">
        <MdOutlineMail className='card-sosmed'/>
      </a>
    </div>
  )
}

export default SosmedCard
