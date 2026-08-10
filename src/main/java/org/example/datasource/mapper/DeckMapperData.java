package org.example.datasource.mapper;

import org.example.datasource.model.DeckData;
import org.example.domain.model.Deck;
import org.springframework.stereotype.Component;

@Component
public class DeckMapperData {
    public DeckData toDatasource(Deck deck) {
        return new DeckData(deck.getUserId(), deck.getName());
    }

    public Deck toDomain(DeckData deckData) {
        return new Deck(deckData.getId(), deckData.getUserId(), deckData.getName());
    }
}
