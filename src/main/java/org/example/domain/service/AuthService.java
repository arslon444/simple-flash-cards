package org.example.domain.service;

import org.example.domain.model.User;

public interface AuthService {
    User register(String login, String password);
    String login(String login, String password);
}
