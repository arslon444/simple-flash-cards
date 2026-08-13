import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCards, createCard, updateCard, deleteCard } from '../api/cards'

export default function CardFormPage() {
  const { deckId, cardId } = useParams()
  const isEdit = Boolean(cardId)
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!isEdit) return
    getCards(deckId, token)
      .then((cards) => {
        const found = cards.find((c) => c.id === cardId)
        if (found) {
          setFront(found.front)
          setBack(found.back)
        }
      })
      .catch((err) => setError(err.message))
  }, [])

  const handleSave = async () => {
    try {
      if (isEdit) {
        await updateCard(cardId, front, back, token)
      } else {
        await createCard(front, back, deckId, token)
      }
      navigate(`/decks/${deckId}/cards`)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Удалить карточку?')) return
    try {
      await deleteCard(cardId, token)
      navigate(`/decks/${deckId}/cards`)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="page">
      <div className="form-page">
        <div className="page-title">{isEdit ? 'Редактировать карточку' : 'Новая карточка'}</div>

        {error && <p className="error-text">{error}</p>}

        <div style={{ marginTop: 24 }}>
          <input
            className="input"
            placeholder="Front"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <input
            className="input"
            placeholder="Back"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            Сохранить
          </button>
          {isEdit && (
            <button className="btn btn-danger" onClick={handleDelete}>
              Удалить
            </button>
          )}
        </div>

        <button
          className="btn btn-ghost"
          style={{ marginTop: 12 }}
          onClick={() => navigate(`/decks/${deckId}/cards`)}
        >
          ← Назад
        </button>
      </div>
    </div>
  )
}
