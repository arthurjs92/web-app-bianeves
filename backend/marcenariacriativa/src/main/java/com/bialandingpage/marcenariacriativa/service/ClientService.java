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
        Client cliente = clientRepository.findById(id).get();
        cliente.setId_cliente(id);
        if(client.getNome()!=null && client.getCidade()!=null && client.getEmail()!=null && client.getTelefone() != null){
            cliente.setNome(client.getNome());
            cliente.setCidade(client.getCidade());
            cliente.setEmail(client.getEmail());
            cliente.setTelefone(client.getTelefone());
        } else {
            if(client.getNome()!=null){
                cliente.setNome(client.getNome());
            }else if(client.getCidade()!=null){
                cliente.setCidade(client.getCidade());
            } else if(client.getEmail()!=null){
                cliente.setEmail(client.getEmail());
            }else {
                cliente.setTelefone(client.getTelefone());
            }
        }

        return clientRepository.save(cliente);
    }
}
