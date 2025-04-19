import { Link } from 'react-router-dom';
import PartnersList from '../components/PartnersList'
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Partners = () => {

  const { partners, handleDeletePartner } = useContext(DataContext);

  return (
    <section className="w-full rounded-2xl shadow-md bg-white px-8 py-6 mt-5">
      
      <Helmet>
        <title>Partners - Invoicely</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Partners</h1>

      <p className='text-lg text-gray-700 pb-6 pt-3'>Total partners: {partners.length}</p>

      <Link to="../new-partner" className='px-5 py-3 bg-teal-600 text-white text-sm font-montserrat rounded-xl hover:bg-teal-700 transition-colors'>
        New Partner
      </Link>

      {partners.length ? (
        <PartnersList partners={partners} handleDeletePartner={handleDeletePartner} />
      ) : (
        <p className='text-center mt-12 mb-4 text-gray-500'>No partners to display</p>
      )}

    </section>
  )
}

export default Partners;
