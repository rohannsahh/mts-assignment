import React, { useState } from 'react';

interface FilterSidebarProps {
  onFilterChange: (filters: any) => void;

}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    seatAvailability: false,
    arrivalTime: '',
    boardingPoint: '',
    droppingPoint: '',
    operator: '',
    isAC: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(filters);
  };

  return (
    <div className="w-full md:w-64 bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filter Results</h2>

      {/* Seat Availability */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Seat Availability</h3>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="seatAvailability"
            className="form-checkbox h-4 w-4 text-red-600"
            onChange={handleChange}
          />
          <span className="ml-2">Single Seats Available</span>
        </label>
      </div>

      {/* Arrival Time */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Arrival Time</h3>
        <div className="space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="arrivalTime"
              value="before6am"
              className="form-radio h-4 w-4 text-red-600"
              onChange={handleChange}
            />
            <span className="ml-2">Before 6 am</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="arrivalTime"
              value="6amTo12pm"
              className="form-radio h-4 w-4 text-red-600"
              onChange={handleChange}
            />
            <span className="ml-2">6 am to 12 pm</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="arrivalTime"
              value="12pmTo6pm"
              className="form-radio h-4 w-4 text-red-600"
              onChange={handleChange}
            />
            <span className="ml-2">12 pm to 6 pm</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="arrivalTime"
              value="after6pm"
              className="form-radio h-4 w-4 text-red-600"
              onChange={handleChange}
            />
            <span className="ml-2">After 6 pm</span>
          </label>
        </div>
      </div>

      {/* Boarding Point */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Boarding Point</h3>
        <input
          type="text"
          name="boardingPoint"
          placeholder="Boarding Point"
          className="w-full border border-gray-300 rounded-lg p-2"
          onChange={handleChange}
        />
      </div>

      {/* Dropping Point */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Dropping Point</h3>
        <input
          type="text"
          name="droppingPoint"
          placeholder="Dropping Point"
          className="w-full border border-gray-300 rounded-lg p-2"
          onChange={handleChange}
        />
      </div>

      {/* Operator */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Operator</h3>
        <input
          type="text"
          name="operator"
          placeholder="Operator"
          className="w-full border border-gray-300 rounded-lg p-2"
          onChange={handleChange}
        />
      </div>

      {/* RTC Bus Type */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">RTC Bus Type</h3>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="isAC"
            className="form-checkbox h-4 w-4 text-red-600"
            onChange={handleChange}
          />
          <span className="ml-2">A/C Bus</span>
        </label>
      </div>

      <button
        className="bg-red-600 text-white px-4 py-2 rounded-full w-full mt-4"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
