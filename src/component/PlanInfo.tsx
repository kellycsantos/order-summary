import { IPlan } from "../interface/IPlan"
export default function Plan({ iconImg, planType }: IPlan) {
    return (
        <section role="planinfo" className="planinfo">

            <img src={iconImg} alt="icon-music" />
            <div className="planinfo_details">
                <h3> {planType} Plan
                </h3>
                <p> $59.99/year</p>
            </div>
            <a href="#">Change</a>

        </section>
    )
}