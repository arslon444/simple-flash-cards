package org.example.web.model;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class UserWeb {
    private UUID id;
    private String login;
    private String passwordHash;

    public UserWeb(UUID id, String passwordHash, String login) {
        this.passwordHash = passwordHash;
        this.login = login;
        this.id = id;
    }
}
