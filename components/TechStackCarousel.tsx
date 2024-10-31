import { techStack } from '@/data';
import React from 'react';

const TechStackCarousel = () => {
  return (
    <div className="overflow-hidden px-12 mt-4">
      <div className="whitespace-nowrap animate-infiniteScroll">
        {[...techStack, ...techStack].map((tech, index) => (
          <span key={index} className="inline-block mx-2 font-semibold text-white">
            <img src={`/${tech}.png`} alt={tech} className="h-[80px] w-[80px] mx-auto" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackCarousel;
