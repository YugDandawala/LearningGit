import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = '' }) => {
  return (
    <h2 className={`section-heading ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
