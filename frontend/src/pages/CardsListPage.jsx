import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCards } from '../api/cards'

export default function CardsListPage() {
  const { deckId } = useParams()
  const [cards, setCards] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    getCards(deckId, token)
      .then(setCards)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Карточки</div>
        <button className="btn btn-ghost" onClick={() => navigate(`/decks/${deckId}`)}>
          ← Назад к колоде
        </button>
      </div>

      {error && <p className="error-text">{error}</p>}

      {cards.map((c) => (
        <div
          key={c.id}
          className="card-row"
          onClick={() => navigate(`/decks/${deckId}/cards/${c.id}`)}
        >
          <span className="card-row-text">{c.front}</span>
        </div>
      ))}

      {cards.length === 0 && !error && <p className="empty-state">Карточек пока нет</p>}

      <button className="fab" onClick={() => navigate(`/decks/${deckId}/cards/new`)}>
        +
      </button>
    </div>
  )
}
