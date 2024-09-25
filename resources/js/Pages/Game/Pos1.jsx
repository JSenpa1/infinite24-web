import Alert from '@mui/material/Alert';
import AnswerBox from '../../Components/Game/Pos1/AnswerBox'
import Button from '../../Components/Game/Button'

export default function Pos1({ error }){
    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    return(
        <div className="bg-dark-blue">
            <div className="container flex flex-col justify-center items-center mx-auto min-h-screen">
                <div className="flex flex-col justify-center items-center">
                    {/* <img /> */}
                    <div className="border-2 border-white aspect-video w-4/5 lg:w-3/5 mb-5">

                    </div>
                    {error ? (
                        <div className="flex justify-center">
                            <Alert severity="error">{ error }</Alert>
                        </div>
                    ) : null
                    }
                    <form action="game/1/confirmation" method="post" className="w-4/5 h-fit">
                        {/* <input type="hidden" name="_token" value={csrfToken} /> */}
                        <div className="flex flex-col lg:flex-row h-full justify-around">
                            <div className="grid grid-cols-3 gap-5 w-full lg:w-1/3 mb-5 lg:mb-0 h-full">
                                <div className="col-span-3 text-center text-lg text-white">Jawaban Soal 1</div>
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
                            <div className="grid grid-cols-4 gap-5 w-full lg:w-1/3 mb-5 h-full">
                                <div className="col-span-4 text-center text-lg text-white">Jawaban Soal 2</div>
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
                                <AnswerBox name="answer13b" placeholder="M=?" />
                                <AnswerBox name="answer14b" placeholder="N=?" />
                                <AnswerBox name="answer15b" placeholder="O=?" />
                                <AnswerBox name="answer16b" placeholder="P=?" />
                            </div>
                        </div>
                        <div className="flex justify-center pb-5"><Button color="light-blue" /></div>
                    </form>
                </div>
            </div>
        </div>
    );
}