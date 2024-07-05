import React, { useState } from 'react';

function CarRentalForm() {
  const [formData, setFormData] = useState({
    pickupLocation: 'Albion, Brisbane',
    returnLocation: 'Albion, Brisbane',
    driverAge: '25+',
    pickupDate: '2024-07-06',
    returnDate: '2024-07-13',
    pickupTime: '10:00',
    returnTime: '10:00',
    promoCode: ''
  });

  const locations = ['Albion, Brisbane', 'Auburn, Sydney', 'Port Melbourne', 'Hobart, Tasmania'];
  const driverAges = ['21', '22', '23', '24', '25+'];

  const generateTimeOptions = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      times.push(`${i.toString().padStart(2, '0')}:00`);
      times.push(`${i.toString().padStart(2, '0')}:30`);
    }
    return times;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pickup:</label>
          <select
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <label>Date & Time:</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
          />
          <select
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
          >
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Return:</label>
          <select
            name="returnLocation"
            value={formData.returnLocation}
            onChange={handleChange}
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
          <label>Date & Time:</label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
          <select
            name="returnTime"
            value={formData.returnTime}
            onChange={handleChange}
          >
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Driver Age (min):</label>
          <select
            name="driverAge"
            value={formData.driverAge}
            onChange={handleChange}
          >
            {driverAges.map((age, index) => (
              <option key={index} value={age}>
                {age}
              </option>
            ))}
          </select>
          <label>Promo Code:</label>
          <input
            type="text"
            name="promoCode"
            placeholder="Promo Code if any"
            value={formData.promoCode}
            onChange={handleChange}
          />
          <label></label>
          <label></label>
        </div>
        <button type="submit" className="continue-button">Continue</button>
      </form>
    </div>
  );
}

export default CarRentalForm;
