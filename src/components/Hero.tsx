import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Transforming Ideas into Digital Reality
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-400">
          Full-stack developer specializing in web applications, mobile apps, and enterprise solutions.
        </p>
        <div className="mt-8">
          <a
            href="https://www.upwork.com/freelancers/~01f498713e447784a9?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300"
          >
            View My Upwork Portfolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}