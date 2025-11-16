import { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import { articlesData, getAllCategories, getArticlesByCategory, searchArticles } from '../data/articlesData';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = getAllCategories();

  const getFilteredArticles = () => {
    if (searchQuery) {
      return searchArticles(searchQuery);
    }
    return getArticlesByCategory(selectedCategory);
  };

  const filteredArticles = getFilteredArticles();

  return (
    <div className="articles-page">
      <div className="articles-hero">
        <div className="articles-hero__content">
          <h1 className="articles-hero__title">Knowledge Center</h1>
          <p className="articles-hero__subtitle">
            Expert insights on IEC 62443, OT security, and critical infrastructure protection
          </p>
        </div>
      </div>

      <div className="articles-container">
        <div className="articles-controls">
          <div className="articles-search">
            <svg className="articles-search__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="articles-search__input"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="articles-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`articles-filter ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchQuery('');
                }}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="articles-count">
          {filteredArticles.length} {filteredArticles.length === 1 ? 'Article' : 'Articles'}
          {searchQuery && ` matching "${searchQuery}"`}
          {selectedCategory !== 'all' && !searchQuery && ` in ${selectedCategory}`}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="articles-empty">
            <p>No articles found matching your criteria.</p>
            <button
              className="articles-empty__reset"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
