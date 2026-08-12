package org.example.web.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequest {
    @NotBlank(message = "Логин не может быть пустым")
    @Size(min = 5, max = 20, message = "Логин должен быть от 5 до 20 символов")
    private String login;
    @NotBlank(message = "Пароль не может быть пустым")
    @Size(min = 8, max = 20, message = "Пароль должен быть от 5 до 20 символов")
    private String password;
}