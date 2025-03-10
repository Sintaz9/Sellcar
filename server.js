require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

// Подключение к базе данных Railway
const db = mysql.createConnection({
	host: 'turntable.proxy.rlwy.net', // Хост от Railway
	user: 'root', // Пользователь от Railway
	password: 'whZPXqtLovNCPhpltoPHYktYmpVjBFbX', // Пароль от Railway
	database: 'railway', // Имя базы данных на Railway
	port: 39259, // Порт от Railway
})

db.connect(err => {
	if (err) {
		console.error('Ошибка подключения к MySQL:', err)
	} else {
		console.log('Подключено к MySQL на Railway')
	}
})

app.get('/', (req, res) => {
	res.send('Сервер работает!')
})

// Регистрация пользователя
app.post('/register', (req, res) => {
	const { email, password } = req.body

	bcrypt.hash(password, 10, (err, hashedPassword) => {
		if (err) return res.status(500).json({ message: 'Ошибка шифрования' })

		db.query(
			'INSERT INTO users (email, password) VALUES (?, ?)',
			[email, hashedPassword],
			(error, result) => {
				if (error)
					return res.status(500).json({ message: 'Ошибка базы данных' })
				res.json({ message: 'Пользователь зарегистрирован успешно' })
			}
		)
	})
})

// Вход пользователя
app.post('/login', (req, res) => {
	const { email, password } = req.body

	db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
		if (err) return res.status(500).json({ message: 'Ошибка базы данных' })
		if (results.length === 0)
			return res.status(401).json({ message: 'Неверные данные' })

		const user = results[0]
		bcrypt.compare(password, user.password, (err, isMatch) => {
			if (!isMatch) return res.status(401).json({ message: 'Неверные данные' })

			const token = jwt.sign({ id: user.id }, 'секретный_ключ', {
				expiresIn: '1h',
			})
			res.json({ token })
		})
	})
})

// Запуск сервера
const PORT = 5000
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
