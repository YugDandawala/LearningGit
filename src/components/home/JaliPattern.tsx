import React from 'react';
import jaliSvg from '../../assets/jali.svg';
import './JaliPattern.css';

const JaliPattern: React.FC = () => {
  return (
    <div className="jali-banner-wrapper" aria-hidden="true">
      <img
        src={jaliSvg}
        alt="Khushbu Gold Palace Jali Pattern Banner"
        className="jali-banner-svg"
      />
    </div>
  );
};

export default JaliPattern;
