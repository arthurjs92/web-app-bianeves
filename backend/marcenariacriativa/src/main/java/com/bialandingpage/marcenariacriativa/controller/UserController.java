package com.bialandingpage.marcenariacriativa.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;

public class UserController {

    @PostMapping("/administracao/cliente")
    public ResponseEntity<String> login(Authentication authentication) {
        return ResponseEntity.status(HttpStatus.OK).body("Hello, " + authentication.getName() + "!");
    }
}
