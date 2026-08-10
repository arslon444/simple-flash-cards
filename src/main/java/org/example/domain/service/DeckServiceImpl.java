package org.example.domain.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.example.datasource.mapper.DeckMapperData;
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
        return null;
    }

    @Override
    public List<Deck> getDeckByUser(UUID userId) {
        return List.of();
    }

    @Override
    public Deck renameDeck(String name, UUID deckId) {
        return null;
    }

    @Override
    public void deleteDeck(UUID deckId) {

    }
}
