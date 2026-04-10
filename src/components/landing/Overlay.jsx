import { useGSAP } from '@gsap/react'
import { RiAndroidLine, RiCss3Fill, RiFirebaseFill, RiHtml5Fill, RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from '@remixicon/react'
import gsap from 'gsap/all'
import React from 'react'

const Overlay = () => {
    useGSAP(()=>{
        const tl = gsap.timeline({
             scrollTrigger:{
                trigger:'.left',
                start:"bottom bottom",
                end:'1000 top',
                scrub:1,
                // markers:true
            }
        })

        tl.to('.left',{
            y:-50,
              
        },'a').to('.right',{
            y:-25,
              
        },'a').to('.r-left',{
            y:-50,
              
        },'a').to('.r-right',{
            y:-25,
              
        },'a')

        gsap.to('.crd',{
            rotate:10,
            repeat:-1, 
            duration:10,
            yoyo:true
        })
    })

  return (
    <div className='overlay h-screen w-screen flex justify-between absolute '>
        <div className='w-1/3 h-full flex '>
            <div className='w-full h-full flex flex-col justify-between pt-20  items-center  p-[3%] gap-[2%]'>
                <div className=' left crd opacity-0 w-[60%] aspect-square flex items-center justify-center '><RiHtml5Fill size={100} /></div>
                <div className=' left crd opacity-0 w-[60%] aspect-square flex items-center justify-center '><RiCss3Fill size={100} /></div>
                <div className=' left crd opacity-0 w-[60%] aspect-square flex items-center justify-center '><RiJavascriptFill size={100} /></div>
                
            </div>
         
            <div className='w-full h-full flex flex-col justify-between  items-center p-[3%] gap-[2%]'>
                <div className='right crd opacity-0 w-[60%] aspect-square flex items-center justify-center '></div>
                <div className='right crd opacity-0 w-[60%] aspect-square flex items-center justify-center '><RiFirebaseFill size={100} /></div>
                <div className='right crd opacity-0 w-[60%] aspect-square '><img src="https://svgstack.com/media/img/gsap-logo-dNe6788698.webp" className='w-full aspect-square' alt="" /></div>
            </div>
         
            
        </div>

        <div className='w-1/3 h-full flex '>
            <div className='w-full h-full flex flex-col justify-between pt-50 items-center p-[3%] gap-[2%]'>
                <div className='r-right crd opacity-0 w-[60%] aspect-square flex items-center justify-center '><RiReactjsLine size={100} /></div>
                <div className='r-right crd opacity-0 w-[60%] aspect-square flex items-center justify-center'><RiTailwindCssFill size={100} /></div>
                
            </div>
         
            <div className='w-full h-full flex flex-col justify-between pt-20 items-center p-[3%] gap-[2%]'>
                <div className='r-left crd opacity-0 w-[60%] aspect-square flex items-center justify-center '><RiAndroidLine size={100} /></div>
                <div className='r-left crd opacity-0 w-[60%] aspect-square '><img src="https://img.icons8.com/ios_filled/200/FFFFFF/python.png" className='w-full h-full' alt="" /></div>
                <div className='r-left crd opacity-0 w-[60%] aspect-square '><img src="https://uxwing.com/wp-content/themes/uxwing/download/education-school/letter-c-white-icon.png" className='w-full h-full ' alt="" /></div>
            </div>
         
            
        </div>
    </div>
  )
}

export default Overlay