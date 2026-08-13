const API_URL = 'http://localhost:8080'

export async function login(login, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  })

  if (!response.ok) {
    const errData = await response.json()
    throw new Error(errData.message || 'Ошибка входа')
  }

  return response.text()
}

export async function register(login, password) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  })

  if (!response.ok) {
    const errData = await response.json()
    throw new Error(errData.message || 'Ошибка регистрации')
  }

  return response.text()
}