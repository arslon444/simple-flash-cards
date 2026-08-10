package org.example.domain.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.example.datasource.mapper.UserMapperData;
import org.example.datasource.model.UserData;
import org.example.datasource.repository.UserRepository;
import org.example.domain.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
@AllArgsConstructor
public class AuthServiceImpl implements AuthService{
    private final UserRepository userRepository;
    private final UserMapperData userMapperData;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    @Override
    public User register(String login, String password) {
        String hashPassword = passwordEncoder.encode(password);
        User user = new User(login, hashPassword);
        UserData userData = userMapperData.toDatasource(user);
        UserData saveUserData = userRepository.save(userData);
        return userMapperData.toDomain(saveUserData);
    }

    @Override
    public String login(String login, String password) {
        UserData userData = userRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден"));
        if (!passwordEncoder.matches(password, userData.getPasswordHash()))
            throw new RuntimeException("Неверный пароль");

    }
}
