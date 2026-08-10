package org.example.datasource.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String login;
    private String passwordHash;

    public UserData(String login, String passwordHash) {
        this.login = login;
        this.passwordHash = passwordHash;
    }
}
