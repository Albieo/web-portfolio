import { ReactNode } from "react";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";
import ServiceItem from "../../molecules/service-item/ServiceItem";
import "./my-service.scss";

interface Service {
  title: string;
  description: string;
}

const services: ReadonlyArray<Service> = [
  {
    title: "Full-Stack Web Development",
    description: "Building end-to-end web applications using React, TypeScript, Django, and Spring Boot. Focused on creating scalable systems with clean architecture, API-driven design, and efficient data handling using PostgreSQL and modern backend practices."
  },
  {
    title: "Frontend Development & UI Engineering",
    description: "Developing responsive, user-focused interfaces using React, JavaScript, and modern CSS (Sass/Tailwind). Emphasis on performance, reusable components, API integration, and delivering clean, intuitive user experiences across devices."
  },
  {
    title: "API Integration & CMS Solutions",
    description: "Integrating REST APIs and headless CMS platforms like Sanity.io to power dynamic, content-driven applications. Experienced in real-time data handling, GROQ queries, and building flexible systems for managing and delivering content."
  }
];

const MyService = (): ReactNode => (
  <section className="my-services" id="services">
    <Title
      text="What I do"
      className="section__title section__title--services"
    />

    <div className="services">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>

    <Button
      text="My Work"
      href="#projects"
      className="btn"
      title="my work"
    />
  </section>
);

export default MyService;
