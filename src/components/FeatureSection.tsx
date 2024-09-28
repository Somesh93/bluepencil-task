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
  subtitle: string[];
  imageSrc: string;
  points: Point[];
  reverse?: boolean;
  textWidth?: string;
  imageWidth?: string;
  className?: string; // New prop for additional classes
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  points,
  reverse = false,
  textWidth = 'md:w-2/3',
  imageWidth = 'md:w-1/3',
  className = '' // Default to an empty string if not provided
}) => {
  return (
    <section className={`relative w-full h-auto md:h-screen mt-16 md:mt-0 ${className}`}>
      <div className={`w-full mx-auto flex flex-col-reverse md:flex-row h-full ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {/* Text Section */}
        <div className={`w-full ${textWidth} flex flex-col items-start justify-center text-left p-4 md:p-8 bg-white bg-opacity-75 md:bg-transparent`}>
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
                icon={<Image src={point.icon} width={36} height={36} alt={`Icon ${index + 1}`} />}
                title={point.title}
                body={point.body}
              />
            ))}
            {points.slice(4).map((point, index) => (
              <TextWithIcon
                key={index + 4}
                icon={<Image src={point.icon} width={36} height={36} alt={`Icon ${index + 1}`} />}
                title={point.title}
                body={point.body}
              />
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className={`w-full ${imageWidth} flex items-center justify-center `}>
          <Image src={imageSrc} alt="Feature" layout="intrinsic" width={500} height={500} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;