import React from 'react'
import ShinyText from '../../Animation/ShinyText/ShinyText'
import './Contact.css'
import SpotlightCard from '../../Animation/SpotlightCard/SpotlightCard'
import { Link as ScrollLink, Element } from 'react-scroll';
const Contact = () => {

  // mail code form web3forms
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0d16158b-05a2-4cc0-84fd-240b5971ea6e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(" Submitted Successfully 😊 ");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <Element name='contact' className='' data-aos="fade-up" >
    {/* <Element name='contact' className='zoom-in' > */}
        <div className='w-[100%] lg:w-[80%] mx-auto  ' >
        <h1 className='text-xl md:text-2xl mx-10 mt-18 text-center md:text-start font-medium'><ShinyText text="CONTACT WITH ME" disabled={false} speed={3} className='custom-class mb-3' /></h1>

        <div className='w-[90%] max-w-7xl mx-auto mt-8 text-white'>
  <div className='flex flex-col md:flex-row gap-10'>

    {/* Contact Form */}
    <div className='w-full md:w-1/2 border rounded-4xl backdrop-blur-md'
      style={{ borderColor: "rgba(147, 147, 147,0.8)" }}>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(147,147,147,0.3)">
        <form className='p-6 transition duration-500' onSubmit={onSubmit}>
          <p className='text-xs md:text-sm mb-4'>
            If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
          </p>

          <div className='mt-5 text-green-400 text-sm md:text-lg space-y-5'>

            <label htmlFor="name" className='flex flex-col gap-2'>
              Your Name:
              <input type='text' name='name' className='h-10 pl-4 rounded-md text-black w-full' required />
            </label>

            <label htmlFor="email" className='flex flex-col gap-2'>
              Your Email:
              <input type='email' name='email' className='h-10 pl-4 rounded-md text-black w-full' required />
            </label>

            <label htmlFor='msg' className='flex flex-col gap-2'>
              Your Message:
              <textarea name='msg' className='resize-none h-24 pl-4 py-3 rounded-md text-black w-full' required></textarea>
            </label>

            <div className='flex justify-center'>
              <button type='submit'
                className='mt-5 btn px-6 py-2 rounded-xl text-gray-100 font-semibold hover:scale-105 active:scale-105 transition duration-150'>
                Send Message &nbsp; <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>

            <p className='text-center mt-3 text-sm'>{result}</p>
          </div>
        </form>
      </SpotlightCard>
    </div>

    {/* Map & Social Links */}
    <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>

      {/* Map */}
      <iframe
        className='hover:scale-105 transition duration-500 rounded-2xl w-full h-48 sm:h-64 md:h-72 lg:h-80'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.7161025078096!2d78.14203256989802!3d8.798806944416617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03efbcfb0b75e1%3A0x3801755de723d6bf!2sShri%20Muniya%20Saami%20Temple!5e0!3m2!1sen!2sin!4v1751968397471!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "none" }}
      ></iframe>

      <hr className='mt-10 w-[80%] border-gray-500' />

      {/* Social Section */}
      <div className='flex flex-col items-center mt-8'>
        <h1 className='text-2xl font-medium mb-3'>
          <ShinyText text="Say Hello On" disabled={false} speed={3} className='custom-class' />
        </h1>

        <div className='flex gap-6 lg:gap-10 text-3xl lg:text-5xl text-gray-200 mt-3'>
              <a href='https://www.linkedin.com/in/arjun-b-b5ba9928b/'>  <i className="fa-brands fa-linkedin hover:text-blue-400 active:text-blue-400 hover:scale-110 active:scale-110 transition duration-150"></i></a>
           <a href='https://github.com/arjun-717'>     <i className="fa-brands fa-github  hover:text-gray-500 active:text-gray-500 hover:scale-110 active:scale-110 transition duration-150"></i></a>
       <a href='https://www.reddit.com/user/AjuuDev/'>  <i className="fa-brands fa-reddit active:text-orange-600 hover:text-orange-600 hover:scale-110 active:scale-110 transition duration-150"></i></a>
               <a href="mailto:arjun7172003@gmail.com?subject=Contact%20via%20Portfolio&body=Hello%20Arjun,">
                  <i className="fa-solid fa-envelope hover:text-red-600 active:text-red-600 hover:scale-110 active:scale-110 transition duration-150"></i>
                    </a>
           <a href="https://wa.me/919342429886?text=Hello%20Arjun,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp  active:text-green-400 hover:text-green-400 hover:scale-110 active:scale-110 transition duration-150"></i>
                    </a>
        
        </div>

        <h1 className='text-md mt-8 font-medium'>
          <ShinyText text="developed by Arjun❤️" disabled={false} speed={3} className='custom-class mb-10 md:mb-0' />
        </h1>
      </div>
    </div>
  </div>
</div>




      </div>
    </Element>
    

    </>
  )
}

export default Contact