import carBack from "./images/car-back.png"

function Card() {
    return (
        <div className="info-card">
            <div>
                <img src={carBack} alt="car-back" />
            </div>
            <div className="info">
                <h2>Rent a car from iDrive Rentals Australia</h2>
                <p>iDrive Rentals is a rental provider in Australia offering cost saving car hire with our 5 star service. We offer all inclusive pricing of our modern fleet that includes small compact cars, large cars, SUVs and luxury vehicles. We have a range of fantastic offers so you get the best deal and you can add extra drivers, baby seats and other optional products to your rental for a seamless experience. iDrive Rentals makes car rental easy and convenient using our website. You can book a car in a matter of minutes!</p>
                <button class="bookButton" aria-current="page">BOOK NOW</button>
            </div>
        </div>
    )
}
export default Card;