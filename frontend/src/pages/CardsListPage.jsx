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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Карточки</h1>
      {error && <p>{error}</p>}

      {cards.map((c) => (
        <div
          key={c.id}
          onClick={() => navigate(`/decks/${deckId}/cards/${c.id}`)}
          style={{ border: '1px solid gray', padding: 10, margin: '8px 0', cursor: 'pointer' }}
        >
          {c.front}
        </div>
      ))}

      <button
        onClick={() => navigate(`/decks/${deckId}/cards/new`)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: '50%',
          width: 50,
          height: 50,
          fontSize: 24,
        }}
      >
        +
      </button>
    </div>
  )
}