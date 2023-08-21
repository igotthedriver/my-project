import React from "react";
import Header from './Header/Header'
import Container from "./Container/Container";
import './TopSide.css'
import Underside from "./Underside/Underside";

const TopSide = () => {
    return( 
        <div className="TopSide">
            <Header/>
            <Container/> 
            <Underside/>
    </div>
    )

}

export default TopSide;