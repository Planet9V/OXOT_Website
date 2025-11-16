import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getArticleById, articlesData } from '../data/articlesData';
import './ArticleDetailPage.css';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = getArticleById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="article-not-found">
        <div className="article-not-found__content">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/articles" className="article-not-found__link">
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = articlesData.findIndex(a => a.id === id);
  const prevArticle = currentIndex > 0 ? articlesData[currentIndex - 1] : null;
  const nextArticle = currentIndex < articlesData.length - 1 ? articlesData[currentIndex + 1] : null;

  return (
    <div className="article-detail">
      <div className="article-detail__header">
        <button onClick={() => navigate('/articles')} className="article-detail__back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Articles
        </button>

        <div className="article-detail__meta">
          <span className="article-detail__category">{article.category}</span>
          <span className="article-detail__date">{article.date}</span>
          <span className="article-detail__read-time">{article.readTime}</span>
        </div>

        <h1 className="article-detail__title">{article.title}</h1>

        <p className="article-detail__abstract">{article.abstract}</p>

        <div className="article-detail__info">
          <div className="article-detail__audience">
            <strong>Audience:</strong> {article.audience}
          </div>
          <div className="article-detail__keywords">
            {article.keywords.map((keyword, index) => (
              <span key={index} className="article-detail__keyword">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      <article className="article-detail__content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h2 className="md-h1" {...props} />,
            h2: ({node, ...props}) => <h3 className="md-h2" {...props} />,
            h3: ({node, ...props}) => <h4 className="md-h3" {...props} />,
            h4: ({node, ...props}) => <h5 className="md-h4" {...props} />,
            p: ({node, ...props}) => <p className="md-p" {...props} />,
            ul: ({node, ...props}) => <ul className="md-ul" {...props} />,
            ol: ({node, ...props}) => <ol className="md-ol" {...props} />,
            li: ({node, ...props}) => <li className="md-li" {...props} />,
            code: ({node, inline, ...props}) =>
              inline ?
                <code className="md-code-inline" {...props} /> :
                <code className="md-code-block" {...props} />,
            pre: ({node, ...props}) => <pre className="md-pre" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="md-blockquote" {...props} />,
            table: ({node, ...props}) => <table className="md-table" {...props} />,
            th: ({node, ...props}) => <th className="md-th" {...props} />,
            td: ({node, ...props}) => <td className="md-td" {...props} />,
            a: ({node, ...props}) => <a className="md-a" {...props} target="_blank" rel="noopener noreferrer" />,
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>

      <div className="article-detail__navigation">
        {prevArticle && (
          <Link to={`/articles/${prevArticle.id}`} className="article-nav article-nav--prev">
            <span className="article-nav__label">Previous Article</span>
            <span className="article-nav__title">{prevArticle.title}</span>
          </Link>
        )}
        {nextArticle && (
          <Link to={`/articles/${nextArticle.id}`} className="article-nav article-nav--next">
            <span className="article-nav__label">Next Article</span>
            <span className="article-nav__title">{nextArticle.title}</span>
          </Link>
        )}
      </div>

      <div className="article-detail__footer">
        <Link to="/articles" className="article-detail__all-articles">
          View All Articles
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
