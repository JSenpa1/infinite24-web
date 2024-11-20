export default function AnswerBox({name, placeholder}){
    return(
        <div>
            <input name={name} className="bg-white w-full text-center border-2 border-light-blue" placeholder={placeholder}/>
        </div>
    )
}