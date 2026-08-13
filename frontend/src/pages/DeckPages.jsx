import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getRandomCard } from '../api/cards'

export default function DeckPage() {
  const { deckId } = useParams()
  const [card, setCard] = useState(null)
  const [error, setError] = useState('')
  const token = localStorage.getItem('token')

  const handleGetCard = async () => {
    try {
      const result = await getRandomCard(deckId, token)
      setCard(result)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <button onClick={handleGetCard}>Колода</button>
      {error && <p>{error}</p>}
      {card && (
        <div>
          <p>Front: {card.front}</p>
          <p>Back: {card.back}</p>
        </div>
      )}
    </div>
  )
}