import React from 'react'
import TimelineButton from './TimelineButton'
import LearnMore from './LearnMore'
import MarqueeWrapper from './MarqueeWrapper';

const images = import.meta.glob('/public/Assets/Images/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const dart = getImageByName('dart');
const turtle01 = getImageByName('Turtle01');
const turtle02 = getImageByName('Turtle02');


function HeroHome() {
  return (
    <div>
        <div className='bg-grid-hero md:h-screen w-screen '>
            <div className="relative top-[140px] left-0 w-screen h-[10px] border-[2px] border-light-red inset-0 z-10" />
            <div className='flex md:flex-row flex-col items-center md:justify-normal justify-center relative top-[120px] md:left-20 p-8 '>
                <div className='flex flex-col md:w-[55%] w-[90%]'>
                    <h1 className='text-dark-blue md:text-[60px] text-[50px] leading-normal font-extrabold'>
                        Ignite Innovation, Be The Catalyze
                    </h1>
                    <p className='text-dark-blue font-semibold mt-5'>
                       Halo Teman-Teman!!!
                    </p>
                    <p className='mt-5 text-dark-blue font-semibold'>
                    Selamat datang di Acara Infinite! Kita disini berkumpul bersama untuk merayakan perjalanan kita sebagai Mahasiswa Informatika. Ini adalah momen spesial di mana kita bisa bonding dengan teman-teman dari berbagai angkatan, berbagi cerita, dan tentu saja, bersenang-senang!
                    </p>
                    <div className='pt-10 flex md:flex-row flex-col md:gap-[60px] gap-[30px] items-center'>
                        <TimelineButton />
                        <LearnMore />
                    </div>
                </div>
                <div className='relative mt-6 md:block hidden'>
                    <img src={turtle02} className='absolute inset-0 z-20 left-[46%] top-[19%]' alt="" />
                    <img src={turtle01} className='absolute inset-0 z-10 left-[52%] top-[23%]' alt="" />
                    <img src={dart} className='h-[600px] relative md:left-[100px]' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroHome