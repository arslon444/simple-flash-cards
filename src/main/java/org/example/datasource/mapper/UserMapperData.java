package org.example.datasource.mapper;

import org.example.datasource.model.UserData;
import org.example.domain.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapperData {
    public UserData toDatasource(User user) {
        return new UserData(user.getLogin(), user.getPasswordHash());
    }

    public User toDomain(UserData userData) {
        return new User(userData.getId(), userData.getLogin(), userData.getPasswordHash());
    }
}
