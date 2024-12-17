import React from 'react';

interface AuthInputProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  onChange? : React.ChangeEventHandler;
  name? : string;
  value? : string;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  value,
  name,
  id,
  label,
  type,
  onChange,
  required = false
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        value={value}
        name={name}
        type={type}
        id={id}
        className="block w-full rounded-lg bg-gray-700 border-2 border-gray-600 text-white px-4 py-2.5 
                 transition-all duration-300
                 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none
                 hover:border-gray-500"
        required={required} onChange={onChange}
      />
    </div>
  );
};