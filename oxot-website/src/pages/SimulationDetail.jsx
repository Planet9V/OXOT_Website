import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getSimulationById } from '../data/simulationsData';
import './SimulationDetail.css';

const SimulationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const simulation = getSimulationById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!simulation) {
    return (
      <div className="simulation-not-found">
        <div className="simulation-not-found__content">
          <h1>Simulation Not Found</h1>
          <p>The simulation you're looking for doesn't exist.</p>
          <Link to="/simulations" className="simulation-not-found__link">
            Back to Simulations
          </Link>
        </div>
      </div>
    );
  }

  if (simulation.status !== 'available') {
    return (
      <div className="simulation-not-found">
        <div className="simulation-not-found__content">
          <h1>Coming Soon</h1>
          <p>This simulation is currently under development.</p>
          <Link to="/simulations" className="simulation-not-found__link">
            Back to Simulations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="simulation-detail">
      <div className="simulation-detail__header">
        <button onClick={() => navigate('/simulations')} className="simulation-detail__back">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Simulations
        </button>

        <div className="simulation-detail__meta">
          <span className="simulation-detail__category">{simulation.category}</span>
          <span className="simulation-detail__difficulty">{simulation.difficulty}</span>
          <span className="simulation-detail__time">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {simulation.estimatedTime}
          </span>
        </div>

        <h1 className="simulation-detail__title">{simulation.title}</h1>
        <p className="simulation-detail__description">{simulation.description}</p>

        <div className="simulation-detail__info">
          <div className="simulation-detail__section">
            <h3>Learning Objectives</h3>
            <ul>
              {simulation.learningObjectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>

          <div className="simulation-detail__section">
            <h3>Key Features</h3>
            <ul>
              {simulation.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="simulation-detail__section">
            <h3>Technologies</h3>
            <div className="simulation-detail__tech">
              {simulation.technologies.map((tech, index) => (
                <span key={index} className="simulation-detail__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="simulation-detail__embed-container">
        <div className="simulation-detail__embed-header">
          <h2>Interactive Simulation</h2>
          <div className="simulation-detail__embed-instructions">
            <p><strong>Instructions:</strong></p>
            <ul>
              <li>Use the controls within the simulation to interact with the system</li>
              <li>Observe the impact of your actions on system performance and security</li>
              <li>Try different scenarios to understand OT security principles</li>
              <li>Take notes on key learnings and observations</li>
            </ul>
          </div>
        </div>

        {simulation.embedUrl && simulation.embedUrl !== 'YOUR_AI_STUDIO_EMBED_URL_HERE' ? (
          <div className="simulation-detail__embed">
            <iframe
              src={simulation.embedUrl}
              title={simulation.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="simulation-detail__placeholder">
            <div className="simulation-detail__placeholder-content">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect x="10" y="10" width="60" height="60" rx="8" stroke="currentColor" strokeWidth="2"/>
                <circle cx="40" cy="35" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M25 60C25 52 32 47 40 47C48 47 55 52 55 60" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <h3>Simulation Embed Placeholder</h3>
              <p>
                To activate this simulation, replace <code>YOUR_AI_STUDIO_EMBED_URL_HERE</code> in
                <br/>
                <code>/src/data/simulationsData.js</code> with your actual AI Studio embed URL.
              </p>
              <p className="simulation-detail__placeholder-note">
                Example: Update the <code>embedUrl</code> property for the '{simulation.id}' simulation
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="simulation-detail__footer">
        <div className="simulation-detail__completion">
          <h3>After Completing This Simulation</h3>
          <ul>
            <li>Review your notes and key learnings</li>
            <li>Consider how these concepts apply to your environment</li>
            <li>Explore related articles in our Knowledge Center</li>
            <li>Try other simulations to broaden your understanding</li>
          </ul>
        </div>

        <div className="simulation-detail__cta-container">
          <Link to="/simulations" className="simulation-detail__cta">
            Explore More Simulations
          </Link>
          <Link to="/articles" className="simulation-detail__cta secondary">
            Read Related Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimulationDetail;
