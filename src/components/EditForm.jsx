import React, { useState } from "react";

const EditForm = ({ data, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(data);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-medium mb-4">Edit User Data</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="uppercase">
                {key}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className="px-3 py-1 w-full h-fit outline-none rounded-md text-sm"
                placeholder={key}
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button
              type="button"
              className="text-white bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
