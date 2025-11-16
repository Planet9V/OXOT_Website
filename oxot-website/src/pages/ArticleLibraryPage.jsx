import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getPublishedArticles, getAllSectors, getAllStandards, getAllTypes, searchArticles } from '../data/articleMetadata';
import ArticleCard from '../components/ArticleCard';
import ArticleFilters from '../components/ArticleFilters';
import './ArticleLibraryPage.css';

gsap.registerPlugin(ScrollTrigger);

const ArticleLibraryPage = () => {
  const [articles, setArticles] = useState(getPublishedArticles());
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    sector: 'all',
    standard: 'all',
    type: 'all',
    sortBy: 'recent'
  });
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate header on mount
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Animate cards with stagger
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
      }
    );
  }, [filteredArticles]);

  useEffect(() => {
    // Apply filters and search
    let result = articles;

    // Search filter
    if (searchQuery) {
      result = searchArticles(searchQuery);
    }

    // Category filter
    if (filters.category !== 'all') {
      result = result.filter(article => article.category === filters.category);
    }

    // Sector filter
    if (filters.sector !== 'all') {
      result = result.filter(article => article.sector.includes(filters.sector));
    }

    // Standard filter
    if (filters.standard !== 'all') {
      result = result.filter(article => article.standards.includes(filters.standard));
    }

    // Type filter
    if (filters.type !== 'all') {
      result = result.filter(article => article.type === filters.type);
    }

    // Sort
    switch (filters.sortBy) {
      case 'recent':
        result.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
        break;
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'readingTime':
        result.sort((a, b) => a.readingTime - b.readingTime);
        break;
      default:
        break;
    }

    setFilteredArticles(result);
  }, [searchQuery, filters, articles]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      sector: 'all',
      standard: 'all',
      type: 'all',
      sortBy: 'recent'
    });
    setSearchQuery('');
  };

  return (
    <div className="article-library-page">
      {/* Hero Header */}
      <div className="article-library__hero" ref={headerRef}>
        <div className="article-library__hero-content">
          <h1 className="article-library__title">Knowledge Library</h1>
          <p className="article-library__subtitle">
            Deep-dive technical articles, architecture guides, and blind spot analyses
            on industrial cybersecurity, IEC 62443, TS 50701, and critical infrastructure protection.
          </p>

          {/* Search Bar */}
          <div className="article-library__search">
            <input
              type="text"
              className="article-library__search-input"
              placeholder="Search articles by title, topic, or keyword..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <span className="article-library__search-icon">🔍</span>
          </div>

          {/* Stats */}
          <div className="article-library__stats">
            <div className="article-stat">
              <div className="article-stat__number">{articles.length}</div>
              <div className="article-stat__label">Articles</div>
            </div>
            <div className="article-stat">
              <div className="article-stat__number">{filteredArticles.length}</div>
              <div className="article-stat__label">Filtered</div>
            </div>
            <div className="article-stat">
              <div className="article-stat__number">{getAllSectors().length}</div>
              <div className="article-stat__label">Sectors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="article-library__container">
        {/* Filters Sidebar */}
        <ArticleFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          sectors={getAllSectors()}
          standards={getAllStandards()}
          types={getAllTypes()}
        />

        {/* Articles Grid */}
        <div className="article-library__main">
          {/* View Controls */}
          <div className="article-library__controls">
            <div className="article-library__view-toggle">
              <button
                className={`view-toggle__btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <span className="view-toggle__icon">⊞</span>
              </button>
              <button
                className={`view-toggle__btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <span className="view-toggle__icon">☰</span>
              </button>
            </div>

            <div className="article-library__sort">
              <label htmlFor="sort-select">Sort by:</label>
              <select
                id="sort-select"
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="article-library__sort-select"
              >
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title (A-Z)</option>
                <option value="readingTime">Reading Time</option>
              </select>
            </div>
          </div>

          {/* Articles Grid/List */}
          {filteredArticles.length > 0 ? (
            <div className={`article-library__grid ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
              {filteredArticles.map((article, index) => (
                <div
                  key={article.slug}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <ArticleCard article={article} viewMode={viewMode} />
                </div>
              ))}
            </div>
          ) : (
            <div className="article-library__empty">
              <div className="empty-state">
                <div className="empty-state__icon">📚</div>
                <h3 className="empty-state__title">No articles found</h3>
                <p className="empty-state__text">
                  Try adjusting your filters or search query
                </p>
                <button
                  className="empty-state__button"
                  onClick={clearFilters}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleLibraryPage;
