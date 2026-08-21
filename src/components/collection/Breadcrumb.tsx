import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

interface BreadcrumbProps {
  categoryName: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categoryName }) => {
  return (
    <nav className="breadcrumb-nav container" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">Home</Link>
        </li>
        <li className="breadcrumb-separator">&gt;</li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-link">Collections</span>
        </li>
        <li className="breadcrumb-separator">&gt;</li>
        <li className="breadcrumb-item breadcrumb-current" aria-current="page">
          {categoryName}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
