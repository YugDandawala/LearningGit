import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collectionMegaMenu } from '../../data/megaMenuData';
import './MegaMenu.css';

interface MegaMenuProps {
  onItemClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseMove?: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ onItemClick, onMouseEnter, onMouseLeave, onMouseMove }) => {
  const [hoveredSectionId, setHoveredSectionId] = useState<string | null>(null);

  return (
    <div
      className="mega-menu-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      role="region"
      aria-label="Jewellery Collections Mega Menu"
    >
      {/* Invisible safe hover bridge between navigation bar link and mega-menu panel */}
      <div className="mega-menu-bridge" />

      <div className="mega-menu-panel">
        <div className="container mega-menu-container">
          <div className="mega-menu-grid">
            {collectionMegaMenu.map((section) => {
              const isSectionHovered = hoveredSectionId === section.id;
              return (
                <div
                  key={section.id}
                  className={`mega-menu-column ${isSectionHovered ? 'column-hovered' : ''}`}
                  onMouseEnter={() => setHoveredSectionId(section.id)}
                  onMouseLeave={() => setHoveredSectionId(null)}
                >
                  {/* Section Column Header Link */}
                  <Link
                    to={`/collections/${section.slug}`}
                    className="mega-menu-col-header"
                    onClick={onItemClick}
                  >
                    <span className="mega-menu-col-title">{section.title}</span>
                    <span className="mega-menu-col-gujarati gujarati-text">{section.gujarati}</span>
                  </Link>

                  {/* Subcategories List */}
                  <ul className="mega-menu-col-list">
                    {section.items.map((subItem) => (
                      <li key={subItem.id} className="mega-menu-col-item">
                        <Link
                          to={subItem.url}
                          className="mega-menu-col-link"
                          onClick={onItemClick}
                        >
                          <span className="mega-menu-sub-title">{subItem.title}</span>
                          <span className="mega-menu-sub-gujarati gujarati-text">{subItem.gujarati}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
