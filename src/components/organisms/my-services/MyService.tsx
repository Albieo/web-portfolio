import { ReactNode } from "react";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";
import ServiceItem from "../../molecules/service-item/ServiceItem";
import "./my-service.scss";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Offering end-to-end development of robust web applications, combining responsive front-end interfaces with secure, scalable back-end systems. Proficient in modern tech stacks including React, Node.js, Django, and PostgreSQL, with a focus on performance, accessibility, and clean architecture."
  },
  {
    title: "Front-End Engineering & UI Development",
    description: "Delivering intuitive and responsive user interfaces with a strong emphasis on usability, design systems, and modern JavaScript frameworks. Skilled in state management, API integration, and adaptive layout techniques using tools like React and TailwindCSS."
  },
  {
    title: "Automation & Command-Line Tool Development",
    description: "Building lightweight, efficient command-line tools and automation scripts using languages like Python and C. Focused on solving backend tasks, data handling, and system interaction through structured, maintainable code with an emphasis on developer ergonomics."
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
