import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { collectionMegaMenu } from '../../data/megaMenuData';
import MegaMenu from './MegaMenu';
import './Navigation.css';

interface NavigationProps {
  isMobileMenuOpen: boolean;
  onMobileMenuClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen, onMobileMenuClose }) => {
  const location = useLocation();
  const navRef = useRef<HTMLElement | null>(null);

  // Desktop Mega Menu state & timing refs
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isHoveringRef = useRef<boolean>(false);

  // Mobile Menu Accordion state
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(true);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>('earrings');

  const clearTimers = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  };

  // 1. Mouse enters combined hover area (Collections button OR Mega Menu)
  const handleCombinedMouseEnter = () => {
    isHoveringRef.current = true;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (!isMegaMenuOpen) {
      setIsMegaMenuOpen(true);
    }

    // Start/Extend the 15-second minimum open duration timer
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
    }
    openTimerRef.current = setTimeout(() => {
      // Only close if user has actually stopped hovering/interacting
      if (!isHoveringRef.current) {
        setIsMegaMenuOpen(false);
      }
    }, 15000);
  };

  // 2. Mouse leaves combined hover area -> 800ms safety delay before closing
  const handleCombinedMouseLeave = () => {
    isHoveringRef.current = false;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    closeTimeoutRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setIsMegaMenuOpen(false);
        clearTimers();
      }
    }, 800); // 800ms safety delay to prevent accidental closes
  };

  // 3. Mouse moves inside mega menu / subcategories -> extends timer
  const handleMouseMoveInside = () => {
    isHoveringRef.current = true;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
    }
    openTimerRef.current = setTimeout(() => {
      if (!isHoveringRef.current) {
        setIsMegaMenuOpen(false);
      }
    }, 15000);
  };

  // Close mega menu on Escape key or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMegaMenuOpen(false);
        isHoveringRef.current = false;
        clearTimers();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
        isHoveringRef.current = false;
        clearTimers();
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  const isLinkActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href.startsWith('/collections') && location.pathname.startsWith('/collections')) return true;
    return location.pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const toggleMobileSection = (sectionId: string) => {
    setExpandedMobileSection((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav ref={navRef} className="main-nav" aria-label="Primary navigation">
        <div className="nav-container container">
          <ul className="nav-list">
            {navigationItems.map((item) => {
              const active = isLinkActive(item.href);
              const isCollections = item.label === 'Collections';

              if (isCollections) {
                return (
                  <li
                    key={item.label}
                    className="nav-item nav-item-collections"
                    onMouseEnter={handleCombinedMouseEnter}
                    onMouseLeave={handleCombinedMouseLeave}
                    onMouseMove={handleMouseMoveInside}
                  >
                    <Link
                      to={item.href}
                      className={`nav-link ${active || isMegaMenuOpen ? 'nav-link-active' : ''}`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        className={`nav-link-chevron ${isMegaMenuOpen ? 'open' : ''}`}
                      />
                    </Link>

                    {/* Desktop Mega Menu Dropdown */}
                    {isMegaMenuOpen && (
                      <MegaMenu
                        onItemClick={() => {
                          setIsMegaMenuOpen(false);
                          isHoveringRef.current = false;
                          clearTimers();
                        }}
                        onMouseEnter={handleCombinedMouseEnter}
                        onMouseLeave={handleCombinedMouseLeave}
                        onMouseMove={handleMouseMoveInside}
                      />
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label} className="nav-item">
                  <Link
                    to={item.href}
                    className={`nav-link ${active ? 'nav-link-active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={onMobileMenuClose} aria-hidden="true" />
      )}

      {/* Mobile Slide-out Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={isMobileMenuOpen}
      >
        <div className="mobile-menu-header">
          <span
            className="gujarati-text"
            style={{
              fontFamily: "'Noto Serif Gujarati', serif",
              fontSize: '18px',
              fontWeight: 600,
              color: '#B8860B',
            }}
          >
            ખુશ્બૂ ગોલ્ડ પેલેસ
          </span>
          <button
            className="mobile-menu-close"
            onClick={onMobileMenuClose}
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navigationItems.map((item) => {
            const active = isLinkActive(item.href);
            const isCollections = item.label === 'Collections';

            if (isCollections) {
              return (
                <li key={item.label} className="mobile-nav-item mobile-nav-collections">
                  <div
                    className={`mobile-nav-link mobile-collections-toggle ${active ? 'mobile-nav-link-active' : ''}`}
                    onClick={() => setIsMobileCollectionsOpen((prev) => !prev)}
                  >
                    <span>{item.label}</span>
                    {isMobileCollectionsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  {/* Mobile Collections Expandable List */}
                  {isMobileCollectionsOpen && (
                    <div className="mobile-collections-dropdown">
                      {collectionMegaMenu.map((section) => {
                        const isSectionExpanded = expandedMobileSection === section.id;
                        return (
                          <div key={section.id} className="mobile-section-group">
                            <button
                              type="button"
                              className={`mobile-section-button ${isSectionExpanded ? 'active' : ''}`}
                              onClick={() => toggleMobileSection(section.id)}
                            >
                              <div className="mobile-section-labels">
                                <span className="mobile-section-title">{section.title}</span>
                                <span className="mobile-section-gujarati gujarati-text">{section.gujarati}</span>
                              </div>
                              {isSectionExpanded ? (
                                <Minus size={16} className="mobile-accordion-icon" />
                              ) : (
                                <Plus size={16} className="mobile-accordion-icon" />
                              )}
                            </button>

                            {/* Subcategories list */}
                            {isSectionExpanded && (
                              <ul className="mobile-subcategory-list">
                                {section.items.map((sub) => (
                                  <li key={sub.id} className="mobile-subcategory-item">
                                    <Link
                                      to={sub.url}
                                      className="mobile-subcategory-link"
                                      onClick={onMobileMenuClose}
                                    >
                                      <span className="mobile-subcategory-title">{sub.title}</span>
                                      <span className="mobile-subcategory-gujarati gujarati-text">{sub.gujarati}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.label} className="mobile-nav-item">
                <Link
                  to={item.href}
                  className={`mobile-nav-link ${active ? 'mobile-nav-link-active' : ''}`}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    onMobileMenuClose();
                  }}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mobile-menu-footer">
          <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
            BIS Hallmarked Gold · 100% Guaranteed
          </p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
