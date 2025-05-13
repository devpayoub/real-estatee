
import React from "react";

interface ServiceHeaderProps {
  title: string;
  description: string;
}

const ServiceHeader = ({ title, description }: ServiceHeaderProps) => {
  return (
    <div className="text-center mb-12" data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-blue-red">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default ServiceHeader;
