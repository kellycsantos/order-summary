import { IButton } from "../interface/IButton"
export default function Button({text, variable} : IButton){
    return(
        <button className={`button ${variable}`}>{text}</button>
    )
}