
import { Button, Input, Layout } from 'antd';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const { Footer } = Layout;

const Footers = () => {
  return (
    <>

      <Footer style={{ textAlign: 'center' }}>
        {/* <div className='flex justify-between '>
       <div>
        Ant Design ©{new Date().getFullYear()} Created by Md Abdul Adud
        </div>
        <div>
        Social Icon
        </div>
        <div>
        Contact Details
        </div>
       </div> */}
        <footer className="footer max-w-7xl flex justify-between flex-col md:flex-row text-base-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link to={'/products'} className="link link-hover">All Products</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <Link to={'/about'} className="link link-hover">About us</Link>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control max-w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join gap-1 md:gap-0">
                <Input
                  type="email"
                  placeholder="username@site.com"
                  className=" input-bordered md:join-item" />
                <Button className=" md:join-item">Subscribe</Button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="  border-t text-base-content pt-4">
          <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Stationery Shop</p>
            <div className='flex gap-5 items-center text-2xl'>
              <FaFacebook /> <FaLinkedin /> <FaTwitter />
            </div>
          </div>
        </footer>
      </Footer>

    </>
  );
};

export default Footers;
