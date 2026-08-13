import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className="auth-page">
      <div className="auth-tagline">Flashcards</div>
      <h1 className="auth-title">Учись эффективно</h1>

      <div className="auth-actions">
        <Link to="/login">
          <button className="btn btn-primary btn-block">Войти</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-outline btn-block">Зарегистрироваться</button>
        </Link>
      </div>
    </div>
  )
}
