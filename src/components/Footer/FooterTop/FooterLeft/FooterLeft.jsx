import React from "react";
import './FooterLeft.css'

const FooterLeft = () => {
    return (
        <div className="FooterLeft">
            <img src="https://static.insales-cdn.com/assets/1/3309/888045/1668370167/logo_1.png" class="logo-image" alt="Beauty" title="Beauty"></img>
            <p>+ 7 (999) 999-99-99</p>
            <a href="mailto:test@test.ru"><i class="fa fa-envelope-o footer_contact_icon" aria-hidden="true"></i> test@test.ru</a>
        </div>
    )
}

export default FooterLeft;