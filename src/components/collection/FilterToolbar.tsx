import React from 'react';
import type { FilterOption } from '../../data/collections';
import './FilterToolbar.css';

interface FilterToolbarProps {
  filters: FilterOption[];
  activeFilters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalProductsCount: number;
  filteredCount: number;
  onClearFilters: () => void;
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  sortBy,
  onSortChange,
  totalProductsCount,
  filteredCount,
  onClearFilters,
}) => {
  const hasActiveFilters = Object.values(activeFilters).some((val) => val !== 'all');

  return (
    <div className="filter-toolbar container">
      <div className="filter-left">
        <span className="filter-label-text">Filter by:</span>

        {filters.map((filter) => (
          <div key={filter.key} className="select-wrapper">
            <select
              className="filter-select"
              value={activeFilters[filter.key] || 'all'}
              onChange={(e) => onFilterChange(filter.key, e.target.value)}
              aria-label={`Filter by ${filter.label}`}
            >
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {filter.label}: {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}

        {hasActiveFilters && (
          <button className="clear-filters-btn" onClick={onClearFilters}>
            Clear Filters
          </button>
        )}
      </div>

      <div className="filter-right">
        <span className="count-display">
          Showing {filteredCount} of {totalProductsCount} Designs
        </span>

        <div className="select-wrapper">
          <select
            className="filter-select sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort products"
          >
            <option value="newest">Sort: Newest</option>
            <option value="weight-low">Sort: Weight Low to High</option>
            <option value="weight-high">Sort: Weight High to Low</option>
            <option value="featured">Sort: Featured</option>
            <option value="name-az">Sort: A to Z</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterToolbar;
