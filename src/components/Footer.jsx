import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary text-primary font-semibold">
      <footer className="py-3 w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between gap-2">
        <div>
          <p className="my-auto">&copy;2023 My Next Film PVT LTD</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/agreement/">Agreement</a>
          <a href="/tnc_base/">Terms & Conditions</a>
          <a href="/PrivacyPolicy_base/" target="_blank">
            Privacy Policy
          </a>
          <a href="/Refunds_base/" target="_blank">
            Refund & Cancellation Policy
          </a>
          <a href="/NDA_base/" target="_blank">
            N.D.A
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
