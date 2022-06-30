package com.bialandingpage.marcenariacriativa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.bialandingpage.marcenariacriativa.model.UserClient;
import com.bialandingpage.marcenariacriativa.repository.ClientRepository;

@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public UserClient findByNome(String nome){
        return clientRepository.findByNome(nome);
    }

    public Iterable<UserClient> findAll() {
        return clientRepository.findAll(Sort.by("email").ascending());
    }

    public UserClient create(UserClient newClient){
        return clientRepository.save(newClient);
    }

    public void delete(Long id){
        clientRepository.deleteById(id);
    }

    public UserClient update(Long id, UserClient client){
        client.setId(id);
        return clientRepository.save(client);
    }
}
