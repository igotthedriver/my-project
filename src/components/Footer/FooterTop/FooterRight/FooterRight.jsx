import React from "react";
import './FooterRight.css'

const FooterRight = () => {
    return (
        <div className="FooterRight">
            <div className="FooterRightTop">
                <p className="Words">Хотите получить новости и быть в курсе акций?</p>
                <form>
                    <input type='text' className="Searching"></input> 
                </form>
            </div>
            <div className="FooterRightBottom">
                <a href="/page/feedback">Обратная связь</a> 
                <a href="/page/delivery">Доставка</a>
                <a href="/blogs/blog">Статьи</a>
                <a href="/client_account/login">Личный кабинет</a>           
            </div>
        </div>
    )
}

export default FooterRight;