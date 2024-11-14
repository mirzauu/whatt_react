import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Hero3D } from './components/Hero3D';
import { Services } from './components/Services';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Header />
      <div className="relative">
        <Hero />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Hero3D />
        </div>
      </div>
      <Services />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;