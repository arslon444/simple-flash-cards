import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRandomCard, deleteCard } from '../api/cards'

export default function DeckPage() {
  const { deckId } = useParams()
  const [card, setCard] = useState(null)
  const [showBack, setShowBack] = useState(false)
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const loadCard = () => {
    setShowBack(false)
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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <button onClick={() => navigate(`/decks/${deckId}/cards`)}>Edit</button>

      <h2>{error}</h2>

      {card ? (
        <div
          onClick={() => setShowBack(!showBack)}
          style={{ border: '1px solid gray', padding: 20, width: 300, cursor: 'pointer', marginTop: 20 }}
        >
          {showBack ? card.back : card.front}
        </div>
      ) : (
        <p>Нет карточек</p>
      )}

      <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <span onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: 'pointer', fontSize: 24 }}>⋮</span>
        {menuOpen && (
          <div style={{ position: 'absolute', bottom: 30, right: 0, border: '1px solid gray', background: '#222', padding: 4 }}>
            <div onClick={handleDeleteCurrent} style={{ cursor: 'pointer' }}>удалить</div>
            <div onClick={() => navigate(`/decks/${deckId}/cards/new`)} style={{ cursor: 'pointer' }}>добавить</div>
          </div>
        )}
      </div>
    </div>
  )
}