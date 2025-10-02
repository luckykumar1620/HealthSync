import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-40 my-10 mt-40 text-sm'>

            {/* -----left section------ */}
              <div>
                {/* <img className='mb-5  w-40' src={assets.logo} alt="" /> */}
                <p  className='font-bold text-4xl text-blue-500 cursor-pointer'>HealthSync</p>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>HealthSync – Smart Healthcare Made Simple. Connect with trusted doctors, book appointments easily, and manage your health records securely, all from one easy-to-use platform. Our mission is to make healthcare accessible, convenient, and stress-free for everyone</p>
              </div>


            {/* -----center section------ */}
              <div>
                 <p className='text-xl font-medium mb-5'>COMPANY</p>
                 <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy</li>
                 </ul>
              </div>

            {/* -----right section------ */}
              <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-9065728764</li>
                    <li>lucky9110132241@gmail.com</li>
                  </ul>
              </div>
        </div>

        {/* ------Copyright text------- */}
        <div>
            <hr />
            <p className='text-sm text-center py-5'>Copyright ©2025 HealthSync - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
