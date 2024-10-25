import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <p className="text-3xl font-bold">Evergreen Estate Ltd.</p>
        <p>
          A contemporary theme we designed specifically for real estate and
          property showcase websites, equipped with every option, element and
          feature your site may need.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Contact us</h6>
        <a className="link link-hover">
          Extensitonn Pallabi, Mirpur, Dhaka, Bangladesh
        </a>
        <a className="link link-hover">+880 1625693202</a>
        <a className="link link-hover">+880 1933028624</a>
        <a className="link link-hover">evergreenestate@gmail.com</a>
      </nav>
      <nav>
        <h6 className="footer-title">Categories</h6>
        <a className="link link-hover">Recent property</a>
        <a className="link link-hover">To Sell</a>
        <a className="link link-hover">To Buy</a>
        <a className="link link-hover">To Rent</a>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        <a className="link link-hover">FAQ Page</a>
        <a className="link link-hover">Brand Assets</a>
      </nav>
    </footer>
  );
};

export default Footer;
