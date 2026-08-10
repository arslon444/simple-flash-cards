package org.example.domain.service;

import org.example.domain.model.Deck;

import java.util.List;
import java.util.UUID;

public interface DeckService {
    Deck createDeck(String name, UUID userId);
    List<Deck> getDeckByUser(UUID userId);
    Deck renameDeck(String name, UUID deckId);
    void deleteDeck(UUID deckId);
}
