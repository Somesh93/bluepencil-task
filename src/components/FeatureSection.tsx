// components/FeatureSection.tsx
import React from 'react';
import Image from 'next/image';
import TextWithIcon from './TextWithIcon';

interface Point {
  icon: string;
  title: string;
  body: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string[]; // Update subtitle to be an array of strings
  imageSrc: string;
  points: Point[];
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, subtitle, imageSrc, points, reverse = false }) => {
  return (
    <section className="relative w-full h-auto md:h-screen mt-16 md:mt-0">
      <div className={`container mx-auto flex flex-col-reverse md:flex-row h-full ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left p-4 md:p-8 bg-white bg-opacity-75 md:bg-transparent">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight md:leading-normal tracking-wide mb-4">
            {title}
          </h1>
          {subtitle.map((line, index) => (
            <p key={index} className="text-[#6F7CB2] md:text-lg mb-4 md:mb-6">
              {line}
            </p>
          ))}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {points.slice(0, 4).map((point, index) => (
              <TextWithIcon
                key={index}
                icon={<img src={point.icon} height="36px" width="36px" alt={`Icon ${index + 1}`} />}
                title={point.title}
                body={point.body}
              />
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
          <Image
            src={imageSrc}
            alt="Feature Image"
            width={500}
            height={500}
            className="h-auto md:h-auto md:object-scale-down"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;