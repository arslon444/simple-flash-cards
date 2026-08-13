import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDecks, createDeck, renameDeck, deleteDeck } from '../api/decks'

export default function DashboardPage() {
  const [decks, setDecks] = useState([])
  const [error, setError] = useState('')
  const [menuOpenId, setMenuOpenId] = useState(null)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const loadDecks = () => {
    getDecks(token)
      .then(setDecks)
      .catch((err) => setError(err.message))
  }

  useEffect(() => {
    loadDecks()
  }, [])

  const handleCreateDeck = async () => {
    const name = prompt('Название колоды')
    if (!name) return
    try {
      await createDeck(name, token)
      loadDecks()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleRename = async (deck) => {
    const name = prompt('Новое название', deck.name)
    if (!name) return
    try {
      await renameDeck(deck.id, name, token)
      loadDecks()
    } catch (err) {
      setError(err.message)
    }
    setMenuOpenId(null)
  }

  const handleDelete = async (deck) => {
    if (!confirm(`Удалить колоду "${deck.name}"?`)) return
    try {
      await deleteDeck(deck.id, token)
      loadDecks()
    } catch (err) {
      setError(err.message)
    }
    setMenuOpenId(null)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="page-title">Мои колоды</div>
      </div>

      {error && <p className="error-text">{error}</p>}

      <div className="deck-grid">
        {decks.map((deck) => (
          <div
            key={deck.id}
            className="deck-tile"
            onMouseLeave={() => setMenuOpenId(null)}
          >
            <button
              className="deck-tile-btn"
              onClick={() => navigate(`/decks/${deck.id}`)}
            >
              {deck.name}
            </button>

            <span
              className="deck-menu-trigger"
              onClick={(e) => {
                e.stopPropagation()
                setMenuOpenId(menuOpenId === deck.id ? null : deck.id)
              }}
            >
              ⋮
            </span>

            {menuOpenId === deck.id && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => handleRename(deck)}>
                  Переименовать
                </div>
                <div className="dropdown-item danger" onClick={() => handleDelete(deck)}>
                  Удалить
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="fab" onClick={handleCreateDeck}>+</button>
    </div>
  )
}
