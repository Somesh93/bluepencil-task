// pages/about.tsx
"use client";
import Head from "next/head";
import Layout from "@/components/Layout"; // Adjust the import path as necessary
import FeatureSection from "@/components/FeatureSection";

export default function Page() {

  const featureData = {
    title: 'Design & Build Your Own Landing Pages',
    subtitle: [
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
      'mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.'
    ],
    imageSrc: '/images/Vert.png',
    points: [
      {
        icon: '/images/icon.svg',
        title: 'Title Goes Here',
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
      },
      {
        icon: '/images/icon.svg',
        title: 'Title Goes Here',
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
      },
      {
        icon: '/images/icon.svg',
        title: 'Title Goes Here',
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
      },
      {
        icon: '/images/icon.svg',
        title: 'Title Goes Here',
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
      }
      // Add more points as needed, up to a maximum of 4
    ]
  };

  return (
    <Layout>
      <Head>
        <title>About Page</title>
      </Head>
      <FeatureSection
        title={featureData.title}
        subtitle={featureData.subtitle}
        imageSrc={featureData.imageSrc}
        points={featureData.points}
      />
    </Layout>
  );
}