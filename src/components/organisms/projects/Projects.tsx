import { ReactNode } from "react";
import SectionHeader from "../../molecules/section-header/SectionHeader";
import PortfolioItem from "../../molecules/portfolio-item/PortfolioItem";
import portfolio_01 from '../../../img/portfolio-01.jpg';
import portfolio_02 from '../../../img/portfolio-02.jpg';
import portfolio_03 from '../../../img/portfolio-03.jpg';
import portfolio_04 from '../../../img/portfolio-04.jpg';
import portfolio_05 from '../../../img/portfolio-05.jpg';
import portfolio_06 from '../../../img/portfolio-06.jpg';
import portfolio_07 from '../../../img/portfolio-07.jpg';
import portfolio_08 from '../../../img/portfolio-08.jpg';
import portfolio_09 from '../../../img/portfolio-09.jpg';
// import portfolio_10 from '../../../img/portfolio-10.jpg';
import './projects.scss';

const portfolioItems = [
  { src: portfolio_01, title: "Quizzical", url: "https://quizzical-psi-wheat.vercel.app/" },
  { src: portfolio_02, title: "AirBnB Clone", url: "https://github.com/Albieo/AirBnB_clone_v4" },
  { src: portfolio_03, title: "Number Guessing Game", url: "https://github.com/Albieo/Number-Guessing-Game" },
  { src: portfolio_04, title: "Basketball Scoreboard", url: "https://basketball-scoreboard-eta.vercel.app/" },
  { src: portfolio_05, title: "Portfolio item 05" },
  { src: portfolio_06, title: "Portfolio item 06" },
  { src: portfolio_07, title: "Portfolio item 07" },
  { src: portfolio_08, title: "Portfolio item 08" },
  { src: portfolio_09, title: "Portfolio item 09" },
  // { src: portfolio_10, title: "Portfolio item 10" },
];

const Projects = (): ReactNode => (
  <section className="projects" id="projects">
    <div className="project__bg">
      <SectionHeader
        title="My projects"
        subtitle="A selection of my range of work."
        titleClass="section__title section__title--projects"
        subtitleClass="section__subtitle section__subtitle--projects"
      />

      <div className="portfolio">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            imageSrc={item.src}
            title={item.title}
            project_url={item.url}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
