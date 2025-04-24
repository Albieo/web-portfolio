import { ReactNode } from "react";
import Title from "../../atoms/title/Title";
import Subtitle from "../../atoms/subtitle/Subtitle";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  titleClass?: string;
  subtitleClass?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  titleClass,
  subtitleClass,
}: SectionHeaderProps): ReactNode => (
  <>
    <Title text={title} className={titleClass} />
    <Subtitle text={subtitle} className={subtitleClass} />
  </>
);

export default SectionHeader;