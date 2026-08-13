import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRandomCard, deleteCard } from '../api/cards'

export default function DeckPage() {
  const { deckId } = useParams()
  const [card, setCard] = useState(null)
  const [flipped, setFlipped] = useState(false)
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const loadCard = () => {
    setFlipped(false)
    getRandomCard(deckId, token)
      .then(setCard)
      .catch((err) => setError(err.message))
  }

  useEffect(() => {
    loadCard()
  }, [])

  const handleDeleteCurrent = async () => {
    if (!card) return
    if (!confirm('Удалить эту карточку?')) return
    try {
      await deleteCard(card.id, token)
      loadCard()
    } catch (err) {
      setError(err.message)
    }
    setMenuOpen(false)
  }

  return (
    <div className="study-page">
      <button
        className="btn btn-ghost study-top-left"
        onClick={() => navigate(`/decks/${deckId}/cards`)}
      >
        Edit
      </button>

      {error && <p className="error-text">{error}</p>}

      {card ? (
        <>
          <div className="flip-card" onClick={() => setFlipped(!flipped)}>
            <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
              <div className="flip-card-face">{card.front}</div>
              <div className="flip-card-face flip-card-back">{card.back}</div>
            </div>
          </div>
          <button className="btn btn-primary next-card-btn" onClick={loadCard}>
            Следующая карта →
          </button>
        </>
      ) : (
        <p className="empty-state">В этой колоде пока нет карточек</p>
      )}

      <div className="study-footer">
        <button className="btn btn-outline" onClick={() => navigate('/dashboard')}>
          Назад
        </button>
      </div>

      <div className="study-corner-menu">
        <span
          className="deck-menu-trigger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: 24 }}
        >
          ⋮
        </span>
        {menuOpen && (
          <div className="dropdown-menu" style={{ top: 'auto', bottom: 34, right: 0 }}>
            <div className="dropdown-item danger" onClick={handleDeleteCurrent}>
              Удалить
            </div>
            <div
              className="dropdown-item"
              onClick={() => navigate(`/decks/${deckId}/cards/new`)}
            >
              Добавить
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
