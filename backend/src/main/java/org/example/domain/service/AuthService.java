package org.example.domain.service;

public interface AuthService {
    String register(String login, String password); // теперь String, не User
    String login(String login, String password);
}
