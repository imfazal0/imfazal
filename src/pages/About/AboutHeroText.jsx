import React from 'react'
import { topSkills } from '../../../public/data/About.data'

const AboutHeroText = () => {
    return (
        <div className=' flex flex-col pt-[20vh]  text-xl text-white capitalize font-semibold'>
            <div className='font-bold text-5xl'>About </div>
            <div className='w-[90%] text-justify text-md  flex flex-col py-2 gap-2'>
                <p>I’m Mohd Fazal, a Frontend Web Developer with experience in technologies like HTML, CSS, JavaScript, React.js, React Native, GSAP, and Firebase. I enjoy building modern, responsive, and interactive web applications.</p>
                <p>I have worked on multiple projects to improve my practical knowledge and understand how real-world applications are developed and managed. These projects helped me strengthen my problem-solving skills and frontend development experience.</p>
                <p>Currently, I am pursuing a BCA from MJPRU and completed my 12th with First Division Honors. I also hold certifications such as ADCA, Tally, and CCC, which have helped me build a strong foundation in computer applications and technology</p>
            </div>
            
            <div className='font-bold text-5xl p-2'>Skills</div>
            <div className='w-[90%] py-2 flex  flex-wrap gap-2'>
                {
                    topSkills.map((skill ,index) => (
                        <div
                            key={index}
                            className=" px-4 py-2 rounded-full bg-white/10 border border-white text-sm truncate"
                        >
                            {skill}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutHeroText