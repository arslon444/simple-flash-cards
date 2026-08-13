const API_URL = 'http://localhost:8080'

function authHeaders(token) {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export async function getRandomCard(deckId, token) {
  const response = await fetch(`${API_URL}/dashboard/deck/getrandomcard/${deckId}`, {
    headers: authHeaders(token),
  })
  if (!response.ok) throw new Error('Не удалось получить карточку')
  return response.json()
}