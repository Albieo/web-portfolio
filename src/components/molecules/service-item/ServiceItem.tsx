import { ReactNode } from "react";
import "./service-item.scss"

interface ServiceItemProps {
    title: string;
    description: string;
}

const ServiceItem = ({
    title,
    description,
}: ServiceItemProps): ReactNode => (
    <div className="service">
        <div><h3>{title}</h3></div>
        <p>{description}</p>
    </div>
);

export default ServiceItem;
