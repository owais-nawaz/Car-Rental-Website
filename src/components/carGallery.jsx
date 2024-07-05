import Hatch from './images//hatch.png';
import CompactSUV from './images/compact-suv.png';
import SUV from './images/suv.png';
import SeaterSUV7 from './images/7-seater-suv.png';
import PremiumHatch from './images/premium-hatch.png';
import PremiumCompactSUV from './images/premium-compact-suv.png';
import PremiumSUV from './images/premium-suv.png';
import PremiumSedan from './images/premium-sedan.png';
import PremiumEV from './images/premium-ev.png';

const CarGallery = () => {
  const cars = [
    { name: 'Hatch', image: Hatch },
    { name: 'Compact SUV', image: CompactSUV },
    { name: 'SUV', image: SUV },
    { name: '7 Seater SUV', image: SeaterSUV7 },
    { name: 'Premium Hatch', image: PremiumHatch },
    { name: 'Premium Compact SUV', image: PremiumCompactSUV },
    { name: 'Premium SUV', image: PremiumSUV },
    { name: 'Premium Sedan', image: PremiumSedan },
    { name: 'Premium EV', image: PremiumEV },
  ];

  return (
    <div className="car-gallery">
      <div className="car-info">
        <h2>Our Vehicle's include</h2>
        <ul>
          <li>Unlimited KMs</li>
          <li>Insurance</li>
          <li>Roadside assistance</li>
          <li>Free Additional Drivers</li>
          <li>New models with low kms</li>
        </ul>
      </div>
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.name} className="car-item">
            <img src={car.image} alt={car.name} />
            <p>{car.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
