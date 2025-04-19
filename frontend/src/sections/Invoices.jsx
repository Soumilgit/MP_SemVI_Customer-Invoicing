import { Link } from 'react-router-dom';
import InvoicesList from '../components/InvoicesList';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Invoices = () => {

  const { invoicesSearchResults, partners, searchInvoices, setSearchInvoices, handleDeleteInvoice, invoiceItems } = useContext(DataContext);

  return (
    <section className="w-full rounded-2xl shadow-md bg-white px-8 py-6 mt-5">
      <Helmet>
        <title>Invoices - Invoicely</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Invoices List</h1>

      <p className='text-lg text-gray-700 pb-6 pt-3'>Total invoices: {invoicesSearchResults.length}</p>

      <div className='flex justify-between items-center'>
        <Link to="../new-invoice" className='px-5 py-3 bg-teal-600 text-white text-sm font-montserrat rounded-xl hover:bg-teal-700 transition-colors'>
          New Invoice
        </Link>

        <form className='flex-shrink-0 w-1/3'>
          <input 
            className='input bg-gray-100 text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all'
            type='text'
            placeholder='Search invoices'
            value={searchInvoices}
            onChange={(e) => setSearchInvoices(e.target.value)}
          />
        </form>
      </div>

      {invoicesSearchResults.length ? (
        <InvoicesList 
          invoices={invoicesSearchResults} 
          partners={partners} 
          handleDeleteInvoice={handleDeleteInvoice} 
          invoiceItems={invoiceItems} 
        />
      ) : (
        <p className='text-center mt-12 mb-4 text-gray-500'>No invoices to display</p>
      )}
    </section>
  )
}

export default Invoices;
