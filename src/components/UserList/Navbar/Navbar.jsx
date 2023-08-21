import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
                <div className="NavbarTop">
                    <h1>Каталог</h1>
                    <div className="Roster">
                    <span>Парфюмерия</span>
                    <span>Крема</span>
                    <span>Губные помады</span>
                </div>
            </div>
            <form className="NavbarBottom">
                <div id="Parts">
                    <h3>Цена</h3>
                </div>
                <div id="Parts">
                    <h3>Размер</h3>
                </div>
                <div id="Parts">
                    <h3>Пол</h3>
                </div>
                <div id="Parts">
                    <h3>Бренд</h3>
                </div>
                <div id="Parts">
                    <h3>Группы</h3>
                </div>
                <div id="Parts">
                    <h3>Наличие</h3>
                </div>
                <div id="Parts">
                    <h3>Категория</h3>
                </div>
                <div id="Parts">
                    <h3>Для кого</h3>
                </div>
            </form>
            <div className="NavbarImg">
                <img src="https://static.insales-cdn.com/assets/1/3309/888045/1668370167/collection_banner_image.jpg" id="NavbarPicture"></img>
            </div>
        </div>
        )
}

export default Navbar;