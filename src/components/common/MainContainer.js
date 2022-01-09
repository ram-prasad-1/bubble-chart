import React from 'react';
import Nav from '@/components/common/Nav';
import Footer from '@/components/common/Footer';

export default function MainContainer({ children }) {
  return (
    <>
      <Nav />
      <div className="prose container max-w-screen-lg mx-auto p-4 ">
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
}
