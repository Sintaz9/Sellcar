import React, { useState } from "react";
import '../style/sellcar-panel.css';

const SellCar = ({ onAddCar }) => {
  const [car, setCar] = useState({
    title: "",
    year: "",
    transmission: "",
    engine: "",
    bodyType: "",
    mileage: "",
    price: "",
    image: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!car.title || !car.price) {
      alert("Название и цена обязательны!");
      return;
    }
    onAddCar(car);
    setCar({
      title: "",
      year: "",
      transmission: "",
      engine: "",
      bodyType: "",
      mileage: "",
      price: "",
      image: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="sell-panel">
      <h2>Заявление на продажу</h2>
      <form className="car-form" onSubmit={handleSubmit}>
        <label>Марка и модель:</label>
        <input type="text" name="title" value={car.title} onChange={handleChange} required />

        <label>Год выпуска:</label>
        <input type="text" name="year" value={car.year} onChange={handleChange} />

        <label>КПП (автомат/механика):</label>
        <input type="text" name="transmission" value={car.transmission} onChange={handleChange} />

        <label>Объем двигателя:</label>
        <input type="text" name="engine" value={car.engine} onChange={handleChange} />

        <label>Тип кузова:</label>
        <input type="text" name="bodyType" value={car.bodyType} onChange={handleChange} />

        <label>Пробег (км):</label>
        <input type="text" name="mileage" value={car.mileage} onChange={handleChange} />

        <label>Цена (BYN):</label>
        <input type="number" name="price" value={car.price} onChange={handleChange} required />

        <label>Ссылка на изображение:</label>
        <input type="text" name="image" value={car.image} onChange={handleChange} />

        <label>Город:</label>
        <input type="text" name="location" value={car.location} onChange={handleChange} />

        <label>Описание:</label>
        <textarea name="description" value={car.description} onChange={handleChange}></textarea>

        <button type="submit" className="submit-button">Добавить авто</button>
      </form>
    </div>
  );
};

export { SellCar };
