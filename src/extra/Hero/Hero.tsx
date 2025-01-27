import { Button } from "antd";
import { Link } from "react-router-dom";

const Hero = () => {
  return (<div className="hero ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://i.postimg.cc/jqcp3yW1/various-colorful-supplies-school-removebg-preview.png"
        className=" rounded"/>
      <div className="mr-6">
        <h1 className="text-5xl my-4 font-bold">Find Exclusive Range of <br></br> Products!</h1>
        <Link to={'/products'}><Button>All Products</Button></Link>
      </div>
    </div>
  </div>
  );
};

export default Hero;
