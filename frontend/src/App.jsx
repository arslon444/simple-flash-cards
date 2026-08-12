import { useState } from 'react'

function App() {
  const [page, setPage] = useState('main')

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const API_URL = 'http://localhost:8080'

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      })

      if (!response.ok) {
        const errData = await response.json()
        setError(errData.message || 'Ошибка входа')
        return
      }

      const token = await response.text()
      localStorage.setItem('token', token)

      console.log('Успешный вход')
    } catch (err) {
      setError('Не удалось подключиться к серверу')
    }
  }

  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      })

      if (!response.ok) {
        const errData = await response.json()
        setError(errData.message || 'Ошибка регистрации')
        return
      }

      const token = await response.text()
      localStorage.setItem('token', token)

      console.log('Успешная регистрация')
    } catch (err) {
      setError('Не удалось подключиться к серверу')
    }
  }

  // Главная страница
  if (page === 'main') {
    return (
      <div>
        <h1>Добро пожаловать</h1>

        <button onClick={() => setPage('login')}>
          Войти
        </button>

        <button onClick={() => setPage('register')}>
          Зарегистрироваться
        </button>
      </div>
    )
  }

  // Страница входа
  if (page === 'login') {
    return (
      <div>
        <h1>Вход</h1>

        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Войти
        </button>

        <button onClick={() => setPage('main')}>
          Назад
        </button>

        {error && <p>{error}</p>}
      </div>
    )
  }

  // Страница регистрации
  if (page === 'register') {
    return (
      <div>
        <h1>Регистрация</h1>

        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Зарегистрироваться
        </button>

        <button onClick={() => setPage('main')}>
          Назад
        </button>

        {error && <p>{error}</p>}
      </div>
    )
  }
}

export default App