package com.bialandingpage.marcenariacriativa.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bialandingpage.marcenariacriativa.model.Client;
import com.bialandingpage.marcenariacriativa.service.ClientService;

@RestController
public class LandingPageController {

    @Autowired
    ClientService clientService;

    @CrossOrigin
    @PostMapping("/client")
    public ResponseEntity<Client> createClient(@Valid @RequestBody Client client){
        return ResponseEntity.ok().body(clientService.create(client));
    }
    
}
