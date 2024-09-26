"use client";
import { useState } from "react";
import Header from "./components/header"; // Adjust the import path as necessary
import Footer from "./components/footer";
import Button from "./components/Button";
import Head from "next/head";
import TextWithIcon from "./components/TextWithIcon"; // Adjust the import path as necessary
import ImageTextSection from "./components/ImageTextSection";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="relative w-full h-screen bg-no-repeat md:bg-right top-0 xs:bg-cover bg-center"
        style={{ backgroundImage: "url('/images/designer_1.png')" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row h-full">
          {/* Left Text Section */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center text-left p-8 bg-white bg-opacity-75 md:bg-transparent h-full">
            <h1 className="text-3xl md:text-5xl font-medium leading-tight md:leading-normal tracking-wide mb-4">
              Introduce Your Product Quickly & Effectively
            </h1>
            <p className="text-base md:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="text-base md:text-lg mb-6">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
              <Button href="/buy" variant="outline">
                Purchase UI Kit
              </Button>
              <Button href="/learn-more" variant="solid">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full h-auto md:h-screen mt-16 md:mt-0">
  <div className="container mx-auto flex flex-col-reverse md:flex-row h-full">

    {/* Left Text Section */}
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-left p-4 md:p-8 bg-white bg-opacity-75 md:bg-transparent">
      <h1 className="text-3xl md:text-5xl font-medium leading-tight md:leading-normal tracking-wide mb-4">
        Introduce Your Product Quickly & Effectively
      </h1>
      <p className="text-base md:text-lg mb-4 md:mb-6">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus
      </p>
      <p className="text-base md:text-lg mb-4 md:mb-6">
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem. Nulla consequat massa quis enim.
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
        <TextWithIcon
          icon={<img src="/images/icon.svg" alt="Icon 1" />} // Replace with the actual image path
          title="Title Goes Here"
          body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
        <TextWithIcon
          icon={<img src="/images/icon.svg" alt="Icon 2" />} // Replace with the actual image path
          title="Title Goes Here"
          body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
        />
      </div>
    </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
      <img
        src="/images/mobile.svg"
        alt="Mobile"
        className="h-auto md:h-auto md:object-scale-down"
      />
    </div>
  </div>
</section>
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
        buttonHref="/buy"
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
        <Button href="/purchase" variant="solid">
          Purchase Now
        </Button>
      </section>

      <Footer />
    </>
  );
}
