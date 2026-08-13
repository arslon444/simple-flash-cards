import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { register } from '../api/auth'

export default function RegisterPage() {
  const [loginValue, setLoginValue] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const token = await register(loginValue, password)
      localStorage.setItem('token', token)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h1>Регистрация</h1>
      <input type="text" placeholder="Логин" value={loginValue} onChange={(e) => setLoginValue(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Зарегистрироваться</button>
      {error && <p>{error}</p>}
    </div>
  )
}