import React from "react";
import './Footer.css'
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";


const Footer = () => {
    return (
        <div className="Footer">
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}

export default Footer;