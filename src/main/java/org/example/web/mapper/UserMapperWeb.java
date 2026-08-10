package org.example.web.mapper;

import org.example.domain.model.User;
import org.example.web.model.UserWeb;

public class UserMapperWeb {
    public UserWeb toWeb(User user) {
        return new UserWeb(user.getId(), user.getLogin(), user.getPasswordHash());
    }

    public User toDomain(UserWeb userWeb) {
        return new User(userWeb.getId(), userWeb.getLogin(), userWeb.getPasswordHash());
    }
}
