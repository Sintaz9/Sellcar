// All This mess was made by Vladislav. Enjoy ;)

// стили
import '../style/style.css'

// для 3Д-моделей
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import React, {Suspense, useState} from 'react';
import Iphone from './Iphone'

// для тестов
import Counter from './additional requirements/Counter';

// для кастомных хуков
import {useKeyPress} from './additional requirements/Custom-hooks'

// работа с ref
import CustomTextInput from './additional requirements/CustomTextInput'

//панель с фильтрами
import Panel from './panel.jsx'

//каталог машин
import ListingItem from './catalog.jsx'

// ф-ия для кастомного хука (записвыет значения выбранного автомобиля в перемнную new_car)
function CarChoiceFunc(param) {
  let new_car = param;
  console.log("Client's car is " + new_car)
} 

const Mainpage = () => {

   
    // объекты кастомного хука, которые передают ему значения клавиш, для которых нужно сделать обработку
    const supraKey = useKeyPress('s')
    const impalaKey = useKeyPress('i')
    const chargerKey = useKeyPress('c')
    const bugattiKey = useKeyPress('b')
    const astonKey = useKeyPress('a')
    const deloreanKey = useKeyPress('d')
    const nftKey = useKeyPress('t')
    const e30Key = useKeyPress('e')
    const nissanGTRKey = useKeyPress('n')

    // переменная для заголовка выбранного автомобиля через зажатую клавишу
    const customHeader = 'Вы выбрали: ';
    

    return (
        <div className="html-block">
            <header className="main-header">
        <iframe id="myIframe" src='https://my.spline.design/untitled-af13d19296022e05c327f5ca46bd332b/' frameBorder='0'></iframe>
        <h1 className="header-h1"><span className="header-span">TradeCenter</span><br />Обладай<br />Мечтой</h1>
      </header>
    {/*Панель с фильтрами над каталогом*/}
      <Panel/>

    <div className='catalog_car'>
      <ListingItem/>
      <ListingItem/>
      <ListingItem/>
    </div>
    
    <div className="contacts">

      {/* 3D-модель IPhone */}
         <Canvas className="canvas-container">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Iphone />
          </Suspense>
        </Canvas>


      <form data-aos="fade-right" data-aos-duration="300">
        <h1 data-aos="fade-right" data-aos-duration="350">Оставить заявку на покупку автомобиля</h1>
        {/* два автозаполняемых input с именем и почтой (работа с ref) */}
        <CustomTextInput></CustomTextInput>
        <select data-aos="fade-right" data-aos-duration="500" required>
          <option>Выберите автомобиль или его 1-ю букву</option>
          <option>Toyota Supra (s)</option>
          <option>Chevrolet Impala 1967 supernatural (i)</option>
          <option>Dodge Charger (c)</option>
          <option>Bugatti Chiron 2016 (b)</option>
          <option>Aston Martin (a)</option>
          <option>Back To The Future DeLorean (d)</option>
          <option>BMW NFT (t)</option>
          <option>BMW NFS (f)</option>
          <option>Nissan GTR R35 NISMO (n)</option>
        </select>

        <Counter className="conter-component" initialCount={0}/>

      {/* кастомный хук */}
      <div className="customHooks">
         {/* если supraKey (s) - true (если наш кастомный хук возваращет, что наша клавиша (s) зажата), то выводим customHeader */}
         {(supraKey || impalaKey || chargerKey
          || bugattiKey || astonKey || deloreanKey
          || nftKey || e30Key || nissanGTRKey) && customHeader}

        {/* соответственно и для ф-ии CarChoiceFunc (она записывает выбранный авто-ль в перем-ю) и текста Toyota Supra */}
        {supraKey && CarChoiceFunc('Toyota Supra')}
        {supraKey && 'Toyota Supra'}

        {impalaKey && CarChoiceFunc('Chevrolet Impala 1967 supernatural')}
        {impalaKey && 'Chevrolet Impala 1967 supernatural' }

        {chargerKey && CarChoiceFunc('Dodge Charger')}
        {chargerKey && 'Dodge Charger'}

        {bugattiKey && CarChoiceFunc('Bugatti Chiron 2016')}
        {bugattiKey && 'Bugatti Chiron 2016'}

        {astonKey && CarChoiceFunc('Aston Martin')}
        {astonKey && 'Aston Martin'}

        {deloreanKey && CarChoiceFunc('Back To The Future DeLorean')}
        {deloreanKey && 'Back To The Future DeLorean'}

        {nftKey && CarChoiceFunc('BMW NFT')}
        {nftKey && 'BMW NFT'}

        {e30Key && CarChoiceFunc('Dodge Charger')}
        {e30Key && 'BMW NFS'}

        {nissanGTRKey && CarChoiceFunc('Nissan GTR R35 NISMO')}
        {nissanGTRKey && 'Nissan GTR R35 NISMO'}
      </div>
          
      
        <div className="div4submit">
          <input data-aos="fade-right" data-aos-duration="550" type="submit" value='Отправить заявку' />
        </div>
      </form>
      {/* Counter - ф-ия для которой прописаны тесты */}
      
      {/* <Car name="Vladik" /> */}
    </div>
   
    </div>
    )
}

export {Mainpage}