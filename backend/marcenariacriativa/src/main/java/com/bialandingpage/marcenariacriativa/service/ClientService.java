package com.bialandingpage.marcenariacriativa.service;

import com.bialandingpage.marcenariacriativa.model.Client;
import com.bialandingpage.marcenariacriativa.repository.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public Client findByNome(String nome){
        return clientRepository.findByNome(nome);
    }

    public Iterable<Client> findAll() {
        return clientRepository.findAll(Sort.by("email").ascending());
    }

    public Client create(Client newClient){
        return clientRepository.save(newClient);
    }

    public void delete(Long id){
        clientRepository.deleteById(id);
    }

    public Client update(Long id, Client client){
        client.setId_cliente(id);
        return clientRepository.save(client);
    }
}
