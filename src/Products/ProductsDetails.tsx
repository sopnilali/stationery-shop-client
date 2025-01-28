import { addToCart } from '@/Redux/features/cart/cartSlice';
import { useGetSingleProductsQuery } from '@/Redux/features/products/productsApi';
import { useAppDispatch } from '@/Redux/hooks';
import { Button } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

interface ProductProps {
  name?: string;
  brand?: string;
  price?: number;
  category?: string;
  description?: string;
  productImg?: string;
  args?: string; // Added args prop
}

const ProductDetails: React.FC<ProductProps> = () => {

    const params = useParams();

  const { data: singleData, error, isLoading } = useGetSingleProductsQuery(params.productId);

  if (isLoading) return <div className='text-center'>Loading</div>
  
  if (error) return <div>Error loading product details</div>;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product: singleData?.data?._id,
        name: singleData?.data?.name,
        price: singleData?.data?.price,
        quantity: 1,
        stock: singleData?.data?.stock,
        productImg: singleData?.data?.productImg as string,
      })
    );
  };

  return (
    <div className="bg-white shadow-md p-6">
      <div className="flex">
        <img src={singleData?.data?.productImg} alt={singleData?.data?.name} className="w-48 h-64 object-cover mr-6" />
        <div>
          <h2 className="text-xl font-bold mb-2">{singleData?.data?.name}</h2>
          <p className="text-gray-600  mb-2">Brand: {singleData?.data?.brand}</p>
          <p className=" font-semibold mb-2">
            Price: ৳{singleData?.data?.price}
          </p>
          <p className="text-gray-600 mb-2">Category: {singleData?.data?.category}</p>
          <Button onClick={() => handleAddToCart()} className=" font-semibold py-2 px-4 rounded">
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h2 className="text-lg  font-semibold ">Description</h2>
        <hr />
        <p className="text-gray-700 ">{singleData?.data?.description}</p>
      </div>


    </div>
  );
};

export default ProductDetails;
