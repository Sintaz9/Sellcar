import { useState, useEffect } from 'react'

// кастомный хук useKeyPress, который принимает параметр targer - зажатая клавиша 
export function useKeyPress(target) {
  const [keyPressed, setKeyPressed] = useState(false)

  // ф-ия которая возвращает в хук значение true - означает что клавиша нажата
  const onDown = ({ key }) => {
    if (key === target) {
      setKeyPressed(true)
    }
  }

  // ф-ия которая возвращает в хук значение false - означает что клавиша отжата
  const onUp = ({ key }) => {
    if (key === target) {
      setKeyPressed(false)
    }
  }

  // блок, который добавляет/убирает события keydown и keyup для нашей ф-ии
  useEffect(() => {
    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)

    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  // eslint-disable-next-line
  }, [])

  // возвращает true или false, означающий нажата или отжата наша клавиша
  return keyPressed
}



















// С помощью useIdle можно отслеживать, находится ли пользователь на странице в режиме ожидания. 
// Можете передать два параметра: ms – время ожидания и initialState, который позволяет пользователю изначально установить режим ожидания.

// import {useTitle} from 'react-use';
// import {useIdle} from 'react-use';
// const Demo = () => {
//   const isIdle = useIdle(3e3);
// return (
//     <div>
//       <div>User is idle: {isIdle ? 'Yes' : 'Nope'}</div>
//     </div>
//   );
// };
// export {Demo}

// const Demo2 = () => {  useTitle('Hello world!');return null;};
// export {Demo2}