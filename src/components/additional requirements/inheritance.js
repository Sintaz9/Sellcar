import React from "react";
class Car extends React.Component {
    render() {
      return (
      <div>
      <h1 className="car-header">Header</h1>
      <p>
        the first p
      </p>
      <p>
        the second p
      </p>
      </div>
      )
    }
  }

  class Toyota extends Car {
    render() {
        return (
            <div>
            <h1 className="car-header">Toyota Supra Fast and Furious Edition</h1>
            <p>
              Свои корни модель берет с конца 1990-х, однако именно
              эта легендарная модель является рестайлингом 2000 лет.
            </p>
            <p>
              Впервые появилась на экранах телевидения в 2003 году 
              в небезызвестном фильме Форсаж, где отыгрывала роль
              гоночного автомобиля. Она оснащена турбо и внешним
              тюнингом. Находится в хорошем состоянии и ждет своего
              нового владельца.
            </p>
            </div>
        );
    }
  }
  export default Toyota;