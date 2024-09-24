import React, { useEffect, useRef } from 'react';

const images = import.meta.glob('/public/contact/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const contactus = getImageByName('contact');
const us = getImageByName('us');
const instagram = getImageByName('instagram');
const whatsapp = getImageByName('whatsapp');
const line = getImageByName('line');
const background = getImageByName('background');

const Contact = ({ id }) => {

  const sectionRefs = useRef([]);

  const transitionRef = (el) => {
    if(el && !sectionRefs.current.includes(el)){
      sectionRefs.current.push(el);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'y-0');
        } else {
          entry.target.classList.remove('opacity-100', 'y-0');
        }
      });
    });

    sectionRefs.current.forEach((ref) => {
      if(ref) observer.observe(ref);
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if(ref) observer.unobserve(ref);
      });
    };
  }, []);


  return (
   <div id={id} className="w-full aspect-[144/83] bg-cover bg-center flex flex-col min-h-screen pt-8" style={{ backgroundImage: `url(${background})` }}>

        <div ref={transitionRef} className='opacity-0 y-10 transition-all duration-[3s] ease-in-out flex flex-col md:flex-row flex-grow justify-center items-center mx-auto md:mt-20 md:space-x-11 space-y-5 md:space-y-0 px-5'>
          <div className="h-[20%] md:h-[80px] ">
            <img src={contactus} className="w-auto h-full"/>
          </div>
          <div className="h-[15%] md:h-[80px]">
            <img src={us} className="w-auto h-full"/>
          </div>
        </div>

        <div ref={transitionRef} className='opacity-0 y-10 transition-all duration-[3s] ease-in-out flex flex-grow md:space-x-[80px] space-x-8 justify-center md:mt-5'>
          <div className="relative mt-8 md:mt-[145px]">
            <a href="https://www.instagram.com/infinite.umn?igsh=NjAxemxwcXI3Z2R1" target="_blank" rel="noopener noreferrer" className="w-[90px] md:w-[190px] md:h-[190px] flex justify-center items-center">
              <img src={instagram} className="mix-blend-multiply hover:scale-[120%] ease-in-out duration-[0.5s]"/>
            </a>
          </div>

          <div className="relative">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-[90px] md:w-[190px] md:h-[190px] flex justify-center items-center">
              <img src={whatsapp} className="mix-blend-multiply hover:scale-[120%] ease-in-out duration-[0.5s]"/>
            </a>
          </div>

          <div className="relative mt-8 md:mt-[145px]">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-[90px] md:w-[190px] md:h-[190px] flex justify-center items-center">
              <img src={line} className="mix-blend-multiply hover:scale-[120%] ease-in-out duration-[0.5s]"/>
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact
