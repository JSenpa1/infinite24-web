import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".logoInfinite", {
    duration: 2.5,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".logoInfinite",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".globe", {
    duration: 2.5,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".globe",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".logo1", {
    duration: 1.1,
    opacity: 0,
    delay: 0.3,
    ease: "bounce.out",
    y: -100,
    scrollTrigger: {
        trigger: ".logo1",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".description", {
    duration: 2.2,
    opacity: 0,
    ease: "elastic.out",
    y: -100,
    scrollTrigger: {
        trigger: ".description",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".photo1", {
    duration: 2,
    delay: 1,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
    scrollTrigger: {
        trigger: ".photo1",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".tape1", {
    duration: 1,
    delay: 2,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
    scrollTrigger: {
        trigger: ".tape1",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".photo2", {
    duration: 2,
    delay: 2.5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
    scrollTrigger: {
        trigger: ".photo2",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".tape2", {
    duration: 1,
    delay: 3.5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
    scrollTrigger: {
        trigger: ".tape2",
        start: "top 80%",
        toggleActions: "play none none none",
    },
});

gsap.from(".photo3", {
    duration: 2.1,
    delay: 4,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
    scrollTrigger: {
        trigger: ".photo3",
        start: "top 100%",
        toggleActions: "play none none none",
    },
});

gsap.from(".tape3", {
    duration: 1,
    delay: 5,
    ease: "rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })",
    opacity: 0,
    scrollTrigger: {
        trigger: ".tape3",
        start: "top 100%",
        toggleActions: "play none none none",
    },
});

function AboutUs() {
    return (
        <div className="text-center bg-[url('/aboutus/background.png')]">
            <div className="relative">
                <img
                    src="/aboutus/ripped-paper.png"
                    alt="Kasihanbeutdirobek"
                    className="absolute inset-0 z-0 w-full h-auto object-cover"
                />
            </div>
            <div className="flex items-center justify-between relative z-10 overflow-clip">
                <img
                    src="/aboutus/infinite.svg"
                    alt="Infinite-banner"
                    className="logoInfinite flex-none
                    -mt-60 ms-5 h-[61.38px]
                    md:-mt-36 md:ms-5 md:h-[108px] md:w-[323.58px]
                    lg:mt-20 lg:ms-16 lg:h-[108px] lg:w-[323.58px]"
                />
                <img
                    src="/aboutus/globe.svg"
                    alt="Globe"
                    className="globe mt-0 flex-none w-auto 
                    lg:mt-5 lg:h-[323.65px] lg:opacity-100 
                    md:opacity-0 md:h-15 h-[323.65px] opacity-0 "
                />
            </div>

            <div className="absolute inset-x-0 lg:top-72 md:top-56 top-40 flex flex-col lg:flex-row items-center justify-center z-20 space-y-1 lg:space-y-0 lg:space-x-4">
                <img
                    src="/aboutus/title1.svg"
                    alt="About Infinite"
                    className="logo1 max-h-[80px] max-w-[80%] lg:max-h-[80px] lg:max-w-[668.53px]"
                />
                <img
                    src="/aboutus/title2.svg"
                    alt="About Infinite"
                    className="logo1 max-h-[80px] max-w-[80%] lg:max-h-[80px] lg:max-w-[668.53px]"
                />
            </div>
            <div className="description text-white flex font-[600] justify-start text-start mt-0 md:mt-10 mb-10 text-xl px-8 lg:text-center lg:mt-9 lg:text-2xl lg:px-[229px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum libero risus, posuere id porttitor et, pretium et
                neque. Praesent ex nunc, tempus dignissim mauris id, vehicula
                fermentum odio. Fusce quis volutpat enim. Vivamus eu dapibus
                ligula. Etiam erat metus, commodo nec elementum varius, euismod
                sit amet erat.
            </div>
            <div className="flex flex-wrap justify-center md:mt-6 lg:px-16">
                <div className="relative flex justify-center mt-6 md:mt-0 md:w-1/2 lg:w-1/3">
                    <img
                        src="/aboutus/tape1.svg"
                        className="tape1 absolute me-6 z-20 max-w-[30px] md:max-w-[46.39px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(2).JPG"
                        alt="Foto PPIF"
                        className="photo1 max-w-[280px] md:max-w-[320px] max-h-[150px] md:max-h-[199px] mt-5 md:mt-10 border-[8px] md:border-[12px] border-white mx-6 md:mx-12 rotate-[-13deg]"
                    />
                </div>
                <div className="relative flex justify-center mt-6 md:mt-0 md:w-1/2 lg:w-1/3">
                    <img
                        src="/aboutus/tape2.svg"
                        className="tape2 absolute ms-6 z-20 max-w-[80px] md:max-w-[116px] max-h-[80px] md:max-h-[116px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(1).JPG"
                        alt="Foto PPIF"
                        className="photo2 max-w-[280px] md:max-w-[320px] max-h-[150px] md:max-h-[199px] mt-12 mb-8 md:mt-16 z-0 border-[8px] md:border-[12px] border-white mx-6 md:mx-12 rotate-[10deg]"
                    />
                </div>
                <div className="relative flex justify-center mt-6 md:mt-0 md:w-full lg:w-1/3">
                    <img
                        src="/aboutus/tape3.svg"
                        className="tape3 absolute me-6 ms-4 md:ms-12 z-20 max-w-[50px] md:max-w-[82px]"
                    />
                    <img
                        src="/aboutus/fotopleno1(3).jpg"
                        alt="Foto PPIF"
                        className="photo3 max-w-[280px] md:max-w-[320px] mt-5 md:mt-10 max-h-[150px] md:max-h-[199px] border-[8px] md:border-[12px] border-white mx-6 md:mx-12 rotate-[-17deg]"
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

export default AboutUs;
