import { ReactNode } from "react";
import Image from "../../atoms/image/Image";
import "./portfolio-item.scss";

interface PortfolioItemProps {
  imageSrc: string;
  title: string;
  index?: number;
}

const PortfolioItem = ({
  imageSrc,
  title,
}: PortfolioItemProps): ReactNode => (
  <a href="#" className="portfolio__item" title={title}>
    <Image src={imageSrc} alt="" className="portfolio__img" />
  </a>
);

export default PortfolioItem;