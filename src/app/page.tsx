"use client";
import { useState } from "react";
import Header from "@/components/header"; // Adjust the import path as necessary
import Footer from "@/components/footer";
import Button from "@/components/Button";
import Head from "next/head";
import TextWithIcon from "@/components/TextWithIcon"; // Adjust the import path as necessary
import ImageTextSection from "@/components/ImageTextSection";
import FeatureSection from "@/components/FeatureSection";
import useLazyBackgroundImage from "@/hooks/LazyBackgroundHook";

export default function Home() {

  const heroSection = {
    title: "Introduce Your Product Quickly & Effectively",
    subtitle: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
      "mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    ],
    backgroundImage: "/images/hero_one.png",
    buttons: [
      { href: '#', variant: 'outline' as 'outline', text: 'Purchase UI Kit' },
      { href: '#', variant: 'solid' as 'solid', text: 'Learn More' }
    ]
  };

  const featureData = {
    title: "Light, Fast, and Powerful",
    subtitle: [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    ],
    imageSrc: "/images/mobile.svg",
    points: [
      {
        icon: "/images/icon.svg",
        title: "Title Goes Here",
        body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      },
      {
        icon: "/images/icon.svg",
        title: "Title Goes Here",
        body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
      },
      // Add more points as needed, up to a maximum of 4
    ],
  };
  const { ref, bgImage } = useLazyBackgroundImage(heroSection.backgroundImage);

  return (
    <>
      <Header />
      <section
      ref={ref}
      className="relative w-full h-screen bg-no-repeat md:bg-right top-0 xs:bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row h-full">
        {/* Left Text Section */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center text-left p-8 bg-white bg-opacity-75 md:bg-transparent h-full">
          <h1 className="text-3xl md:text-5xl font-medium leading-tight md:leading-normal tracking-wide mb-4">
            {heroSection.title}
          </h1>
          {heroSection.subtitle.map((line, index) => (
            <p key={index} className="text-[#6F7CB2] md:text-lg mb-6">
              {line}
            </p>
          ))}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
          {heroSection.buttons.map((button, index) => (
                <Button key={index} href={button.href} variant={button.variant}>
                  {button.text}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>

      {/* Main Content */}

      <FeatureSection
        title={featureData.title}
        subtitle={featureData.subtitle}
        imageSrc={featureData.imageSrc}
        points={featureData.points}
        reverse={false} // Use reverse prop to change the order
      />

      <ImageTextSection
        imageSrc="/images/image.png"
        title="Light, Fast & Powerful"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        reverse={true}
      />

      <ImageTextSection
        imageSrc="/images/social.png"
        title="Light, Fast & Powerful"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        reverse={true}
      />

      <ImageTextSection
        imageSrc="/images/mention.png"
        title="Light, Fast & Powerful"
        body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
        showButton={true}
        buttonText="Purchase UI Kit"
        buttonHref="#"
        reverse={true}
      />

      <section className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-[#E7ECFF] clipping md:clipping-lg">
        <h1 className="text-3xl md:text-5xl font-medium text-[#091133] mb-6 text-center">
          A Price To Suit Everyone
        </h1>
        <p className="text-base md:text-xl text-[#6F7CB2] mb-6  text-center max-w-2xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <div className="text-center mb-6">
          <span className="text-4xl md:text-6xl font-medium text-[#222F65]">
            $40
          </span>
        </div>
        <div className="text-center mb-6">
          <span className="text-xl md:text-3xl font-medium text-[#091133]">
            UI Design Kit
          </span>
        </div>
        <div className="text-center mb-6">
          <span className="text-base md:text-xl text-[#6F7CB2]">
            See, One price. Simple.
          </span>
        </div>
        <Button href="#" variant="solid">
          Purchase Now
        </Button>
      </section>

      <Footer />
    </>
  );
}
