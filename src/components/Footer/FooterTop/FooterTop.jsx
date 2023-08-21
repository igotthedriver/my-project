import React from "react";
import './FooterTop.css'
import FooterLeft from "./FooterLeft/FooterLeft";
import FooterRight from "./FooterRight/FooterRight";

const FooterTop = () => {
    return (
        <div className="FooterTop">
            <FooterLeft/>
            <FooterRight/>
        </div>
    )
}

export default FooterTop;