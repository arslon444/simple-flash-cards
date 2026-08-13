import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../api/auth'

export default function LoginPage() {
  const [loginValue, setLoginValue] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const token = await login(loginValue, password)
      localStorage.setItem('token', token)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h1>Вход</h1>
      <input type="text" placeholder="Логин" value={loginValue} onChange={(e) => setLoginValue(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
      {error && <p>{error}</p>}
    </div>
  )
}