import React from "react";
import './Underside.css'

const Underside = () => {
    return (
        <div className="Underside">
            <div className="UndersideLeft"></div>
            <form className="UndersideRight">
                <div className="SideLeft">
                    <p>6 товаров, показать по: </p>
                    <select>
                        <option>12</option>
                        <option>24</option>
                        <option>48</option>
                        <option>96</option>
                    </select>
                </div>
                <div className="SideRight">
                    <p>Сортировать по: </p>
                    <select>
                        <option>По Возрастанию</option>
                        <option>По убыванию цены</option>
                        <option>Сначала новые</option>
                        <option>Сначала старые</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Underside;