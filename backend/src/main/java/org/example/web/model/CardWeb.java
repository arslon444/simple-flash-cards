package org.example.web.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class CardWeb {
    private UUID id;
    private UUID deckId;
    @NotBlank(message = "Вопрос не может быть пустым")
    @Size(max = 100, message = "Вопрос должен содержать до 100 символов")
    private String front;
    @NotBlank(message = "Ответ не может быть пустым")
    @Size(max = 200, message = "Ответ должен содержать до 200 символов")
    private String back;

    public CardWeb(UUID id, UUID deckId, String front, String back) {
        this.id = id;
        this.back = back;
        this.front = front;
        this.deckId = deckId;
    }
}
