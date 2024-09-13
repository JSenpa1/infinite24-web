function Home() {
    return (
        <div className="text-center bg-[url('/aboutus/background.png')]">
            <div className="relative">
                <img
                    src="/aboutus/ripped-paper.png"
                    alt="Kasihanbeutdirobek"
                    className="absolute inset-0 z-0"
                />
            </div>
            <div className="flex items-center justify-between relative z-10">
                <img
                    src="/aboutus/infinite.svg"
                    alt="Infinite-banner"
                    className="mt-24 ms-16 flex-none h-[108px] w-auto"
                />
                <img
                    src="/aboutus/globe.svg"
                    alt="Globe"
                    className="mt-5 flex-none h-[323.65px] w-auto"
                />
            </div>
            <div className="absolute inset-72 flex justify-center z-20">
                <img
                    src="/aboutus/title.png"
                    alt="About Infinite"
                    className="max-h-[66px] max-w-[668.53px]"
                />
            </div>
            <div className="flex justify-center mt-9 font-[600] text-white text-2xl px-[229px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum libero risus, posuere id porttitor et, pretium et
                neque. Praesent ex nunc, tempus dignissim mauris id, vehicula
                fermentum odio. Fusce quis volutpat enim. Vivamus eu dapibus
                ligula. Etiam erat metus, commodo nec elementum varius, euismod
                sit amet erat.
            </div>
            <div className="inline-flex">
                <div className="flex justify-center mt-6">
                    <img
                        src="/aboutus/tape1.png"
                        className="absolute me-24 mt-10 z-20 max-w-[46.39px]"
                    />
                    <img
                        src="/aboutus/fotobersamapleno1.JPG"
                        alt="Foto PPIF"
                        className="max-w-[320px] max-h-[199px] border mt-16 border-8 border-white mx-12 rotate-[-13deg]"
                    />
                </div>
                <div className="flex justify-center mt-0">
                    <img
                        src="/aboutus/tape2.png"
                        className="absolute ms-10 z-20 max-w-[116px] max-h-[116px]"
                    />
                    <img
                        src="/aboutus/fotobersamapleno1.JPG"
                        alt="Foto PPIF"
                        className="max-w-[320px] max-h-[199px] mt-16 z-0 border border-8 border-white mx-12 rotate-[10deg]"
                    />
                </div>
                <div className="flex justify-center mt-10">
                    <img
                        src="/aboutus/tape3.PNG"
                        className="absolute me-24 ms-12 mt-0 z-20 max-w-[82px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(2).JPG"
                        alt="Foto PPIF"
                        className="max-w-[320px] mt-10 max-h-[199px] border border-8 border-white mx-12 rotate-[-17deg]"
                    />
                </div>
            </div>
            <div>
                <img
                    src="/aboutus/hexagon.png"
                    alt="hexagon"
                    className="mt-16"
                />
            </div>
        </div>
    );
}

export default Home;
