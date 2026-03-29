import { Link } from 'react-router-dom';
import './featured-project.scss';
import featuredImg from '../../../img/featured-project.png';
import StatusPill from '../../atoms/status-pill/StatusPill';

const FeaturedProject = () => {
  return (
    <section className="featured-project" id="featured-project">
      <div className="container">
        <h2 className="section__title section__title--featured">Featured Project</h2>
        <p className="section__subtitle section__subtitle--featured">
          A highlight of my latest flagship work.
        </p>

        <div className="featured-project__content">
          <div className="featured-project__image-container">
            <img
              src={featuredImg}
              alt="Community Events Platform"
              className="featured-project__img"
            />
            <StatusPill status="In Progress" />
          </div>

          <div className="featured-project__info">
            <h3 className="featured-project__title">Impact Circle</h3>
            <h4 className="featured-project__subtitle">
              Community Events & Social Impact Platform
            </h4>
            <p className="featured-project__stack">React • TypeScript • Sanity.io • REST APIs </p>
            <div className="featured-project__description">
              <p>
                A full-stack web platform designed to manage and showcase community events and
                charity initiatives, enabling structured, transparent, and measurable social impact.
              </p>

              <ul className="featured-project__list">
                <li>
                  Developed a responsive and user-friendly frontend using React and TypeScript
                </li>
                <li>
                  Integrated Sanity.io headless CMS to enable dynamic, real-time content management
                </li>
                <li>
                  Implemented GROQ queries and API-driven data fetching for efficient content
                  delivery
                </li>
                <li>
                  Designed reusable and scalable UI components for maintainability and performance
                </li>
                <li>
                  Built a centralized platform to improve visibility and accessibility of community
                  initiatives
                </li>
              </ul>
            </div>

            <div className="featured-project__links">
              <a href="#" className="btn featured-project__btn--live">
                Live
              </a>
              <Link to="/projects" className="btn btn--secondary featured-project__btn--more">
                More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
