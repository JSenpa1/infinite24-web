import { gsap } from "gsap/dist/gsap";

gsap.from(".logoInfinite", {
    duration: 2.5,
    opacity: 0,
    ease: "power2.out",
});

gsap.from(".globe", {
    duration: 2.5,
    opacity: 0,
    ease: "power2.out",
});

gsap.from(".logo1", {
    duration: 1.1,
    opacity: 0,
    delay: 0.3,
    ease: "bounce.out",
    y: -100,
});

gsap.from(".description", {
    duration: 2.2,
    opacity: 0,
    ease: "elastic.out",
    y: -100,
});

gsap.from(".photo1", {
    duration: 2,
    delay: 1,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
});

gsap.from(".tape1", {
    duration: 1,
    delay: 2,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
});

gsap.from(".photo2", {
    duration: 2,
    delay: 2.5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
});

gsap.from(".tape2", {
    duration: 1,
    delay: 3.5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
});

gsap.from(".photo3", {
    duration: 2,
    delay: 4,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
});

gsap.from(".tape3", {
    duration: 1,
    delay: 5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
});

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
                    className="logoInfinite mt-24 ms-16 flex-none h-[108px] w-auto"
                />
                <img
                    src="/aboutus/globe.svg"
                    alt="Globe"
                    className="globe mt-5 flex-none h-[323.65px] w-auto"
                />
            </div>
            <div className="absolute inset-72 flex justify-center z-20">
                <img
                    src="/aboutus/title.svg"
                    alt="About Infinite"
                    className="logo1 max-h-[66px] max-w-[668.53px]"
                />
            </div>
            <div className="description flex justify-center mt-9 font-[600] text-white text-2xl px-[229px]">
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
                        src="/aboutus/tape1.svg"
                        className="tape1 absolute me-24 mt-10 z-20 max-w-[46.39px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(2).JPG"
                        alt="Foto PPIF"
                        className="photo1 max-w-[320px] max-h-[199px] border mt-16 border-[12px] border-white mx-12 rotate-[-13deg]"
                    />
                </div>
                <div className="flex justify-center mt-0">
                    <img
                        src="/aboutus/tape2.svg"
                        className="tape2 absolute ms-10 z-20 max-w-[116px] max-h-[116px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(1).JPG"
                        alt="Foto PPIF"
                        className="photo2 max-w-[320px] max-h-[199px] mt-16 z-0 border border-[12px] border-white mx-12 rotate-[10deg]"
                    />
                </div>
                <div className="flex justify-center mt-10">
                    <img
                        src="/aboutus/tape3.svg"
                        className="tape3 absolute me-24 ms-12 mt-0 z-20 max-w-[82px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(3).JPG"
                        alt="Foto PPIF"
                        className="photo3 max-w-[320px] mt-10 max-h-[199px] border border-[12px] border-white mx-12 rotate-[-17deg]"
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
