import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  href: string;
  title?: string;
  className?: string;
}

const Button = ({ text, href, title, className }: ButtonProps): ReactNode => (
  <a href={href} className={className} title={title}>
    {text}
  </a>
);

export default Button;