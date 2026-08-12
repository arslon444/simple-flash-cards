package org.example.datasource.repository;

import org.example.datasource.model.CardData;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CardRepository extends CrudRepository<CardData, UUID> {
    List<CardData> findByDeckId(UUID deckId);
    void deleteByDeckId(UUID deckId);

    @Query(value = "SELECT * FROM card_data WHERE deck_id = :deckId ORDER BY RANDOM() LIMIT 1", nativeQuery = true)
    Optional<CardData> findRandomByDeckId(@Param("deckId") UUID deckId);
}
