import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
      <h1>Добро пожаловать</h1>
      <Link to="/login"><button>Войти</button></Link>
      <Link to="/register"><button>Зарегистрироваться</button></Link>
    </div>
  )
}