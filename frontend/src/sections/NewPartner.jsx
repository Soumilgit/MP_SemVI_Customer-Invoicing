import React, { useContext } from 'react'
import { Helmet } from 'react-helmet';

import DataContext from '../context/DataContext';

const NewPartner = () => {

  const { partnerName, setPartnerName, partnerAddress, setPartnerAddress, partnerCity, setPartnerCity, partnerZip, setPartnerZip, partnerCountry, setPartnerCountry, handlePartnerSubmit } = useContext(DataContext);

  return (
    <section className="w-full rounded-[20px] shadow-3xl px-8 py-4 mt-5 bg-gray-100">

      <Helmet>
        <title>New Partner - Invoicely</title>
      </Helmet>

      <h1 className="text-2xl font-bold mb-4 text-gray-800">New Partner</h1>

      <form onSubmit={handlePartnerSubmit}>
        <div className='flex flex-col md:flex-row gap-10'>

          <div className='w-full md:w-1/2'>
            <fieldset>
              <label htmlFor='name' className='text-gray-700'>Name</label>
              <input
                type='text'
                className='input mt-1'
                id='name'
                required
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            </fieldset>

            <fieldset className='mt-3'>
              <label htmlFor='city' className='text-gray-700'>City</label>
              <input
                type='text'
                required
                className='input mt-1'
                id='city'
                value={partnerCity}
                onChange={(e) => setPartnerCity(e.target.value)}
              />
            </fieldset>

            <fieldset className='mt-3'>
              <label htmlFor='country' className='text-gray-700'>Country</label>
              <input
                type='text'
                required
                className='input mt-1'
                id='country'
                value={partnerCountry}
                onChange={(e) => setPartnerCountry(e.target.value)}
              />
            </fieldset>
          </div>

          <div className='w-full md:w-1/2'>
            <fieldset>
              <label htmlFor='address' className='text-gray-700'>Address</label>
              <input
                type='text'
                required
                className='input mt-1'
                id='address'
                value={partnerAddress}
                onChange={(e) => setPartnerAddress(e.target.value)}
              />
            </fieldset>

            <fieldset className='mt-3'>
              <label htmlFor='zip' className='text-gray-700'>Zip</label>
              <input
                type='number'
                required
                className='input mt-1'
                id='zip'
                value={partnerZip}
                onChange={(e) => setPartnerZip(e.target.value)}
              />
            </fieldset>
          </div>

        </div>

        <button className='mt-7 px-5 py-3 border font-montserrat text-sm leading-none bg-teal-500 hover:bg-teal-600 rounded-xl text-white' type="submit">Save</button>

      </form>
    </section>
  )
}

export default NewPartner;
