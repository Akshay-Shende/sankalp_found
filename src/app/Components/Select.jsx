'use client'
import React from 'react';

const Select = ({ options, label, onChange, value }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2">{label}</label>}
      <select
        className="w-full mt-1 bg-white rounded-md focus:outline-none"
        onChange={onChange}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
