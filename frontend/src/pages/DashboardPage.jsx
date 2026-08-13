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
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Мои колоды</h1>
      {error && <p>{error}</p>}

      <div>
        {decks.map((deck) => (
          <div
            key={deck.id}
            style={{ position: 'relative', display: 'inline-block', margin: 8 }}
            onMouseEnter={() => setMenuOpenId(deck.id)}
            onMouseLeave={() => setMenuOpenId(null)}
          >
            <button onClick={() => navigate(`/decks/${deck.id}`)}>
              {deck.name}
            </button>

            <span style={{ position: 'absolute', top: 0, right: -20 }}>⋮</span>

            {menuOpenId === deck.id && (
              <div style={{ position: 'absolute', top: 20, right: -20, border: '1px solid gray', background: '#222', padding: 4, zIndex: 10 }}>
                <div onClick={() => handleRename(deck)} style={{ cursor: 'pointer' }}>Rename</div>
                <div onClick={() => handleDelete(deck)} style={{ cursor: 'pointer' }}>Delete</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleCreateDeck}
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