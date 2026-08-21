import React from 'react';
import logoImg from '../../assets/logo.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showFullName?: boolean;
  customSize?: number;
  className?: string;
}

const sizeMap = {
  sm: { circle: 54, nameFontSize: 24 },
  md: { circle: 82, nameFontSize: 34 },
  lg: { circle: 96, nameFontSize: 40 },
};

const Logo: React.FC<LogoProps> = ({ size = 'md', showFullName = true, customSize, className = '' }) => {
  const s = sizeMap[size];
  const dimension = customSize || s.circle;

  return (
    <div className={`logo ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src={logoImg}
        alt="Khushbu Gold Palace Logo"
        className="logo-image-element"
        style={{
          width: `${dimension}px`,
          height: `${dimension}px`,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
          mixBlendMode: 'multiply',
        }}
      />
      {showFullName && (
        <span
          className="gujarati-text"
          style={{
            fontFamily: "'Noto Serif Gujarati', 'Noto Sans Gujarati', serif",
            fontSize: `${s.nameFontSize}px`,
            fontWeight: 700,
            color: '#B8860B',
            letterSpacing: '0.04em',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
          }}
        >
          ખુશ્બૂ ગોલ્ડ પેલેસ
        </span>
      )}
    </div>
  );
};

export default Logo;
