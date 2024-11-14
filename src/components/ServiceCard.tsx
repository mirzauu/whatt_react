import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="relative group bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
      <div className="relative bg-gray-900 p-6 rounded-xl">
        <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center">
          <Icon className="h-6 w-6 text-purple-500" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  );
}