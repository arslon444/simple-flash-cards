package org.example.domain.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.example.datasource.mapper.UserMapperData;
import org.example.datasource.repository.UserRepository;
import org.example.domain.model.User;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
@AllArgsConstructor
public class AuthServiceImpl implements AuthService{
    private final UserRepository userRepository;
    private final UserMapperData userMapperData;

    @Override
    public User register(String login, String password) {
        return null;
    }

    @Override
    public String login(String login, String password) {
        return "";
    }
}
