const images = import.meta.glob('/public/contact/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const contactus = getImageByName('contactus');
const instagram = getImageByName('instagram');
const whatsapp = getImageByName('whatsapp');
const infinitelogo = getImageByName('Infinitelogo');
const umnlogo = getImageByName('umnlogo');
const line = getImageByName('line');
const placeholder = getImageByName('placeholder');
const background = getImageByName('background');


function contact() {
  return ( 
   <div className="w-full aspect-[144/83] bg-cover bg-center flex flex-col min-h-screen pt-8" style={{ backgroundImage: `url(${background})` }}>
        
        <div className='flex-grow'>
          <img src={contactus} className='w-[600px] mx-auto mt-[100px]'/>
        </div>
        
        <div className='flex flex-grow space-x-[80px] justify-center'>
          <a href="https://www.instagram.com/infinite.umn?igsh=NjAxemxwcXI3Z2R1" className="w-[200px]">
            <img src={instagram} className="w-[200px] h-auto mt-[150px] mix-blend-multiply"/>
          </a>
          <a>
            <img src={whatsapp} className="w-[200px] h-auto mix-blend-multiply"/>
          </a>
          <a>
            <img src={line} className="w-[200px] h-auto mt-[150px] mix-blend-multiply"/>
          </a>
        </div>

        <div className='bg-[#003049] w-full  h-[178px] flex justify-center items-center p-5 px-10'>
          <img src={infinitelogo} className='w-[250px]'/>
          <img src={umnlogo} className='w-[149px]'/>
          <div className="text-[#FDF0F5] text-[24px] opacity-80 ml-[100px]">Copyright &copy; 2024 INFINITE. All Rights Reserved.</div>
          <img src={placeholder} className='ml-10'/>
        </div>      
    </div>
  )
}

export default contact
