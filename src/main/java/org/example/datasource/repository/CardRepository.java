package org.example.datasource.repository;

import org.example.datasource.model.CardData;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface CardRepository extends CrudRepository<CardData, UUID> {
    //todo: добавить метод взять карты из колоды 
}
