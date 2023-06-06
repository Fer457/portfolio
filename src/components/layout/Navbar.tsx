/** @format */

import { Link } from 'react-router-dom';
import ContactButton from '../ContactButton';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-[#1d1d1d] flex flex-row p-6 items-center justify-between text-white sticky top-0'>
      <div className='flex flex-row space-x-12 items-center'>
        <Link to={'/'}>
          <h1 className='text-[25px] font-bold'>Fernando Nevot</h1>
        </Link>
        <Link to={'/about'}>About me</Link>
        <Link to={'/projects'}>My projects</Link>
        <Link to={'/experience'}>Experience</Link>
      </div>
      <ContactButton />
    </nav>
  );
};

export default Navbar;
