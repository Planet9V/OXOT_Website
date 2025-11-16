import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.id}`} className="article-card">
      <div className="article-card__content">
        <div className="article-card__header">
          <span className="article-card__category">{article.category}</span>
          <span className="article-card__date">{article.date}</span>
        </div>

        <h3 className="article-card__title">{article.title}</h3>

        <p className="article-card__abstract">{article.abstract}</p>

        <div className="article-card__footer">
          <div className="article-card__keywords">
            {article.keywords.slice(0, 3).map((keyword, index) => (
              <span key={index} className="article-card__keyword">
                {keyword}
              </span>
            ))}
          </div>
          <span className="article-card__read-time">{article.readTime}</span>
        </div>

        <div className="article-card__cta">
          <span>Read Article</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
