package org.example.domain.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.example.datasource.mapper.CardMapperData;
import org.example.datasource.model.CardData;
import org.example.datasource.repository.CardRepository;
import org.example.domain.model.Card;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Getter
@Setter
@AllArgsConstructor
public class CardServiceImpl implements CardService{
    private final CardRepository cardRepository;
    private final CardMapperData cardMapperData;

    @Override
    public Card createCard(String front, String back, UUID deckId) {
        Card card = new Card(front, back, deckId);
        CardData cardData = cardMapperData.toDatasource(card);
        CardData saveCardData = cardRepository.save(cardData);
        return cardMapperData.toDomain(saveCardData);
    }

    @Override
    public List<Card> getCardByDeck(UUID deckId) {
        List<CardData> cardDataList = cardRepository.findByDeckId(deckId);
        return cardDataList.stream()
                .map(cardMapperData::toDomain)
                .toList();
    }

    @Override
    public Card updateCard(String front, String back, UUID cardId) {
        CardData cardData = cardRepository.findById(cardId).orElseThrow();
        cardData.setFront(front);
        cardData.setBack(back);
        CardData saveUpdatedCard = cardRepository.save(cardData);
        return cardMapperData.toDomain(saveUpdatedCard);
    }

    @Override
    public void deleteCard(UUID cardId) {
        cardRepository.deleteById(cardId);
    }
}
