package org.example.web.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class DeckWeb {
    private UUID id;
    private UUID userId;
    private String name;

    public DeckWeb(UUID id, UUID userId, String name) {
        this.id = id;
        this.userId = userId;
        this.name = name;
    }
}
