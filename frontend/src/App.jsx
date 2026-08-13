import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import DeckPage from './pages/DeckPages'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/decks/:deckId" element={<DeckPage />} />'
        <Route path="/decks/:deckId/cards" element={<CardsListPage />} />
        <Route path="/decks/:deckId/cards/new" element={<CardFormPage />} />
        <Route path="/decks/:deckId/cards/:cardId" element={<CardFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}