package org.example.domain.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class User {
    private UUID id;
    private String login;
    private String passwordHash;

    public User(UUID id, String login, String passwordHash) {
        this.id = id;
        this.login = login;
        this.passwordHash = passwordHash;
    }
}
