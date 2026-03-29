import SectionHeader from '../components/molecules/section-header/SectionHeader';
import SocialCardGrid from '../components/molecules/social-card-grid/SocialCardGrid';
import './contact-page.scss';

export default function ContactPage() {
  return (
    <section className="contact-page" id="contact">
      <SectionHeader
        title="Get in touch"
        subtitle="Feel free to contact me for any project or collaboration."
        titleClass="section__title section__title--contact"
        subtitleClass="section__subtitle section__subtitle--contact"
      />
      <div className="contact-page__content">
        <SocialCardGrid />
      </div>
    </section>
  );
}
