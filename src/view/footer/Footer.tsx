import "../footer/Footer.css";

export function Icon(props: any) {
  return (
    <a href={props.href}>
      <i className={props.icon}></i>
    </a>
  );
}

export function Footer() {
  return (
    <div data-aos="zoom-in" className="main-footer py-5">
      <div className="col-md-9 col-lg-7 col-xl-6 mx-auto pt-3 p-0">
        <div className="footer-img flex flex-wrap">
          <img className="" src={require("../../asset/main-logo.png")} alt="" />
          <h2 className="col-12 text-center col-sm-8">ROSHAN LESLIE</h2>
        </div>
        <div className="footer-links py-3 my-3">
          <div className="col-6 col-sm-6 p-0 ">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#Work-Process">Work Process</a>
          </div>
          <div className="col-6 col-sm-6 p-0 ">
            <a href="#skill">Skills</a>
            <a className="order-sm-0 order-1" href="#work">
              Project Works
            </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="social-links my-4 ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/roshan-leslie"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a target="" href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a target="_blank" href="mailto: roshanleslie19@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a target="" href="#">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/roshansrl?igsh=MWM3MXpjNWZsbzBteA%3D%3D&utm_source=qr"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <p className="text-center my-3 copy">
          Copyright ©2024 All rights reserved. SMRL 💙 
        </p>
      </div>
    </div>
  );
}
