package org.example.datasource.repository;

import org.example.datasource.model.DeckData;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface DeckRepository extends CrudRepository<DeckData, UUID> {
}
