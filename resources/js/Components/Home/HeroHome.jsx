import React from 'react'
import TimelineButton from './TimelineButton'
import LearnMore from './LearnMore'


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
            <div className='flex flex-row items-center relative top-[120px] left-20 p-8 '>
                <div className='flex flex-col w-[55%]'>
                    <h1 className='text-dark-blue text-[60px] font-extrabold'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h1>
                    <p className='text-dark-blue font-semibold mt-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quam consequatur veritatis natus voluptatem deleniti enim voluptatibus delectus numquam amet suscipit, quod debitis tenetur accusantium nesciunt mollitia, dolores dolor officia!
                    </p>
                    <p className='mt-5 text-dark-blue font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, doloremque aliquid? Nobis deserunt quia temporibus!
                    </p>
                    <div className='pt-10 flex flex-row gap-[60px] items-center'>
                        <TimelineButton />
                        <LearnMore />
                    </div>
                </div>
                <div className='relative mt-6'>
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