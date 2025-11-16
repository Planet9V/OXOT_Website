import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article, viewMode = 'grid' }) => {
  const {
    slug,
    title,
    category,
    type,
    sector,
    standards,
    tags,
    readingTime,
    publishDate,
    author,
    featured,
    abstract,
    status
  } = article;

  // Format date
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Category colors
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Blind Spot':
        return 'var(--oxot-red, #c10230)';
      case 'Article':
        return 'var(--oxot-blue, #154372)';
      default:
        return 'var(--oxot-teal, #00FFD1)';
    }
  };

  // Generate gradient for card cover
  const getCardGradient = (cat) => {
    if (cat === 'Blind Spot') {
      return 'linear-gradient(135deg, #c10230 0%, #8b0120 100%)';
    }
    return 'linear-gradient(135deg, #154372 0%, #0a1f3d 100%)';
  };

  return (
    <Link
      to={`/articles/${slug}`}
      className={`article-card ${viewMode === 'list' ? 'list-mode' : 'grid-mode'} ${
        featured ? 'featured' : ''
      } ${status === 'planned' ? 'planned' : ''}`}
    >
      {/* Card Cover/Thumbnail */}
      <div
        className="article-card__cover"
        style={{ background: getCardGradient(category) }}
      >
        <div className="article-card__cover-overlay">
          <div className="article-card__category-badge" style={{ background: getCategoryColor(category) }}>
            {category}
          </div>
          {featured && <div className="article-card__featured-badge">★ Featured</div>}
          {status === 'planned' && <div className="article-card__planned-badge">Coming Soon</div>}
          <div className="article-card__reading-time">{readingTime} min read</div>
        </div>
      </div>

      {/* Card Content */}
      <div className="article-card__content">
        <h3 className="article-card__title">{title}</h3>

        <div className="article-card__meta">
          <span className="article-card__type">{type}</span>
          <span className="article-card__date">{formattedDate}</span>
        </div>

        <p className="article-card__abstract">{abstract}</p>

        {/* Tags */}
        <div className="article-card__tags">
          {sector.slice(0, 2).map((s, idx) => (
            <span key={idx} className="article-card__tag sector-tag">
              {s}
            </span>
          ))}
          {standards.slice(0, 1).map((std, idx) => (
            <span key={idx} className="article-card__tag standard-tag">
              {std}
            </span>
          ))}
          {sector.length > 2 && (
            <span className="article-card__tag more-tag">+{sector.length - 2} more</span>
          )}
        </div>

        {/* Footer */}
        <div className="article-card__footer">
          <span className="article-card__author">{author}</span>
          <span className="article-card__cta">Read →</span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
