const API_URL = 'http://localhost:8080'

function authHeaders(token) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

export async function getRandomCard(deckId, token) {
  const response = await fetch(`${API_URL}/dashboard/deck/getrandomcard/${deckId}`, {
    headers: authHeaders(token),
  })
  if (!response.ok) throw new Error('Не удалось получить карточку')
  const text = await response.text()
  return text ? JSON.parse(text) : null
}

export async function getCards(deckId, token) {
  const response = await fetch(`${API_URL}/dashboard/deck/getcards/${deckId}`, {
    headers: authHeaders(token),
  })
  if (!response.ok) throw new Error('Не удалось загрузить карточки')
  return response.json()
}

export async function createCard(front, back, deckId, token) {
  const response = await fetch(`${API_URL}/dashboard/deck/createcard`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({ front, back, deckId }),
  })
  if (!response.ok) throw new Error('Не удалось создать карточку')
  return response.json()
}

export async function updateCard(id, front, back, token) {
  const response = await fetch(`${API_URL}/dashboard/deck/edit/update`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify({ id, front, back }),
  })
  if (!response.ok) throw new Error('Не удалось обновить карточку')
  return response.json()
}

export async function deleteCard(id, token) {
  const response = await fetch(`${API_URL}/dashboard/deck/edit/delete`, {
    method: 'DELETE',
    headers: authHeaders(token),
    body: JSON.stringify({ id }),
  })
  if (!response.ok) throw new Error('Не удалось удалить карточку')
}
