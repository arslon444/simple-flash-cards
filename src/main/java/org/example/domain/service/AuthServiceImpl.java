package org.example.domain.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.example.datasource.mapper.UserMapperData;
import org.example.datasource.model.UserData;
import org.example.datasource.repository.UserRepository;
import org.example.domain.model.User;
import org.example.security.JwtService;
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
    public String register(String login, String password) {
        String passwordHash = passwordEncoder.encode(password);
        User user = new User(login, passwordHash);
        UserData userData = userMapperData.toDatasource(user);
        UserData savedUserData = userRepository.save(userData);
        User savedUser = userMapperData.toDomain(savedUserData);

        return jwtService.generateToken(savedUser.getId());
    }

    @Override
    public String login(String login, String password) {
        UserData userData = userRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден"));

        if (!passwordEncoder.matches(password, userData.getPasswordHash())) {
            throw new RuntimeException("Неверный пароль");
        }

        return jwtService.generateToken(userData.getId());
    }
}
