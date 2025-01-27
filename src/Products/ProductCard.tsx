
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'

export type TProductCardProps = {
  _id: string;
  name: string;
  price: number;
  category: string;
  productImg: string;
}


const ProductCard: React.FC<TProductCardProps> = ({ _id, name, price, category, productImg }) => {
  return (
    <div key={_id} className="max-w-full border p-2 hover:shadow-md hover:rounded-md duration-500">
      <Link to={`/products/${_id}`}><img src={productImg} alt={name} title={name} /></Link>
      <Link to={`/products/${_id}`}><h3 className='text-lg font-medium'>{name}</h3></Link>
      <p>Price: ৳{price}</p>
      <p>Category: {category}</p>
      <div className='flex justify-stretch'>
        <Link to={`/products/${_id}`}><Button className='mt-4'>View Details</Button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
