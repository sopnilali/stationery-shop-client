import { Button } from "antd";

const Hero = () => {
  return (
    <div> <div className="hero ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://i.ibb.co.com/w0P2NnX/Stack-books.webp"
        className=" rounded-lg " />
      <div className="mr-6 space-y-6">
        <h1 className="text-5xl font-bold">Find Exclusive Range of <br></br> Books!</h1>
        <Button htmlType="button">All Products</Button>
      </div>
    </div>
  </div></div>
  );
};

export default Hero;
