import React from 'react';
import instagram from "../../images/icons/icons8-instagram-50.png"
import email from "../../images/icons/icons8-nuevo-post-50.png"
import whatsapp from "../../images/icons/icons8-whatsapp-50.png"

const Footer = () => {
  return (
    <div>
    <section className="footer-container">
      <div className="footer-item">
        <p className="footer-txt"><img className="icon" src={instagram} alt="Instagram logo" /> @GoldenPalace_ig</p>
      </div>
      <div className="footer-item">
        <p className="footer-txt"><img className="icon" src={email} alt="Mail logo" /> GoldenPalacePerfume@gmail.com</p>
      </div>
      <div className='footer-item'>
      <p className="footer-txt"><img className="icon" src={whatsapp} alt="Whatsapp logo" /> +12 3 444 567 8900</p>
      </div>
    </section>
          <div className='copyright-container'>
          <p className="copyright">Copyright ©2016-2024</p>
        </div>
    </div>
  );
};

export default Footer;
