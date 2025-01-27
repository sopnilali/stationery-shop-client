// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page space-y-5 p-4">
      <h1 className="text-center text-2xl font-bold">About My Stationery Shop</h1>
      <section className='space-y-3'>
        <h2 className="text-xl font-semibold">Our Story</h2>
        <p>
          Welcome to <strong>Stationery Shop</strong>, your trusted destination for quality products and exceptional customer service. Founded with the vision to provide an unparalleled shopping experience, Nahar Shop has grown into a beloved community hub where customers can find a wide range of products that cater to their needs and desires.
        </p>
      </section>
      <section  className='space-y-3'>
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p>
          At Nahar Shop, our mission is simple: <strong>to deliver the best shopping experience possible</strong>. We strive to offer:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Quality Products:</strong> We source only the finest products from trusted suppliers to ensure that you receive the best of the best.</li>
          <li><strong>Exceptional Customer Service:</strong> Our team is dedicated to making your shopping experience seamless and enjoyable. We're here to help with any questions or concerns you may have.</li>
          <li><strong>Community Focus:</strong> We believe in giving back to the community that supports us. That's why we actively participate in local events and initiatives to make a positive impact.</li>
        </ul>
      </section>
      <section className='space-y-2'>
        <h2 className="text-xl font-semibold">Why Choose Nahar Shop?</h2>
        <ul className="list-disc list-inside">
          <li><strong>Diverse Selection:</strong> From everyday essentials to unique finds, Nahar Shop has something for everyone.</li>
          <li><strong>Affordable Prices:</strong> We believe that quality shouldn't come with a hefty price tag. That's why we offer competitive pricing on all our products.</li>
          <li><strong>Convenience:</strong> With our easy-to-navigate online store, you can shop from the comfort of your home and have your purchases delivered right to your doorstep.</li>
        </ul>
      </section>
      <section className='space-y-2'>
        <h2 className="text-xl font-semibold">Our Commitment</h2>
        <p>
          We are committed to sustainability and ethical practices. Nahar Shop takes pride in being an eco-conscious business, and we continually seek ways to reduce our environmental footprint. Our goal is to create a better future for the generations to come.
        </p>
      </section>
      <section className='space-y-3'>
        <h2 className="text-xl font-semibold">Join Us</h2>
        <p>
          Thank you for choosing Nahar Shop. We look forward to serving you and making your shopping experience memorable. Together, let's build a community of happy, satisfied customers.
        </p>
      </section>
    </div>
  );
};

export default About;
