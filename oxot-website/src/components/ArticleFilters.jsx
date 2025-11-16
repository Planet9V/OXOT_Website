import React, { useState } from 'react';
import './ArticleFilters.css';

const ArticleFilters = ({ filters, onFilterChange, onClearFilters, sectors, standards, types }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const hasActiveFilters = () => {
    return (
      filters.category !== 'all' ||
      filters.sector !== 'all' ||
      filters.standard !== 'all' ||
      filters.type !== 'all'
    );
  };

  return (
    <aside className={`article-filters ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {/* Header */}
      <div className="article-filters__header">
        <h3 className="article-filters__title">Filters</h3>
        <button
          className="article-filters__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse filters' : 'Expand filters'}
        >
          {isExpanded ? '←' : '→'}
        </button>
      </div>

      {isExpanded && (
        <div className="article-filters__content">
          {/* Category Filter */}
          <div className="filter-group">
            <label className="filter-group__label" htmlFor="category-filter">
              Category
            </label>
            <select
              id="category-filter"
              className="filter-group__select"
              value={filters.category}
              onChange={(e) => onFilterChange('category', e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Article">Articles</option>
              <option value="Blind Spot">Blind Spots</option>
            </select>
          </div>

          {/* Sector Filter */}
          <div className="filter-group">
            <label className="filter-group__label" htmlFor="sector-filter">
              Sector
            </label>
            <select
              id="sector-filter"
              className="filter-group__select"
              value={filters.sector}
              onChange={(e) => onFilterChange('sector', e.target.value)}
            >
              <option value="all">All Sectors</option>
              {sectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>

          {/* Standard Filter */}
          <div className="filter-group">
            <label className="filter-group__label" htmlFor="standard-filter">
              Standard
            </label>
            <select
              id="standard-filter"
              className="filter-group__select"
              value={filters.standard}
              onChange={(e) => onFilterChange('standard', e.target.value)}
            >
              <option value="all">All Standards</option>
              {standards.map((standard) => (
                <option key={standard} value={standard}>
                  {standard}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="filter-group">
            <label className="filter-group__label" htmlFor="type-filter">
              Type
            </label>
            <select
              id="type-filter"
              className="filter-group__select"
              value={filters.type}
              onChange={(e) => onFilterChange('type', e.target.value)}
            >
              <option value="all">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters() && (
            <button className="article-filters__clear" onClick={onClearFilters}>
              Clear All Filters
            </button>
          )}

          {/* Quick Filters */}
          <div className="filter-group quick-filters">
            <div className="filter-group__label">Quick Filters</div>
            <div className="quick-filters__buttons">
              <button
                className={`quick-filter__btn ${filters.category === 'Blind Spot' ? 'active' : ''}`}
                onClick={() => onFilterChange('category', 'Blind Spot')}
              >
                Blind Spots
              </button>
              <button
                className={`quick-filter__btn ${filters.standard === 'IEC 62443' ? 'active' : ''}`}
                onClick={() => onFilterChange('standard', 'IEC 62443')}
              >
                IEC 62443
              </button>
              <button
                className={`quick-filter__btn ${filters.standard === 'TS 50701' ? 'active' : ''}`}
                onClick={() => onFilterChange('standard', 'TS 50701')}
              >
                TS 50701
              </button>
              <button
                className={`quick-filter__btn ${filters.sector === 'Energy' ? 'active' : ''}`}
                onClick={() => onFilterChange('sector', 'Energy')}
              >
                Energy
              </button>
              <button
                className={`quick-filter__btn ${filters.sector === 'Railway' ? 'active' : ''}`}
                onClick={() => onFilterChange('sector', 'Railway')}
              >
                Railway
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ArticleFilters;
