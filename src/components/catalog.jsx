import React from 'react';
import '../style/ListingItem.css'; // Импортируем стили

const ListingItem = () =>{
  return (
    <div className="listing-item listing-item--color listing-item--top">
      <div className="listing-item__wrap">
        <div className="listing-item__photo">
          <div className="carousel">
            <div className="carousel__content">
              <div className="carousel__list">
                <div className="carousel__item">
                  <div className="carousel__wrapper">
                    <img
                      alt="Peugeot 308 T9 · Рестайлинг, 2019 г."
                      className="lazyloaded"
                      data-src="https://avcdn.av.by/advertpreview/0004/8890/7338.jpg"
                      data-srcset="https://avcdn.av.by/advertmedium/0004/8890/7337.jpg 2x"
                      src="https://avcdn.av.by/advertpreview/0004/8890/7338.jpg"
                      srcSet="https://avcdn.av.by/advertmedium/0004/8890/7337.jpg 2x"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listing-item__about">
            <div className='first-block'>
          <h3 className="listing-item__title">
            <a className="listing-item__link" href="/peugeot/308/108824935">
              <span className="link-text">Peugeot 308 T9 · Рестайлинг</span>
            </a>
          </h3>
          <div className="listing-item__badges">
            <div className="badge badge--top">
              <div className="badge__label" role="button">Топ</div>
              <div className="badge__popover">
                <div className="badge__title">Объявление в ТОПе</div>
                <div className="badge__description">Поднялось выше остальных и собирает больше просмотров</div>
                <div className="badge__action">
                  <a className="button button--warning" href="https://av.by/pages/promo" target="_blank" rel="noopener noreferrer">Способы ускорения продажи</a>
                </div>
              </div>
            </div>
            <div className="badge badge--secondary">VIN</div>
          </div>
          </div>
          <div className="listing-item__params">
            <div>2019 г.</div>
            <div>автомат, 1,2 л, бензин, хэтчбек 5 дв.</div>
            <div><span>171 000 км</span></div>
          </div>
          <div className="listing-item__prices">
            <div className="listing-item__price">39 081 р.</div>
            <div className="listing-item__priceusd">≈ 12 200 $</div>
            <div className="listing-item__finance">
              <a rel="nofollow" href="/peugeot/308/108824935?openDrawer=productsList">Лизинг, кредит от ≈ 103 USD в месяц</a>
            </div>
          </div>







           
          <div className="listing-item__controls">
            <button className="card__actions-item" title="Добавить в закладки" type="button">
              <svg aria-hidden="true" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                <path className="bookmark-stroke" d="M16.3362 5.25H7.66433C6.95239 5.25 6.37524 5.82715 6.37524 6.53909V18.675C6.37524 18.6826 6.38389 18.6869 6.38996 18.6824L11.89 14.5746C11.9554 14.5258 12.0451 14.5258 12.1104 14.5746L17.6105 18.6824C17.6166 18.6869 17.6252 18.6826 17.6252 18.675V6.53909C17.6252 5.82714 17.0481 5.25 16.3362 5.25Z" strokeWidth="2.20987"></path>
              </svg>
            </button>
          </div>
          <div className="listing-item__message">
            <div>Peugeot 308 ALLURE. Хорошее состояние. АКПП AISIN 8 ступ., Full Led фары, полукожа, бесключевой доступ, 2 ключа, старт-стоп, камера заднего вида. Заменён ГРМ, и масло. Новая зимняя резина. Летняя в подарок. Машина продается с полным переоформлением в ГАИ. Каждый день на ходу.</div>
          </div>
          <div className="listing-item__info">
            <div className="listing-item__location">Барановичи</div>
            <div className="listing-item__date">25 минут назад</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
