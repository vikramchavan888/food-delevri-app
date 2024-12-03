import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo-section">
          <img
            className="footerimg"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732030594/Screenshot_3_mw6hry.png"
            alt="footerimg"
          />
          <div className="app-links">
            <img
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732031402/app-store-badges-en_1_q2pevh.jpg"
              alt="downlod links"
            />
          </div>
          <p>
            Company # 490039-445, Registered<br></br> with House of companies.
          </p>
        </div>

        <div className="deal-section">
          <h3>Get Exclusive Deals in your Inbox</h3>
          <div className="deal-email">
            <span className="youremaigmailcom">youremail@gmail.com</span>
            <div className="subscribe-btn ">Subscribe</div>
          </div>

          <p>
            We won’t spam, read our <a href="#">email policy</a>.
          </p>
          <div className="social-icons">
            <i class="fab fa-facebook">
              <img
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732044559/Facebook_xzuglb.png"
                alt="footerimg"
              />
            </i>
            <i class="fab fa-instagram">
              <img
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732044544/Instagram_gzjib4.png"
                alt="footerimg"
              />
            </i>
            <i class="fab fa-tiktok">
              <img
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732044519/TikTok_daawva.png"
                alt="footerimg"
              />
            </i>
            <i class="fab fa-snapchat">
              <img
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732044501/Snapchat_moh0k9.png"
                alt="footerimg"
              />
            </i>
          </div>
        </div>

        <div class="links-section">
          <h3>Legal Pages</h3>
          <ul>
            <li>
              <a href="#">Terms and conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Modern Slavery Statement</a>
            </li>
          </ul>
        </div>

        <div class="links-section">
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="#">Get help</a>
            </li>
            <li>
              <a href="#">Add your restaurant</a>
            </li>
            <li>
              <a href="#">Sign up to deliver</a>
            </li>
            <li>
              <a href="#">Create a business account</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div className="All-Rights-Reserved">
          <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        </div>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a> <a href="#">Pricing</a>
          <a href="#">Do not sell or share my personal information</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer