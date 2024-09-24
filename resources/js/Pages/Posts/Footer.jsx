const images = import.meta.glob('/public/footer/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const infinitelogo = getImageByName('Infinitelogo');
const umnlogo = getImageByName('umnlogo');
const placeholder = getImageByName('placeholder');

function footer(){
    return(
        <div>
            <footer className="hidden md:block">
                <div class="bg-dark-blue w-full md:h-auto flex flex-col md:flex-row justify-center items-center py-3 md:px-10 order-1">
                    <img src={infinitelogo} className="w-[150px] md:w-[250px] mb-2 md:mb-0" />
                    <img src={umnlogo} className="w-[90px] md:w-[149px] mb-2 md:mb-0" />
                    <p className="flex text-wrap text-center md:text-left text-[#FDF0F5] text-[10px] md:text-[24px] opacity-80 md:ms-10">
                        Copyright &copy; 2024 INFINITE. All Rights Reserved.
                    </p>
                    <a href="#"><img src={placeholder} className="w-[50px] md:w-[72px] mb-2 mx-6 md:mb-5" /></a>
                </div>
            </footer>

            <footer className="block md:hidden">
                <div className="bg-dark-blue w-full md:h-[178px] flex flex-col md:flex-row justify-center items-center py-3 md:px-10">
                    <div className="flex flex-row items-center">
                        <img src={infinitelogo} className="w-[150px] md:w-[250px]" />
                        <img src={umnlogo} className="w-[90px] md:w-[149px]" />
                        <a href="#"><img src={placeholder} className="hover:animate-bounce w-[50px] md:w-[100%] ml-[30px] md:ml-[50px]" /></a>
                    </div>
                    <div className="text-center md:text-left text-[#FDF0F5] text-[10px] md:text-[24px] opacity-80 md:ml-[100px]">
                        Copyright &copy; 2024 INFINITE. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}




export default footer;