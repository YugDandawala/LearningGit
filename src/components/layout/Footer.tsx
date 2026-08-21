import React from 'react';
import Logo from '../common/Logo';
import './Footer.css';

const InstagramIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="main-footer" id="contact">
      <div className="footer-content">
        {/* Logo Badge & Gujarati Title */}
        <div className="footer-header-brand">
          <Logo customSize={64} showFullName={false} />
          <span className="footer-gujarati-title gujarati-text">ખુશ્બૂ ગોલ્ડ પેલેસ</span>
        </div>

        {/* Address Centered & Formatted Premium Multiline */}
        <p className="footer-address">
          15, Samarat Apartment, Eshwar Krupa Road,<br />
          Opp. 1 Rang Avadhut Society, Matawadi, Shivnagar Society,<br />
          Varachha, Surat, Gujarat - 395006
        </p>

        {/* Contact & Email Row */}
        <p className="footer-contact-row">
          <span>Contact: <a href="tel:+919999999999">+91 9XXXX XXXXX</a></span>
          <span className="footer-v-divider">|</span>
          <span>Email: <a href="mailto:info@khushbugoldpalace.com">info@khushbugoldpalace.com</a></span>
        </p>

        {/* BIS Hallmark Trust */}
        <div className="footer-trust">
          <div className="trust-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" stroke="#C5A059" strokeWidth="1.5" fill="none"/>
              <path d="M9 12l2 2 4-4" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="trust-text">BIS Hallmarked Gold</p>
              <p className="trust-subtext">100% Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Social Media & Payment Methods Row */}
        <div className="footer-social-payments">
          <div className="footer-social">
            <span className="footer-label">Social Media:</span>
            <div className="social-icons">
              <a href="#" aria-label="Follow us on Instagram" className="social-icon-link">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Follow us on Facebook" className="social-icon-link">
                <FacebookIcon />
              </a>
            </div>
          </div>

          <span className="footer-v-divider hide-on-mobile">|</span>

          <div className="footer-payments">
            <span className="footer-label">Payment Methods:</span>
            <div className="payment-icons">
              <span className="payment-badge">VISA</span>
              <span className="payment-badge">
                <svg width="26" height="16" viewBox="0 0 28 18" aria-label="Mastercard">
                  <circle cx="10" cy="9" r="8" fill="#EB001B" opacity="0.8"/>
                  <circle cx="18" cy="9" r="8" fill="#F79E1B" opacity="0.8"/>
                </svg>
              </span>
              <span className="payment-badge payment-upi">UPI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} Khushbu Gold Palace. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
