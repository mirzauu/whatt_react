import React from 'react';
import { Briefcase, Mail, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-purple-500" />
            <p className="text-gray-400">Available for freelance projects</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a href="mailto:mirzamailbox0@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-purple-500 transition-colors">
              <Mail className="h-5 w-5" />
              <span>mirzamailbox0@gmail.com</span>
            </a>
            <a href="tel:+918592033444" className="flex items-center space-x-2 text-gray-400 hover:text-purple-500 transition-colors">
              <Phone className="h-5 w-5" />
              <span>+91 859 203 3444</span>
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~01f498713e447784a9?mp_source=share" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-400 hover:text-purple-500 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Upwork Profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}