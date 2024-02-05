'use client'
import React, { useState } from 'react';
import Result from './Result';

function ParentComponent() {
  const [formData, setFormData] = useState({
    gold: '',
    silver: '',
    // other form fields
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  return (
    <div>
      <form>
        <input
          type="number"
          name="gold"
          value={formData.gold}
          onChange={handleFormChange}
          placeholder='Enter Gold Rate'
        />
        <input
          type="number"
          name="silver"
          value={formData.silver}
          onChange={handleFormChange}
          placeholder='Enter Silver Rate'
        />
        {/* other form fields */}
      </form>
      <Result formData={formData} />
    </div>
  );
}

export default ParentComponent;
