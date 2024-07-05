import cars from "./images/cars.png"
import car1 from "./images/img-01.png"
import car2 from "./images/img-kona.png"
import car3 from "./images/img-7seater.png"

function Header() {
    return (
        <main className="main">
            <h1>Convenient, cost-effective, and stress-free<br></br> car rentals at your fingertips</h1>
            <p>Includes insurance, free additional drivers, roadside assist and unlimited KMS</p>
            <button class="bookButton" aria-current="page">Show Cars</button>
            <img src={cars} alt="Car Rentals" className="main-image"></img>
            <span>Long term hire is also available</span>
            <div class="card-container">
                <div class="card">
                    <img src={car1} alt="Car 1"></img>
                    <div class="card-text">
                        <h2>Car hire from <br></br> <span>$39 per day!</span></h2>
                        <p>*Brisbane only</p>
                    </div>
                </div>
                <div class="card">
                    <img src={car2} alt="Car 2"></img>
                    <div class="card-text">
                        <h2>2024 Hyundai Kona <br></br> <span>Now available!</span></h2>
                        <p>*Brisbane only</p>
                    </div>
                </div>
                <div class="card">
                    <img src={car3} alt="Car 3"></img>
                    <div class="card-text">
                        <h2>7 seater SUV from <br></br> <span>$65 per day*</span></h2>
                        <p>*Sydney only - minimum hire period applies</p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Header;