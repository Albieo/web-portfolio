import { ReactNode } from "react";
import "./typography.scss";

interface SubtitleProps {
  text: string;
  className?: string;
}

const Subtitle = ({ text, className }: SubtitleProps): ReactNode => (
  <p className={className}>{text}</p>
);

export default Subtitle;
