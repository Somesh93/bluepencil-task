"use client";
import { useState } from "react";
import Header from "./components/header"; // Adjust the import path as necessary
import Footer from "./components/footer";
import Button from "./components/Button";
import Head from "next/head";
import TextWithIcon from './components/TextWithIcon'; // Adjust the import path as necessary
import ImageTextSection from "./components/ImageTextSection";

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="relative w-full h-screen bg-no-repeat bg-right"
        style={{ backgroundImage: "url('/images/designer_1.png')" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row h-full">
          {/* Left Text Section */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center text-center md:text-left p-8">
            {/* <div className="md:w-2/5 text-center md:text-left"> */}
            <h1 className="text-50px font-medium leading-66px tracking-1px text-left mb-4">
              Introduce Your Product Quickly & Effectively
            </h1>
            <p className="text-18px mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
            </p>
            <p className="text-18px mb-6">
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <div className="flex space-x-30 w-full">
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
      <section className="relative w-full h-screen">
  <div className="container mx-auto flex flex-col md:flex-row h-full">
    {/* Left Text Section */}
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left p-4 md:p-8">
      <h1 className="text-24px md:text-50px font-medium leading-32px md:leading-66px tracking-1px text-left mb-4">
        Introduce Your Product Quickly & Effectively
      </h1>
      <p className="text-14px md:text-18px mb-4 md:mb-6">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
      </p>
      <p className="text-14px md:text-18px mb-4 md:mb-6">
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
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
    <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
      <img src="/images/mobile.svg" alt="Mobile" className="h-48 md:h-full object-contain" />
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
   <section className="w-full min-h-screen flex flex-col items-center justify-center p-8 bg-[#E7ECFF] clipping">
      <h1 className="text-4xl md:text-5xl font-medium text-[#091133] mb-6">A Price To Suit Everyone</h1>
      <p className="text-lg md:text-xl text-[#6F7CB2] mb-6 text-center max-w-2xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.
      </p>
      <div className="text-center mb-6">
        <span className="text-5xl md:text-6xl font-medium text-[#222F65]">$40</span>
      </div>
      <div className="text-center mb-6">
        <span className="text-2xl md:text-3xl font-medium text-[#091133]">UI Design Kit</span>
      </div>
      <div className="text-center mb-6">
        <span className="text-lg md:text-xl text-[#6F7CB2]">See, One price. Simple.</span>
      </div>
      <Button href="/purchase" variant="solid">Purchase Now</Button>
    </section>


      <Footer />
    </>
  );
}
