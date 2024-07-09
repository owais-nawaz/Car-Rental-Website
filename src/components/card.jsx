import carBack from "./images/car-back.png"

function Card() {
    return (
        <div className="info-card">
            <div>
                <img src={carBack} alt="car-back" />
            </div>
            <div className="info">
                <h2>Rent a car from ALD Car Rentals</h2>
                <p>At ALD Car Rental, we offer an extensive range of vehicles to cater to all your transportation requirements. Whether you're looking for a personal car for everyday use, a private vehicle for special occasions, or a reliable fleet for your business deliveries, ALD Car Rental has you covered. Our diverse selection ensures you find the perfect vehicle for any purpose, from compact cars and luxury sedans to spacious vans and utility trucks.</p>
                <button class="bookButton" aria-current="page">BOOK NOW</button>
            </div>
        </div>
    )
}
export default Card;