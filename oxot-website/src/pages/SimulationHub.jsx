import { useState } from 'react';
import { Link } from 'react-router-dom';
import { simulationsData, getAllCategories, getSimulationsByCategory } from '../data/simulationsData';
import './SimulationHub.css';

const SimulationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = getAllCategories();
  const filteredSimulations = getSimulationsByCategory(selectedCategory);

  return (
    <div className="simulation-hub">
      <div className="simulation-hero">
        <div className="simulation-hero__content">
          <h1 className="simulation-hero__title">Interactive Simulations</h1>
          <p className="simulation-hero__subtitle">
            Hands-on learning experiences for OT security, SCADA systems, and critical infrastructure protection
          </p>
        </div>
      </div>

      <div className="simulation-container">
        <div className="simulation-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`simulation-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Simulations' : category}
            </button>
          ))}
        </div>

        <div className="simulation-count">
          {filteredSimulations.length} {filteredSimulations.length === 1 ? 'Simulation' : 'Simulations'}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </div>

        <div className="simulation-grid">
          {filteredSimulations.map((simulation) => (
            <div key={simulation.id} className="simulation-card">
              <div className="simulation-card__image">
                <img
                  src={simulation.thumbnail}
                  alt={simulation.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect fill="%23154372" width="400" height="250"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="20" text-anchor="middle" x="200" y="125"%3E' + encodeURIComponent(simulation.title) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                {simulation.status === 'coming-soon' && (
                  <div className="simulation-card__badge">Coming Soon</div>
                )}
              </div>

              <div className="simulation-card__content">
                <div className="simulation-card__header">
                  <span className="simulation-card__category">{simulation.category}</span>
                  <span className="simulation-card__difficulty">{simulation.difficulty}</span>
                </div>

                <h3 className="simulation-card__title">{simulation.title}</h3>
                <p className="simulation-card__description">{simulation.description}</p>

                <div className="simulation-card__features">
                  <h4>Key Features:</h4>
                  <ul>
                    {simulation.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="simulation-card__tech">
                  {simulation.technologies.map((tech, index) => (
                    <span key={index} className="simulation-card__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="simulation-card__footer">
                  <span className="simulation-card__time">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    {simulation.estimatedTime}
                  </span>

                  {simulation.status === 'available' ? (
                    <Link to={`/simulations/${simulation.id}`} className="simulation-card__cta">
                      Launch Simulation
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  ) : (
                    <button className="simulation-card__cta disabled" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimulationHub;
