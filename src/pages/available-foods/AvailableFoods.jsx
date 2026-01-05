import React, { useMemo, useState } from 'react';
import { useLoaderData } from 'react-router';
import FoodCard from '../../components/FoodCard';

const ITEMS_PER_PAGE = 6;

const AvailableFoods = () => {
  const data = useLoaderData() || [];

  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('all');
  const [sortBy, setSortBy] = useState('none');
  const [page, setPage] = useState(1);

  const filteredFoods = useMemo(() => {
    let foods = [...data];

    // 🔍 Search by food name
    if (search.trim()) {
      foods = foods.filter(food =>
        (food?.food_name || '')
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // 📍 Filter by pickup location
    if (location !== 'all') {
      foods = foods.filter(food =>
        food?.pickup_location?.toLowerCase().includes(location.toLowerCase())
      );
    }

    // 🔃 Sorting
    if (sortBy === 'expireSoon') {
      foods.sort(
        (a, b) =>
          new Date(a?.expire_date) - new Date(b?.expire_date)
      );
    }

    if (sortBy === 'expireLate') {
      foods.sort(
        (a, b) =>
          new Date(b?.expire_date) - new Date(a?.expire_date)
      );
    }

  

    if (sortBy === 'quantityHigh') {
      foods.sort((a, b) => {
        const getQty = q =>
          Number(q?.match(/\d+/)?.[0] || 0);
        return getQty(b?.food_quantity) - getQty(a?.food_quantity);
      });
    }

    return foods;
  }, [data, search, location, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredFoods.length / ITEMS_PER_PAGE);

  const paginatedFoods = filteredFoods.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto py-10">

      {/* 🔍 Search & Sort */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search food name..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Filter by location..."
          value={location === 'all' ? '' : location}
          onChange={e => {
            setLocation(e.target.value || 'all');
            setPage(1);
          }}
          className="border p-2 rounded"
        />

        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="none">No Sorting</option>
          <option value="expireSoon">Expire Soonest</option>
          <option value="expireLate">Expire Latest</option>
          <option value="quantityHigh">Highest Quantity</option>
        </select>
      </div>

      {/* 🍱 Food Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
        {paginatedFoods.length > 0 ? (
          paginatedFoods.map(food => (
            <FoodCard key={food?._id} food={food} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No food found
          </p>
        )}
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                page === i + 1
                  ? 'bg-green-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableFoods;
