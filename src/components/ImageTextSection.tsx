import React from 'react';
import Image from 'next/image';
import Button from './Button';

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
    <section className="container mx-auto w-full min-h-[60vh] flex flex-col md:flex-row">
      {reverse ? (
        <>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
            <Image
              src={imageSrc}
              alt="Section Image"
              width={500} // Adjust the width as needed
              height={500} // Adjust the height as needed
              className="h-48 md:h-auto object-contain"
              priority={reverse} // Load the image eagerly if reverse is true
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight md:leading-normal mb-4 text-[#091133]">{title}</h2>
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
          <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left p-4 md:p-8">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight md:leading-normal mb-4 text-[#091133]">{title}</h2>
            <p className="text-lg md:text-xl mb-4 text-[#6F7CB2]">{body}</p>
            {showButton && (
              <Button href={buttonHref} variant="solid">
                {buttonText}
              </Button>
            )}
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
            <Image
              src={imageSrc}
              alt="Section Image"
              width={500} // Adjust the width as needed
              height={500} // Adjust the height as needed
              className="h-48 md:h-auto object-contain"
              priority={!reverse} // Load the image eagerly if reverse is false
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ImageTextSection;