import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GoldRateTicker from '../components/layout/GoldRateTicker';
import Header from '../components/layout/Header';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import CollectionHero from '../components/collection/CollectionHero';
import CategoryPills from '../components/collection/CategoryPills';
import FilterToolbar from '../components/collection/FilterToolbar';
import ProductGrid from '../components/collection/ProductGrid';
import LoadMore from '../components/collection/LoadMore';
import { collectionsData } from '../data/collections';
import { collectionProducts } from '../data/collectionProducts';
import './CollectionPage.css';

const CollectionPage: React.FC = () => {
  const { slug, sub } = useParams<{ slug: string; sub?: string }>();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fallback to 'earrings' if slug invalid or omitted
  const currentSlug = slug && collectionsData[slug] ? slug : 'earrings';
  const collection = collectionsData[currentSlug];

  // Filtering & Sorting state
  const [activeSubcategory, setActiveSubcategory] = useState(sub || 'all');
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
  const [sortBy, setSortBy] = useState<string>('newest');
  const [visibleCount, setVisibleCount] = useState(8);

  // Reset or sync filters when slug or sub changes
  useEffect(() => {
    setActiveSubcategory(sub || 'all');
    setActiveFilters({});
    setSortBy('newest');
    setVisibleCount(8);
  }, [currentSlug, sub]);

  // SEO Title update
  useEffect(() => {
    if (collection) {
      document.title = `${collection.title} | Khushbu Gold Palace Surat`;
    }
  }, [collection]);

  const handleFilterChange = (key: string, value: string) => {
    setActiveFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(8);
  };

  const handleClearFilters = () => {
    setActiveSubcategory('all');
    setActiveFilters({});
    setSortBy('newest');
    setVisibleCount(8);
    navigate(`/collections/${currentSlug}`);
  };

  // Filtered & sorted products computation
  const filteredProducts = useMemo(() => {
    let result = collectionProducts.filter(
      (item) => item.category === currentSlug
    );

    // Filter by subcategory
    if (activeSubcategory !== 'all') {
      result = result.filter((item) => item.subcategory === activeSubcategory);
    }

    // Filter by active select filters
    Object.entries(activeFilters).forEach(([key, val]) => {
      if (val && val !== 'all') {
        if (key === 'purity') {
          result = result.filter((item) => item.purity === val);
        }
      }
    });

    // Sort products
    if (sortBy === 'weight-low') {
      result = [...result].sort((a, b) => a.weight - b.weight);
    } else if (sortBy === 'weight-high') {
      result = [...result].sort((a, b) => b.weight - a.weight);
    } else if (sortBy === 'name-az') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [currentSlug, activeSubcategory, activeFilters, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  if (!collection) {
    return <div>Collection not found.</div>;
  }

  const categoryTotalProducts = collectionProducts.filter(
    (p) => p.category === currentSlug
  ).length;

  return (
    <div className="collection-page-root">
      {/* A. Top Gold Rate Announcement Bar */}
      <GoldRateTicker />

      {/* B. Main Header */}
      <Header onMenuToggle={() => setIsMobileMenuOpen(true)} />

      {/* C. Navigation Menu */}
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="collection-page">
        {/* D. Collection Hero Banner */}
        <CollectionHero
          title={collection.title}
          gujaratiTitle={collection.gujaratiTitle}
          heroText={collection.heroText}
          heroImage={collection.heroImage}
        />

        {/* E. Sub-Category Pills */}
        <CategoryPills
          subcategories={collection.subcategories}
          activeSubcategory={activeSubcategory}
          onSelectSubcategory={(id) => {
            setActiveSubcategory(id);
            setVisibleCount(8);
            if (id === 'all') {
              navigate(`/collections/${currentSlug}`);
            } else {
              navigate(`/collections/${currentSlug}/${id}`);
            }
          }}
        />

        {/* F. Filter & Sort Toolbar */}
        <FilterToolbar
          filters={collection.filters || []}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          sortBy={sortBy}
          onSortChange={(sort) => {
            setSortBy(sort);
            setVisibleCount(8);
          }}
          totalProductsCount={categoryTotalProducts}
          filteredCount={filteredProducts.length}
          onClearFilters={handleClearFilters}
        />

        {/* G. Responsive Product Grid */}
        <ProductGrid
          products={displayedProducts}
          onClearFilters={handleClearFilters}
        />

        {/* H. Load More Button */}
        {filteredProducts.length > 0 && (
          <LoadMore
            currentlyShowing={displayedProducts.length}
            totalProducts={filteredProducts.length}
            onLoadMore={() => setVisibleCount((prev) => prev + 8)}
          />
        )}
      </main>

      {/* I. Footer */}
      <Footer />
    </div>
  );
};

export default CollectionPage;
