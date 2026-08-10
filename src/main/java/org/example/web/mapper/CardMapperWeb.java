package org.example.web.mapper;

import org.example.domain.model.Card;
import org.example.web.model.CardWeb;
import org.springframework.stereotype.Component;

@Component
public class CardMapperWeb {
    public CardWeb toWeb(Card card) {
        return new CardWeb(card.getId(), card.getDeckId(), card.getFront(), card.getBack());
    }

    public Card toDomain (CardWeb cardWeb) {
        return new Card(cardWeb.getId(), cardWeb.getDeckId(), cardWeb.getFront(), cardWeb.getBack());
    }
}