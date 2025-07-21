import { ReactNode } from "react";
import Image from "../../atoms/image/Image";
import "./portfolio-item.scss";

interface PortfolioItemProps {
  imageSrc: string;
  title: string;
  index?: number;
  project_url?: string;
}

const PortfolioItem = ({
  imageSrc,
  title,
  project_url
}: PortfolioItemProps): ReactNode => (
  <a href={project_url || '#'} className="portfolio__item" title={title}>
    <Image src={imageSrc} alt="" className="portfolio__img" />
    <h3 className="project__title">
      {title}
    </h3>
  </a>
);

export default PortfolioItem;
