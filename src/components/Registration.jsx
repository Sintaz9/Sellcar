import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import avatar from '../img/png_ikonka.png'
import '../style/Registration.css' // Подключаем стили

function Registration() {
	const [isLoginOpen, setIsLoginOpen] = useState(false)
	const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [registerEmail, setRegisterEmail] = useState('')
	const [registerPassword, setRegisterPassword] = useState('')
	const [message, setMessage] = useState('')
	const [user, setUser] = useState(null) // Хранение данных пользователя

	// Используем ref для отслеживания кликов вне окон
	const loginRef = useRef(null)
	const registerRef = useRef(null)

	// Функция открытия-закрытия окна входа
	const toggleLoginMenu = () => {
		setIsLoginOpen(prev => !prev)
		setIsRegistrationOpen(false)
	}

	// Функция открытия-закрытия окна регистрации
	const toggleRegistrationMenu = () => {
		setIsRegistrationOpen(prev => !prev)
		setIsLoginOpen(false)
	}

	// Функция обработки регистрации
	const handleRegister = async () => {
		try {
			const response = await axios.post('http://localhost:5000/register', {
				email: registerEmail,
				password: registerPassword,
			})
			setMessage(response.data.message)
			setIsRegistrationOpen(false) // Закрываем окно при успешной регистрации

			// Убираем сообщение через 15 секунд
			setTimeout(() => setMessage(''), 15000)
		} catch (error) {
			setMessage('Ошибка регистрации. Попробуйте снова.')

			// Убираем сообщение через 15 секунд
			setTimeout(() => setMessage(''), 15000)
		}
	}

	// Функция обработки входа
	const handleLogin = async () => {
		try {
			const response = await axios.post('http://localhost:5000/login', {
				email: loginEmail,
				password: loginPassword,
			})
			localStorage.setItem('token', response.data.token)
			setUser({ email: loginEmail }) // Устанавливаем пользователя
			setIsLoginOpen(false) // Закрываем окно при успешном входе

			// Убираем сообщение через 15 секунд
			setTimeout(() => setMessage(''), 15000)
		} catch (error) {
			setMessage('Ошибка входа. Проверьте данные.')

			// Убираем сообщение через 15 секунд
			setTimeout(() => setMessage(''), 15000)
		}
	}

	// Функция выхода
	const handleLogout = () => {
		localStorage.removeItem('token')
		setUser(null)
	}
	//Закрыть шторку
	const closeMenus = () => {
		setIsLoginOpen(false)
		setIsRegistrationOpen(false)
	  }

	// Обработчик клика вне окон
	useEffect(() => {
		const handleClickOutside = event => {
			if (
				loginRef.current &&
				!loginRef.current.contains(event.target) &&
				registerRef.current &&
				!registerRef.current.contains(event.target)
			) {
				setIsLoginOpen(false)
				setIsRegistrationOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<div className='registration-container'>
			{user ? (
				<div className='profile-container'>
					<img src={avatar} alt='Avatar' className='profile-avatar' />
					<span className='profile-name'>{user.email.split('@')[0]}</span>
					<button className='logout-button' onClick={handleLogout}>
						Выйти
					</button>
				</div>
			) : (
				<>
					<button className='menu-button' onClick={toggleLoginMenu}>
						Вход |
					</button>
					<button className='menu-button' onClick={toggleRegistrationMenu}>
						Регистрация
					</button>
				</>
			)}

			{/* Окно входа */}
			<div ref={loginRef} className={`side-panel ${isLoginOpen ? 'open' : ''}`}>
		  <button className='close-button' onClick={closeMenus}>×</button>
		  <button className='arrow-button rotate' onClick={closeMenus}>→</button>
				<input
					type='text'
					placeholder='Email'
					value={loginEmail}
					onChange={e => setLoginEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={loginPassword}
					onChange={e => setLoginPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Войти</button>
			</div>

			{/* Окно регистрации */}
			<div ref={registerRef} className={`side-panel ${isRegistrationOpen ? 'open' : ''}`}>
		  <button className='close-button' onClick={closeMenus}>×</button>
		  <button className='arrow-button rotate' onClick={closeMenus}>→</button>
				<input
					type='text'
					placeholder='Email'
					value={registerEmail}
					onChange={e => setRegisterEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={registerPassword}
					onChange={e => setRegisterPassword(e.target.value)}
				/>
				<button onClick={handleRegister}>Зарегистрироваться</button>
			</div>

			{/* Сообщение об ошибке или успехе */}
			{message && <div className='message'>{message}</div>}
		</div>
	)
}

export default Registration
