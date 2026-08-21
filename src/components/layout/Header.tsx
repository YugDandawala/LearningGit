import React from 'react';
import Logo from '../common/Logo';
import './Header.css';

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="main-header">
      <div className="header-container container">
        {/* Mobile hamburger */}
        <button
          className="header-hamburger"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Logo Badge on Complete Left */}
        <div className="header-logo-left">
          <a href="/" aria-label="Khushbu Gold Palace - Home">
            <Logo customSize={80} showFullName={false} />
          </a>
        </div>

        {/* Gujarati Jewel Name Centered with Larger Size */}
        <div className="header-brand-center">
          <a href="/" className="brand-title-link">
            <span className="header-gujarati-title gujarati-text">ખુશ્બૂ ગોલ્ડ પેલેસ</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
