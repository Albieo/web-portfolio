import { ReactNode } from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps): ReactNode => (
  <h2 className={className}>{text}</h2>
);

export default Title;
