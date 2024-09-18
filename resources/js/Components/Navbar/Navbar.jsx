import React, { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import IonIcon from "@reacticons/ionicons";
import RegisterButton from "./RegisterButton";

const images = import.meta.glob('/public/Assets/Images/*.svg', { eager: true });

const getImageByName = (name) => {
    const matchingImage = Object.keys(images).find((path) => path.includes(`${name}.svg`));
    return matchingImage ? images[matchingImage].default || images[matchingImage] : null;
};

const Logoimage = getImageByName('LogoInfinite');

function Navbar() {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "#" },
        { name: "TIMELINE", link: "#" },
        { name: "SUPPORT", link: "#" },
    ];

    const [open, setOpen] = useState(false);
    const [navBackground, setNavBackground] = useState("bg-transparent");
    const [textColor, setTextColor] = useState("text-black");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0 || open) {
                setNavBackground("bg-grid-hero bg-white bg-opacity-100　shadow-[0px_-10px_18px_gray]");
                setTextColor("text-slate-700");
            } else {
                setNavBackground("bg-transparent");
                setTextColor("text-black");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [open]);

    return (
        <div className={`w-[100%] fixed top-0 left-0 z-50 ${navBackground} transition-colors duration-300`}>
            <div className="relative top-[140px] left-0 w-screen h-[10px] border-[2px] border-light-red inset-0 z-10" />
            <div className="md:flex items-center justify-between py-10 md:px-10 px-7">
                <div
                    className={`font-bold text-2xl cursor-pointer flex items-center ${textColor} font-sans`}
                >
                    <span className="text-3xl flex flex-row md:items-center items-center gap-10 mr-4 md:pt-0 pt-2">
                        <img
                            src={Logoimage}
                            alt="logo_infinite"
                            className="md:h-[70px] w-auto h-[50px]"
                        />
                    </span>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`text-3xl absolute right-8 top-12 cursor-pointer md:hidden ${textColor}`}
                >
                    <div className="w-12 h-12 bg-dark-blue rounded-md text-white flex item-center justify-center text-[100px] shadow-[0px_10px_18px_gray]">
                        <IonIcon name={open ? "close" : "menu"}></IonIcon>
                    </div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
            ${
                open
                    ? `top-[138px] ${navBackground}`
                    : "top-[-490px] bg-transparent"
            } ${textColor}`}
                >
                    <li className="md:ml-8 mr-6 md:my-0 my-7 text-center">
                        <Link href={Links[0].link} className="hover:text-slate-800 font-extrabold">
                            {Links[0].name}
                        </Link>
                    </li>
                    {Links.slice(1).map((link, index) => (
                        <li
                            key={link.name}
                            className={`md:ml-8 text-[16px] font-extrabold hover:text-slate-800 md:my-0 mr-6 my-7 text-center ${textColor}`}
                        >
                            {link.subLinks ? (
                                <>
                                    <ul
                                        className={`overflow-hidden transition-all duration-500 ease-in-out opacity-0 h-0`}
                                    >
                                        {link.subLinks.map(
                                            (subLink, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="hover:text-gray-500"
                                                >
                                                    <Link href={subLink.link}>
                                                        {subLink.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (
                                <Link href={link.link}>{link.name}</Link>
                            )}
                        </li>
                    ))}
                    <li className="md:ml-8 mr-6 md:my-0 my-7 flex">
                        <RegisterButton />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
