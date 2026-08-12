package org.example.web.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class DeckWeb {
    private UUID id;
    private UUID userId;
    @NotBlank(message = "Название колоды не может быть пустым")
    @Size(max = 25, message = "Название должно быть до 25 символов")
    private String name;

    public DeckWeb(UUID id, UUID userId, String name) {
        this.id = id;
        this.userId = userId;
        this.name = name;
    }
}
