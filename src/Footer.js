import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, HomeOutlined, MailOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    
    <div className="container my-5">
        <iframe style={{width:'100%'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.943169338787!2d103.8860118!3d1.3347209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178de6695555%3A0xbad34133d0c0559b!2sRES%20Engineering%20Services!5e0!3m2!1sen!2s!4v1706300637626!5m2!1sen!2s" >
        
        </iframe>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >

        {/* Social Media Section*/}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
            {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          {/* Right  */}
          <div>
            <a href="#!" className="text-white me-4">
                <FacebookOutlined />
            </a>
            <a href="#!" className="text-white me-4">
                <InstagramOutlined />
            </a>
            <a href="#!" className="text-white me-4">
                <YoutubeOutlined />
            </a>
          </div>
        </section>
        
        {/* Links Section  */}
        <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div className="row mt-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 className="text-uppercase fw-bold">Swat E Mart</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                  />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}
  
            {/* <!-- Grid column --> */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                  />
              <p>
                <a href="#!" className="text-white">MDBootstrap</a>
              </p>
              <p>
                <a href="#!" className="text-white">MDWordPress</a>
              </p>
              <p>
                <a href="#!" className="text-white">BrandFlow</a>
              </p>
              <p>
                <a href="#!" className="text-white">Bootstrap Angular</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}
  
            {/* <!-- Grid column --> */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                  />
              <p>
                <a href="#!" className="text-white">Your Account</a>
              </p>
              <p>
                <a href="#!" className="text-white">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!" className="text-white">Shipping Rates</a>
              </p>
              <p>
                <a href="#!" className="text-white">Help</a>
              </p>
            </div>
            {/* <!-- Grid column --> */}
  
            {/* <!-- Grid column --> */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* <!-- Links --> */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
                  />
              <p><HomeOutlined />  New York, NY 10012, US</p>
              <p><MailOutlined />   info@example.com</p>
              <p><PhoneOutlined />  +0123456788</p>
              <p><WhatsAppOutlined />  +0123456789</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
      </section>
      {/* <!-- Section: Links  --> */}
  

      {/* <!-- Copyright --> */}
      <div
           className="text-center p-3"
           style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
           >
        © 2024 Copyright:
        <a className="text-white" href="#!">swatemart.com</a>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
