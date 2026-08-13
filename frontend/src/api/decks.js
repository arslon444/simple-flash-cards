const API_URL = 'http://localhost:8080'

function authHeaders(token) {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export async function getDecks(token) {
  const response = await fetch(`${API_URL}/dashboard/getdecks`, {
    headers: authHeaders(token),
  })
  if (!response.ok) throw new Error('Не удалось загрузить колоды')
  return response.json()
}

export async function createDeck(name, token) {
  const response = await fetch(`${API_URL}/dashboard/createdeck`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({ name }),
  })
  if (!response.ok) throw new Error('Не удалось создать колоду')
  return response.json()
}

export async function renameDeck(id, name, token) {
  const response = await fetch(`${API_URL}/dashboard/edit/rename`, {
    method: 'PATCH',
    headers: authHeaders(token),
    body: JSON.stringify({ id, name }),
  })
  if (!response.ok) throw new Error('Не удалось переименовать колоду')
  return response.json()
}

export async function deleteDeck(id, token) {
  const response = await fetch(`${API_URL}/dashboard/edit/delete`, {
    method: 'DELETE',
    headers: authHeaders(token),
    body: JSON.stringify({ id }),
  })
  if (!response.ok) throw new Error('Не удалось удалить колоду')
}