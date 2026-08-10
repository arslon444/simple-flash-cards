package org.example.domain.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Card {
    private UUID id;
    private UUID deckId;
    private String front;
    private String back;

    public Card(UUID id, UUID deckId, String front, String back) {
        this.id = id;
        this.deckId = deckId;
        this.front = front;
        this.back = back;
    }

    public Card(String front, String back, UUID deckId) {
        this.front = front;
        this.back = back;
        this.deckId = deckId;
    }
}
