import { Link } from 'react-router-dom';
import './featured-project.scss';
import featuredImg from '../../../img/featured-project.png';

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
          </div>

          <div className="featured-project__info">
            <h3 className="featured-project__title">Community Events Platform</h3>
            <p className="featured-project__stack">React • TypeScript • Sanity.io • APIs</p>

            <div className="featured-project__description">
              <p>
                A full-stack platform for managing community events and charity initiatives with
                real-time content updates.
              </p>

              <ul className="featured-project__list">
                <li>Built responsive UI using React and TypeScript</li>
                <li>Integrated Sanity CMS for dynamic content</li>
                <li>Implemented API-driven architecture</li>
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
