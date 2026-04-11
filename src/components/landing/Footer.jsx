import { RiFacebookFill, RiGithubFill, RiInstagramLine, RiTelegram2Fill, RiWhatsappLine } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-950 w-screen h-[25vh] flex p-[1%] text-white font-semibold capitalize'>
            <div className='w-1/4 h-full  border-r border-gray-600'>

            </div>
            <div className='w-3/4  h-full px-[1%] flex'>
                <div className='w-full flex flex-col gap-2'>
                    Other usefull links
                    <ul className='flex gap-2 flex-wrap text-gray-400 '>
                        <li className='w-1/3 hover:text-white' >Home</li>
                        <li className='w-1/3 hover:text-white' >Project</li>
                        <li className='w-1/3 hover:text-white' >About</li>
                        <li className='w-1/3 hover:text-white' >Contact</li>
                        <li className='w-1/3 hover:text-white' >Resume</li>
                    </ul>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    social links
                    <ul className=' flex gap-2 flex-wrap text-gray-400 '>
                        <li className='flex gap-2 p-1 items-center w-1/3 hover:text-white '><RiGithubFill /> <a target='_blank' href="https://github.com/imfazal0">github</a></li>
                        <li className='flex gap-2 p-1 items-center w-1/3 hover:text-white '><RiInstagramLine /><a target='_blank' href="https://www.instagram.com/imfazal0/">instagram</a></li>
                        <li className='flex gap-2 p-1 items-center w-1/3 hover:text-white '><RiFacebookFill /><a target='_blank' href="https://www.instagram.com/imfazal0/">facebook</a></li>
                        <li className='flex gap-2 p-1 items-center w-1/3 hover:text-white '><RiTelegram2Fill /><a target='_blank' href="https://t.me/Imfazal0#">telegram</a></li>
                        <li className='flex gap-2 p-1 items-center w-1/3 hover:text-white '><RiWhatsappLine /><a target='_blank' href="https://wa.link/ogltkg">Whatsapp</a></li>
                    </ul>
                </div>
            </div>
    </footer>
  )
}

export default Footer