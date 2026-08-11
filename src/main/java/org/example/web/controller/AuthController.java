package org.example.web.controller;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.example.domain.service.AuthService;
import org.example.web.model.SignUpRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @PostMapping("/register")
    public String register(@Valid @RequestBody SignUpRequest request) {
        return authService.register(request.getLogin(), request.getPassword());
    }

    @PostMapping("/login")
    public String login(@Valid @RequestBody SignUpRequest request) {
        return authService.login(request.getLogin(), request.getPassword());
    }
}
