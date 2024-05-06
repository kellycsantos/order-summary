import { IPlan } from "../interface/IPlan"
export default function Plan({iconImg} : IPlan){
    return(
        <section role="planinfo" className="planinfo">
            <img src={iconImg} alt="icon-music"/>
            <div>

            </div>
        </section>
    )
}