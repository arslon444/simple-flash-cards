package org.example.domain.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.example.datasource.mapper.DeckMapperData;
import org.example.datasource.model.DeckData;
import org.example.datasource.repository.DeckRepository;
import org.example.domain.model.Deck;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Getter
@Setter
@AllArgsConstructor
public class DeckServiceImpl implements DeckService{
    private final DeckRepository deckRepository;
    private final DeckMapperData deckMapperData;

    @Override
    public Deck createDeck(String name, UUID userId) {
        Deck deck = new Deck(userId, name);
        DeckData deckData = deckMapperData.toDatasource(deck);
        DeckData saveDeckData = deckRepository.save(deckData);
        return deckMapperData.toDomain(saveDeckData);
    }

    @Override
    public List<Deck> getDeckByUser(UUID userId) {
        List<DeckData> deckDataList = deckRepository.findByUserId(userId);
        return deckDataList.stream()
                .map(deckMapperData::toDomain)
                .toList();
    }

    @Override
    public Deck renameDeck(UUID deckId, String name) {
        DeckData deckData = deckRepository.findById(deckId).orElseThrow();
        deckData.setName(name);
        DeckData saveDeckData = deckRepository.save(deckData);
        return deckMapperData.toDomain(saveDeckData);
    }

    @Override
    public void deleteDeck(UUID deckId) {
        deckRepository.deleteById(deckId);
    }
}
