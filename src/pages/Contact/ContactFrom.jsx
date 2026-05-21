import React, { useRef, useState } from 'react'
import { Mail, Phone, User, Send } from 'lucide-react'

const ContactForm = () => {
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    message: ''
  });

 

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <section className='w-full h-full flex items-center justify-center text-white pb-10'>


      <div className='w-[90%] h-full rounded-[40px] border border-white/10 backdrop-blur-md bg-white/5 flex overflow-hidden shadow-2xl'>


        <div className='w-1/2 h-full flex flex-col justify-center px-16 bg-gradient-to-br from-blue-950/40 to-purple-950/40'>

          <h1 className='text-6xl font-bold leading-tight'>
            Let's <br /> Work Together
          </h1>

          <p className='text-zinc-300 text-lg mt-6 leading-relaxed w-[85%]'>
            Have a project idea, freelance work, or collaboration opportunity?
            Feel free to contact me. I’ll get back to you as soon as possible.
          </p>

          <div className='mt-10 flex flex-col gap-5 text-zinc-200'>

            <div className='flex items-center gap-4'>
              <Mail size={22} />
              <span className='text-lg'>mohdfazal655@gmail.com</span>
            </div>

            <div className='flex items-center gap-4'>
              <Phone size={22} />
              <span className='text-lg'>+91 8960536286</span>
            </div>

          </div>
        </div>

        <div className='w-1/2 h-full flex items-center justify-center'>

          <form className='w-[80%] flex flex-col gap-4' onSubmit={handleSubmit}>


            <div className='flex flex-col '>
              <label
                htmlFor='name'
                className='text-lg font-semibold flex items-center gap-2'
              >
                <User size={20} />
                Full Name
              </label>

              <input
                required
                type='text'
                id='name'
                placeholder='Elon Musk'
                className='w-full bg-transparent border-b border-zinc-500 py-3 text-xl outline-none focus:border-white transition-all duration-300 placeholder:text-zinc-500'
              />
            </div>


            <div className='flex flex-col '>
              <label
                htmlFor='email'
                className='text-lg font-semibold flex items-center gap-2'
              >
                <Mail size={20} />
                Email Address
              </label>

              <input
                ref={emailRef}
                
                required
                type='email'
                id='email'
                placeholder='elon@tesla.com'
                className='w-full bg-transparent border-b border-zinc-500 py-3 text-xl outline-none focus:border-white transition-all duration-300 placeholder:text-zinc-500'
              />
            </div>


            <div className='flex flex-col '>
              <label
                htmlFor='phone'
                className='text-lg font-semibold flex items-center gap-2'
              >
                <Phone size={20} />
                Mobile Number
              </label>

              <input
                ref={phoneRef}
                required
                type='tel'
                id='phone'
                placeholder='+91 9988776655'
                className='w-full bg-transparent border-b border-zinc-500 py-3 text-xl outline-none focus:border-white transition-all duration-300 placeholder:text-zinc-500'
              />
            </div>


            <div className='flex flex-col gap-2'>
              <label
                htmlFor='message'
                className='text-lg font-semibold'
              >
                Message
              </label>

              <textarea
                id='message'
                rows='4'
                placeholder='Tell me about your project...'
                className='w-full bg-transparent border border-zinc-600 rounded-2xl p-4 text-lg outline-none resize-none focus:border-white transition-all duration-300 placeholder:text-zinc-500'
              ></textarea>
            </div>


            <button
              type='submit'
              className='w-fit px-8 py-4 rounded-full bg-white text-black font-semibold text-lg flex items-center  hover:scale-105 transition-all duration-300 gap-2'
            >
              Send Message
              <Send size={20} />
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactForm