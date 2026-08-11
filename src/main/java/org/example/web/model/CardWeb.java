package org.example.web.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CardWeb {
    private UUID id;
    private UUID deckId;
    private String front;
    private String back;

    public CardWeb(UUID id, UUID deckId, String front, String back) {
        this.id = id;
        this.back = back;
        this.front = front;
        this.deckId = deckId;
    }
}
