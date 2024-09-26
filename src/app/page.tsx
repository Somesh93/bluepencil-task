"use client";
import { useState } from "react";
import Header from "./components/header"; // Adjust the import path as necessary
import Footer from "./components/footer";
import Button from "./components/Button";
import Head from "next/head";

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
      <Footer />
    </>
  );
}
