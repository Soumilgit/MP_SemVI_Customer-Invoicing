import React, { useState } from 'react';
import PartnerListItem from './PartnerListItem';

const PartnersList = ({ partners, handleDeletePartner }) => {
  const [editingPartner, setEditingPartner] = useState(null); // track which partner is being edited
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    country: '',
  });

  const handleEditPartner = (partner) => {
    setEditingPartner(partner._id);
    setFormData({
      name: partner.name,
      address: partner.address,
      city: partner.city,
      zip: partner.zip,
      country: partner.country,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // TODO: send update request here
    console.log('Updated data:', formData);

    // Reset after submit
    setEditingPartner(null);
  };

  return (
    <>
      <div className='flex gap-9 mt-7 bg-slate-600 py-3 rounded-tl-lg rounded-tr-lg'>
        <div className='font-semibold sm:w-[150px] pl-4 text-white'>
          Partner Name
        </div>
        <div className='font-semibold sm:w-[400px] flex-1 text-white'>
          Address
        </div>
        <div className='font-semibold sm:w-[150px] text-white'>
          Action
        </div>
      </div>

      {partners.map((partner) => (
        editingPartner === partner._id ? (
          <form
            key={partner._id}
            onSubmit={handleUpdateSubmit}
            className="flex gap-9 border-b-2 py-3 bg-yellow-50 mt-2"
          >
            <input
              className="sm:w-[150px] pl-4 border px-2"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="sm:w-[400px] flex-1 border px-2"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input className="w-24 border px-2" name="city" value={formData.city} onChange={handleChange} />
            <input className="w-20 border px-2" name="zip" value={formData.zip} onChange={handleChange} />
            <input className="w-24 border px-2" name="country" value={formData.country} onChange={handleChange} />

            <button type="submit" className="bg-green-500 text-white px-3 rounded-md">Save</button>
          </form>
        ) : (
          <PartnerListItem
            key={partner._id}
            partnerid={partner._id}
            name={partner.name}
            address={partner.address}
            city={partner.city}
            zip={partner.zip}
            country={partner.country}
            handleDeletePartner={handleDeletePartner}
            handleEditPartner={() => handleEditPartner(partner)}
          />
        )
      ))}
    </>
  );
};

export default PartnersList;
