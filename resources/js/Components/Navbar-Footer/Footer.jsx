import React from 'react'

const images = import.meta.glob('/public/contact/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const infinitelogo = getImageByName('Infinitelogo');
const umnlogo = getImageByName('umnlogo');
const placeholder = getImageByName('placeholder');

function Footer() {
  return (
    <div>
        <div className='bg-[#003049] w-full md:h-[178px] h-[200px] flex flex-wrap justify-center items-center p-5 px-10 md:gap-8'>
          <img src={infinitelogo} className='md:w-[250px] w-[100px]'/>
          <img src={umnlogo} className='md:w-[149px] w-[100px]'/>
          <img src={placeholder} className='ml-10'/>
          <div className="text-[rgb(253,240,245)] text-max-[24px] opacity-80 md:absolute md:bottom-0">Copyright &copy; 2024 INFINITE. All Rights Reserved.</div>
        </div>
    </div>
  )
}

export default Footer
