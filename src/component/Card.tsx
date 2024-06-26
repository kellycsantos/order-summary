import Button from "./Button"
import { ICard } from "../interface/ICard"
import Plan from "./PlanInfo"

export default function CardSumary({ bgHeader, imgIcon }: ICard) {
    return (
        <main className="card-container">
            <header style={{ background: `url(${bgHeader})` }} />
            <section className="card_body">
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>

                <Plan planType="Annual" iconImg={imgIcon}/>
                <Button text="Proceed to Payment" variable="primary" />
                <Button text="Cancel Order" variable="secondary" />

            </section>


        </main>
    )
}