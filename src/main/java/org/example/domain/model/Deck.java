package org.example.domain.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class Deck {
    private UUID id;
    private UUID userId;
    private String name;

    public Deck(UUID id, UUID userId, String name) {
        this.id = id;
        this.userId = userId;
        this.name = name;
    }
}
