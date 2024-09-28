// components/Layout.tsx
import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="w-full mx-auto flex flex-col md:flex-row h-full  items-center justify-center">{children}</main>
      <Footer />
      </>

);
};

export default Layout;