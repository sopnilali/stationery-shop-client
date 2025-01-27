// components/AllProducts.tsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useGetAllProductsQuery } from '@/Redux/features/products/productsApi';
import { Button, Input } from 'antd';

const AllProducts: React.FC = () => {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('');
  const [availability, setAvailability] = useState('');

  // Use the useGetAllProductsQuery hook with query parameters
  const { data: productsData, isLoading, isError } = useGetAllProductsQuery({
    name: search,
    minPrice,
    maxPrice,
    category,
    stock: availability,
  });

  // Event handlers for input fields
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => setMaxPrice(e.target.value);
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value);
  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => setAvailability(e.target.value);

  // Render loading or error messages if necessary
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Failed to fetch products</p>;
  }

  return (
    <div className="all-products-page space-y-5 p-4">
    <h1 className="text-center text-2xl font-bold">Filter Products</h1>
    <div className="flex flex-col md:flex-col lg:flex-row gap-2 ">
      <Input
        type="text"
        placeholder="Search by title, author, or category"
        value={search}
        onChange={handleSearchChange}
        className="flex-grow min-w-[150px]"
      />
      <Input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={handleMinPriceChange}
        className="flex-grow min-w-[150px]"
      />
      <Input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="flex-grow min-w-[150px]"
      />
      <Input
        type="text"
        placeholder="Category"
        value={category}
        onChange={handleCategoryChange}
        className="flex-grow min-w-[150px]"
      />
      <Input
        type="text"
        placeholder="Availability"
        value={availability}
        onChange={handleAvailabilityChange}
        className="flex-grow min-w-[150px]"
      />
      <Button
        htmlType="submit"
        onClick={() =>
          useGetAllProductsQuery({ search, minPrice, maxPrice, category, stock: availability })
        }
        className="flex-grow min-w-[150px]"
      >
        Apply Filters
      </Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 justify-center ">
      {productsData?.data.map((product: any) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  </div>
  );
};

export default AllProducts;