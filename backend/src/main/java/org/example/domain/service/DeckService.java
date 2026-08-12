package org.example.domain.service;

import org.example.domain.model.Deck;

import java.util.List;
import java.util.UUID;

public interface DeckService {
    Deck createDeck(String name, UUID userId);
    List<Deck> getDeckByUser(UUID userId);
    Deck renameDeck(UUID deckId, String name);
    void deleteDeck(UUID deckId);
}
