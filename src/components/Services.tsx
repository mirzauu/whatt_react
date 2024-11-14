import React from 'react';
import { Code2, Database, Layout, Calendar, Building2, Smartphone } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  { icon: Layout, title: 'Landing Pages', description: 'Conversion-focused, responsive landing pages that drive results' },
  { icon: Database, title: 'CRM Systems', description: 'Custom CRM solutions to streamline your customer relationships' },
  { icon: Building2, title: 'ERP Systems', description: 'Enterprise resource planning solutions for business efficiency' },
  { icon: Calendar, title: 'Booking Platforms', description: 'Seamless scheduling and reservation systems' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile applications' },
  { icon: Code2, title: 'Custom Software', description: 'Tailored software solutions for unique business needs' },
];

export function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white">Services</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
          Comprehensive solutions for your digital needs
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}