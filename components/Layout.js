import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = (props) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-prose mx-auto">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="grow flex items-center">{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
