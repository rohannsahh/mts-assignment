"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const router = useRouter();

  const handleSearch = () => {
    if (from && to && date) {
      // Navigate to the buses page with query parameters
      router.push(`/busespage?from=${from}&to=${to}&date=${date}`);
    } else {
      alert('Please select From, To, and Date.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="bg-red-500 min-h-[90vh] flex items-center justify-center text-white py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          India’s No. 1 Online Bus Ticket Booking Site
        </h1>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="bg-white text-black rounded-full p-4 inline-flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div>
              <label className="block">From</label>
              <select
                className="border-0 text-gray-500 focus:ring-0 w-full md:w-auto rounded-md"
                title="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="">Select city</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Rishikesh">Rishikesh</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <span>⇄</span>
            </div>
            <div>
              <label className="block">To</label>
              <select
                className="border-0 text-gray-500 focus:ring-0 w-full md:w-auto rounded-md"
                title="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="">Destination</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Rishikesh">Rishikesh</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>
            <div>
              <label className="block">Date</label>
              <input
                type="date"
                className="border-0 focus:ring-0 text-gray-500 w-full md:w-auto rounded-md"
                placeholder="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={today}  // Restrict past dates
              />
            </div>
            <button
              className="bg-red-600 text-white rounded-full px-4"
              onClick={handleSearch}
            >
              Search Buses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
