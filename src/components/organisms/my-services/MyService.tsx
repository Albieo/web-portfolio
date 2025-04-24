import { ReactNode } from "react";
import Title from "../../atoms/title/Title";
import Button from "../../atoms/button/Button";
import ServiceItem from "../../molecules/service-item/ServiceItem";
import "./my-service.scss";

const services = [
  {
    title: "Design + Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "E-Commerce",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "WordPress",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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