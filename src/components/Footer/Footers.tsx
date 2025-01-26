
import { Button, Input, Layout } from 'antd';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

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
        <footer className="footer  text-base-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="email"
                  placeholder="username@site.com"
                  className="input input-bordered join-item" />
                <Button className=" btn-block  join-item">Subscribe</Button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="  border-t text-base-content pt-4">
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
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
