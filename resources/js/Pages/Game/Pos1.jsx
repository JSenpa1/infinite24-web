import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import Button from "../../Components/Game/Button";
import PopUpNext from "../../Components/Game/PopUpNext";
import AnswerBox from "../../Components/Game/Pos1/AnswerBox";

export default function Pos1({ error, success, data }) {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const [showPopup, setShowPopup] = useState(false);
    const gridPath = "/Assets/GridPenghapus.png";

    useEffect(() => {
        if (success) {
            setShowPopup(true);
        }
    }, [success]);

    return (
        <div className="bg-dark-blue">
            <div className="container flex flex-col items-center justify-center mx-auto h-fit md:h-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-[#d37d3f] shadow-xl mt-32 sm:mt-52 md:mt-0 w-[330px] h-[270px] sm:w-[400px] md:w-[740px] lg:w-[820px] px-4 md:px-7 py-4 md:py-7 hidden md:flex justify-center items-center sm:h-[300px] md:h-[450px] relative">
                        <div
                            className="bg-[#015b43] shadow-lg w-full flex flex-col md:flex-row gap-4 md:gap-6 justify-center h-full relative"
                            style={{
                                backgroundImage: `url(${gridPath})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[40%] pt-4 text-lg text-white"
                                >
                                    <div className="flex justify-center">
                                        <img
                                            className="w-1/2"
                                            src={item.title}
                                        />
                                    </div>
                                    <img
                                        src={item.image}
                                        alt={`Image ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {data.map((item, index) => (
                        <div className="bg-[#d37d3f] shadow-xl mt-4 w-[330px] h-[270px] sm:w-[400px] md:w-[740px] lg:w-[820px] px-4 md:px-7 py-4 md:py-7 flex md:hidden justify-center items-center sm:h-[300px] md:h-[450px] relative">
                            <div
                                className="bg-[#015b43] shadow-lg w-full flex flex-col md:flex-row gap-4 md:gap-6 items-center h-full relative"
                                style={{
                                    backgroundImage: `url(${gridPath})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div
                                    key={index}
                                    className="flex flex-col w-[50%] md:w-[50%] pt-4 text-lg text-white"
                                >
                                    <div className="flex justify-center">
                                        <img
                                            className="w-1/2"
                                            src={item.title}
                                        />
                                    </div>
                                    <img
                                        src={item.image}
                                        alt={`Image ${index + 1}`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {error ? (
                        <div className="flex justify-center mt-6">
                            <Alert severity="error">{error}</Alert>
                        </div>
                    ) : null}
                    <form
                        action="game/11/confirmation"
                        method="post"
                        className="w-4/5 mt-6 h-fit"
                    >
                        <input type="hidden" name="_token" value={csrfToken} />
                        <div className="flex flex-col justify-around h-full lg:flex-row">
                            <div className="grid w-full h-auto grid-cols-3 gap-5 mb-5 lg:w-1/3 lg:mb-0">
                                <div className="col-span-3 text-lg text-center text-white">
                                    Jawaban Soal 1
                                </div>
                                <AnswerBox name="answer1a" placeholder="A=?" />
                                <AnswerBox name="answer2a" placeholder="B=?" />
                                <AnswerBox name="answer3a" placeholder="C=?" />
                                <AnswerBox name="answer4a" placeholder="D=?" />
                                <AnswerBox name="answer5a" placeholder="E=?" />
                                <AnswerBox name="answer6a" placeholder="F=?" />
                                <AnswerBox name="answer7a" placeholder="G=?" />
                                <AnswerBox name="answer8a" placeholder="H=?" />
                                <AnswerBox name="answer9a" placeholder="I=?" />
                            </div>
                            <div className="grid w-full h-auto grid-cols-4 gap-5 mb-5 lg:w-1/3">
                                <div className="col-span-4 text-lg text-center text-white">
                                    Jawaban Soal 2
                                </div>
                                <AnswerBox name="answer1b" placeholder="A=?" />
                                <AnswerBox name="answer2b" placeholder="B=?" />
                                <AnswerBox name="answer3b" placeholder="C=?" />
                                <AnswerBox name="answer4b" placeholder="D=?" />
                                <AnswerBox name="answer5b" placeholder="E=?" />
                                <AnswerBox name="answer6b" placeholder="F=?" />
                                <AnswerBox name="answer7b" placeholder="G=?" />
                                <AnswerBox name="answer8b" placeholder="H=?" />
                                <AnswerBox name="answer9b" placeholder="I=?" />
                                <AnswerBox name="answer10b" placeholder="J=?" />
                                <AnswerBox name="answer11b" placeholder="K=?" />
                                <AnswerBox name="answer12b" placeholder="L=?" />
                            </div>
                        </div>
                        <div className="flex justify-center pb-5">
                            <Button
                                color="[#669BBC]"
                                cursorType="/images/cursorBlue.svg"
                            />
                        </div>
                    </form>
                </div>
            </div>
            {showPopup && <PopUpNext action="/game/12/confirmation" />}
        </div>
    );
}
