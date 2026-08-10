package org.example.datasource.repository;

import org.example.datasource.model.UserData;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends CrudRepository<UserData, UUID> {
    Optional<UserData> findByLogin(String login);
}
