package org.example.datasource.mapper;

import org.example.datasource.model.CardData;
import org.example.domain.model.Card;
import org.springframework.stereotype.Component;

@Component
public class CardMapperData {
    public CardData toDatasource(Card card) {
        return new CardData(card.getDeckId(), card.getFront(), card.getBack());
    }

    public Card toDomain (CardData cardData) {
        return new Card(cardData.getId(), cardData.getDeckId(), cardData.getFront(), cardData.getBack());
    }
}