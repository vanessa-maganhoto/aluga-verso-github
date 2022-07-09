package com.dhbrasil.projetoIntegrador.AlugaVerso.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public ResponseEntity hello() {
        return ResponseEntity.ok().body("Helloo!");
    }
}
