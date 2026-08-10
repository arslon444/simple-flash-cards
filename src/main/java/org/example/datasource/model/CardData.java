package org.example.datasource.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CardData {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private UUID deckId;
    private String front;
    private String back;

    public CardData(UUID deckId, String front, String back) {
        this.deckId = deckId;
        this.front = front;
        this.back = back;
    }
}
