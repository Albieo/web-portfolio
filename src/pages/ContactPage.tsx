import SectionHeader from '../components/molecules/section-header/SectionHeader';
import EmailLink from '../components/molecules/email-link/EmailLink';
import SocialList from '../components/molecules/social-list/SocialList';
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
        <EmailLink />
        <div className="contact-page__socials">
          <SocialList />
        </div>
      </div>
    </section>
  );
}
