import React from "react";
import { Container, Row, Col } from "reactstrap";

function Footer() {
  return (
    <footer className="footer-background">
      <div class="m-4 grid gap-4 sm:grid-cols-12" className="footer">
        <div class="sm:col-span-4" className="text-content mb-4">
          <h4 className="footer__link-title mb-4">Quick Links</h4>
          <p className="office__info">Home</p>
          <p className="office__info">About</p>
          <p className="office__info">Contact</p>
          <p className="office__info">Vehicles</p>
          <p className="office__info">Products & Services</p>
          <p className="office__info">Book Now</p>
        </div>
        <div class="sm:col-span-3" className="text-content mb-4">
          <h4 className="footer__link-title mb-4">Head Office</h4>
          <h5 className="office__info">Runcorn, Brisbane</h5>
          <p className="office__info">
            1/8 Bonemill Rd <br />
            Runcorn QLD 4113, Australia
          </p>
          <p className="office__info">Phone: +123456789</p>
          <p className="office__info">Email: ALD@gmail.com</p>
          <p className="office__info">Office Time: 10am - 7pm</p>
        </div>
        <div class="sm:col-span-3" className="map-content mb-4">
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
        <a href="#">Terms & conditions</a>
        <a href="#">Privacy policy</a>
      </div>
      <hr />
      <p className="copyright">©2024 ALD Car Rental</p>
    </footer>
  );
}
export default Footer;
