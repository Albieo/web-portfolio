import { ReactNode } from "react";
import "./image.scss";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps): ReactNode => (
  <img src={src} alt={alt} className={className} />
);

export default Image;
