import { ReactNode } from 'react';
import SectionHeader from '../../molecules/section-header/SectionHeader';
import { useTheme } from '../../atoms/theme/ThemeContext';
import './skills-preview.scss';

interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

const skillCategories: ReadonlyArray<SkillCategory> = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      'React / TypeScript',
      'JavaScript (ES6+)',
      'HTML5 & CSS3 / Sass',
      'Vite / Next.js',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      'Django / DRF',
      'Spring Boot (Java)',
      'Node.js / Express',
      'REST API Design',
      'Authentication & JWT',
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Sanity.io (CMS)',
      'ORM (Django, Hibernate)',
    ],
  },
  {
    title: 'DevOps',
    icon: '🚀',
    skills: [
      'Git & GitHub',
      'Docker',
      'Vercel / Render',
      'CI/CD Pipelines',
      'Linux / Shell Scripting',
    ],
  },
];

const SkillsPreview = (): ReactNode => {
  const { theme } = useTheme();

  return (
    <section
      className={`skills-preview ${theme === 'dark' ? 'skills-preview--dark' : ''}`}
      id="skills"
    >
      <SectionHeader
        title="Skills"
        subtitle="Technologies I work with."
        titleClass="section__title section__title--skills"
        subtitleClass="section__subtitle section__subtitle--skills"
      />
      <div className="skills-preview__grid">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className={`skill-card ${theme === 'dark' ? 'skill-card--dark' : ''}`}
          >
            <span className="skill-card__icon">{category.icon}</span>
            <h3 className="skill-card__title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill} className="skill-list__item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPreview;
