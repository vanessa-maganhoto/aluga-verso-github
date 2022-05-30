package com.dhbrasil.projetoIntegrador.AlugaVerso.controller;

import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.LandDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.dto.MetaverseDTO;
import com.dhbrasil.projetoIntegrador.AlugaVerso.service.LandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/lands")
public class LandController {

    @Autowired
    private LandService landService;

    //Cadastrar terreno
    @PostMapping
    public ResponseEntity<LandDTO> createdLand(@RequestBody LandDTO dto) {
        dto = landService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }
}
