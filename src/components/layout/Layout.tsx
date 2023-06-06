/** @format */

import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='font-figtree text-white'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
