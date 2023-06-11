import { Link } from 'react-router-dom';

const ContactButton: React.FC = () => {
  return (
    <Link
      to={'/contact'}
      type='button'
      className='text-white bg-gradient-to-br from-[#5b37eb] font-semibold
        to-[#37eba9] focus:outline-none rounded-lg text-md px-5 py-3 text-center'
    >
      Contact
    </Link>
  );
};

export default ContactButton;
