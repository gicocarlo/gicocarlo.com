import './Footer.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <a href="https://www.linkedin.com/in/gico/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/gicocarlo/" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto:evangelistagico@gmail.com">
          <MdOutlineEmail />
        </a>
      </div>
      <p className='footer-text'>&copy; {new Date().getFullYear()} - Gico Carlo Evangelista</p>
    </div>
  )
}

export default Footer
