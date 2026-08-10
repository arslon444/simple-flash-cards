package org.example.web.mapper;

import org.example.domain.model.Deck;
import org.example.web.model.DeckWeb;

public class DeckMapperWeb {
    public DeckWeb toWeb(Deck deck) {
        return new DeckWeb(deck.getId(), deck.getUserId(), deck.getName());
    }

    public Deck toDomain(DeckWeb deckWeb) {
        return new Deck(deckWeb.getId(), deckWeb.getUserId(), deckWeb.getName());
    }
}
