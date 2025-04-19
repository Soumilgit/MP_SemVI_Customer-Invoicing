import { useState } from 'react';
import { MenuOutlined, HomeOutlined, DatabaseOutlined, ContactsOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  let location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full rounded-2xl bg-white shadow-md px-6 py-4 mt-5">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold font-montserrat">
          <Link to="/" className="text-indigo-600">Invoice<span className="text-teal-600">ly</span></Link>
        </div>

        {/* Hamburger/responsive menu */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <MenuOutlined className="text-indigo-600" />
        </div>

        <ul className="hidden md:flex justify-center space-x-8 items-center">

          <li>
            <Link to="/" className={`font-montserrat text-lg font-semibold ${location.pathname === '/' ? 'text-indigo-600 underline' : 'text-gray-600'} hover:text-teal-600 flex items-center`}>
              <HomeOutlined className='mr-2 mt-0.5' />
              Home / Stats
            </Link>
          </li>

          <li>
            <Link to="invoices" className={`font-montserrat text-lg font-semibold ${location.pathname === '/invoices' || location.pathname === '/new-invoice' || location.pathname.startsWith('/edit-invoice') || location.pathname.startsWith('/pdf') ? 'text-indigo-600 underline' : 'text-gray-600'} hover:text-teal-600 flex items-center`}>
              <DatabaseOutlined className='mr-2 mt-0.5' />
              Invoices
            </Link>
          </li>

          <li>
            <Link to="partners" className={`font-montserrat text-lg font-semibold ${location.pathname === '/partners' || location.pathname === '/new-partner' || location.pathname.startsWith('/edit-partner') ? 'text-indigo-600 underline' : 'text-gray-600'} hover:text-teal-600 flex items-center`}>
              <ContactsOutlined className='mr-2 mt-0.5' />
              Partners
            </Link>
          </li>
        </ul>
      </div>

      {/* Responsive menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-4">
          <Link to="/" className="block py-2 px-4 text-gray-800 hover:bg-teal-600 hover:text-white rounded-xl">Home / Stats</Link>
          <Link to="invoices" className="block py-2 px-4 text-gray-800 hover:bg-teal-600 hover:text-white rounded-xl">Invoices</Link>
          <Link to="partners" className="block py-2 px-4 text-gray-800 hover:bg-teal-600 hover:text-white rounded-xl">Partners</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
