package org.example.domain.service;

import org.example.domain.model.Card;

import java.util.List;
import java.util.UUID;

public interface CardService {
    Card createCard(String front, String back, UUID deckId);
    List<Card> getCardByDeck(UUID deckId);
    Card updateCard(String front, String back, UUID cardId);
    void deleteCard(UUID cardId);
}
