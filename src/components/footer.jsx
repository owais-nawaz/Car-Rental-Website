import React from 'react';

function Footer() {
  return (
    <div className = "footer-background">
      <div className="footer">
        <div className="text-content">
          <h3>Runcorn, Brisbane</h3>
          <p>1/8 Bonemill Road<br />Runcorn Brisbane 4113, Australia</p>
          <a href="https://www.google.com/maps?q=1/8+Bonemill+Road,+Runcorn+Brisbane+4113,+Australia" target="_blank" rel="noopener noreferrer">view on google map</a>
        </div>
        <div className="map-content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.93114425278!2d153.07144517546334!3d-27.595664276246854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9144f07be4b203%3A0xac705d7ca51551e5!2s1%2F8%20Bonemill%20Rd%2C%20Runcorn%20QLD%204113%2C%20Australia!5e0!3m2!1sen!2ssa!4v1720558766533!5m2!1sen!2ssa"
            width="800"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="google-map"
          ></iframe>
        </div>
      </div>
      <div className="terms">
        <a>Terms & conditions</a>
        <a >Privacy policy</a>
      </div>
      <hr/>
      <p class="copyright">©2024 ALD Car Rental</p>
    </div>
  );
}

export default Footer