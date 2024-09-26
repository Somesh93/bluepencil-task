import React from 'react';
import Button from './Button'; // Adjust the import path as necessary

interface ImageTextSectionProps {
  imageSrc: string;
  title: string;
  body: string;
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
  reverse?: boolean;
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
  imageSrc,
  title,
  body,
  showButton = false,
  buttonText = '',
  buttonHref = '',
  reverse = false,
}) => {
  return (
    <section className="w-full min-h-[80vh] flex flex-col md:flex-row">
      {reverse ? (
        <>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
            <img src={imageSrc} alt="Section Image" className="h-48 md:h-full object-scale-down" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight md:leading-normal text-left mb-4 text-[#091133]">{title}</h2>
            <p className="text-lg md:text-xl mb-4 text-[#6F7CB2]">{body}</p>
            {showButton && (
              <Button href={buttonHref} variant="solid">
                {buttonText}
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight md:leading-normal text-left mb-4 text-[#091133]">{title}</h2>
            <p className="text-lg md:text-xl mb-4 text-[#6F7CB2]">{body}</p>
            {showButton && (
              <Button href={buttonHref} variant="solid">
                {buttonText}
              </Button>
            )}
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
            <img src={imageSrc} alt="Section Image" className="h-48 md:h-full object-scale-down" />
          </div>
        </>
      )}
    </section>
  );
};

export default ImageTextSection;