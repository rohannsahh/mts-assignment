"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import FilterSidebar from '../../components/FilterSidebar';

const BusesPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<{ from: string; to: string; date: string } | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [filteredBuses, setFilteredBuses] = useState<any[]>([]);

  useEffect(() => {
    const from = searchParams.get('from');
    const to = searchParams.get('to');
    const date = searchParams.get('date');

    if (from && to && date) {
      setParams({ from, to, date });
    }
  }, [searchParams]);

  const buses = [
    {
      id: 1,
      company: 'City Land Travels',
      departureTime: '00:30',
      arrivalTime: '06:30',
      duration: '6h 00m',
      price: 529,
      seatsAvailable: 28,
      rating: 3.8,
      isAC: true,
    },
    {
      id: 2,
      company: 'FlixBus',
      departureTime: '00:35',
      arrivalTime: '05:35',
      duration: '5h 00m',
      price: 277,
      seatsAvailable: 44,
      rating: 4.0,
      isAC: false,
    },
    {
      id: 3,
      company: 'Zingbus Plus',
      departureTime: '02:15',
      arrivalTime: '07:10',
      duration: '4h 55m',
      price: 291,
      seatsAvailable: 31,
      rating: 4.2,
      isAC: true,
    },
    {
      id: 4,
      company: 'Rinku Travels',
      departureTime: '03:00',
      arrivalTime: '09:00',
      duration: '6h 00m',
      price: 450,
      seatsAvailable: 40,
      rating: 3.7,
      isAC: false,
    },
  ];

  useEffect(() => {
    let filtered = buses;

    if (filters.seatAvailability) {
      filtered = filtered.filter((bus) => bus.seatsAvailable > 0);
    }

    if (filters.arrivalTime) {
      filtered = filtered.filter((bus) => {
        const time = parseInt((bus.arrivalTime ?? '').split(':')[0]);
        if (filters.arrivalTime === 'before6am') return time < 6;
        if (filters.arrivalTime === '6amTo12pm') return time >= 6 && time < 12;
        if (filters.arrivalTime === '12pmTo6pm') return time >= 12 && time < 18;
        if (filters.arrivalTime === 'after6pm') return time >= 18;
      });
    }

    if (filters.boardingPoint) {
      filtered = filtered.filter((bus) =>
        bus.company.toLowerCase().includes(filters.boardingPoint.toLowerCase())
      );
    }

    if (filters.droppingPoint) {
      filtered = filtered.filter((bus) =>
        bus.company.toLowerCase().includes(filters.droppingPoint.toLowerCase())
      );
    }

    if (filters.operator) {
      filtered = filtered.filter((bus) =>
        bus.company.toLowerCase().includes(filters.operator.toLowerCase())
      );
    }

    if (filters.isAC) {
      filtered = filtered.filter((bus) => bus.isAC);
    }

    setFilteredBuses(filtered);
  }, [filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex">
      <FilterSidebar onFilterChange={handleFilterChange} />

      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-4">Available Buses</h1>
        {params ? (
          <p>
            Showing results for: {params.from} to {params.to} on {params.date}
          </p>
        ) : (
          <p>Loading...</p>
        )}

        <div className="mt-4">
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
              <div key={bus.id} className="border p-4 rounded-lg mb-4">
                <h2 className="text-xl font-semibold">{bus.company}</h2>
                <p>Departure: {bus.departureTime}</p>
                <p>Arrival: {bus.arrivalTime}</p>
                <p>Duration: {bus.duration}</p>
                <p>Price: ₹{bus.price}</p>
                <p>Seats Available: {bus.seatsAvailable}</p>
                <p>Rating: {bus.rating}</p>
                <p>AC: {bus.isAC ? 'Yes' : 'No'}</p>
              </div>
            ))
          ) : (
            <p>No buses available with the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusesPage;
