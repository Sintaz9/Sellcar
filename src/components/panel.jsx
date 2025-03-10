import React from "react";

import '../style/panel.css'//для панели с фильтрами над каталогом

const Panel = () =>{
    return (
<div className="container">
            <div className="filter-item">
                <select className="select-brand" name="brand" defaultValue="0">
                    <option value="0">Все марки</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Chery">Chery</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Citroen">Citroen</option>
                    <option value="FAW">FAW</option>
                    <option value="Ford">Ford</option>
                    <option value="GMC">GMC</option>
                    <option value="Geely">Geely</option>
                    <option value="Haval">Haval</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="JAC">JAC</option>
                    <option value="Kia">Kia</option>
                    <option value="LADA">LADA</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Opel">Opel</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Skoda">Skoda</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Volvo">Volvo</option>
                </select>
            </div>
            <div className="filter-item">
                <select className="select-fuel" name="fuel" defaultValue="0">
                    <option disabled value="0">Двигатель</option>
                    <option value="0">Любой</option>
                    <option value="gasoline">Бензин</option>
                    <option value="diesel">Дизель</option>
                    <option value="electric">Электро</option>
                </select>
            </div>
            <div className="filter-item double-select">
                <span>Год выпуска:</span>
                <select className="select-car_year" name="car_year_from" defaultValue="0">
                    <option value="0">от</option>
                    <option value="2003">2003</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2011">2011</option>
                    <option value="2012" disabled>2012</option>
                    <option value="2013" disabled>2013</option>
                    <option value="2014" disabled>2014</option>
                    <option value="2015" disabled>2015</option>
                    <option value="2016" disabled>2016</option>
                    <option value="2017" disabled>2017</option>
                    <option value="2018" disabled>2018</option>
                    <option value="2019" disabled>2019</option>
                    <option value="2020" disabled>2020</option>
                    <option value="2021" disabled>2021</option>
                    <option value="2022" disabled>2022</option>
                    <option value="2023" disabled>2023</option>
                </select>
                <select className="select-car_year" name="car_year_to" defaultValue="0">
                    <option value="0" disabled>до</option>
                    <option value="2003" disabled>2003</option>
                    <option value="2007" disabled>2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <div className="filter-item double-input">
                <span>Цена, р.:</span>
                <input type="number" min="0" max="9999999" placeholder="от" name="min_price" />
                <input type="number" min="0" max="9999999" placeholder="до" name="max_price" />
            </div>
            <div className="search">
                <a action="search">
                    Показать <span>1</span> авто
                </a>
            </div>
    </div>
    );
};

export default Panel;