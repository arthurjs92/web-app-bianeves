package com.bialandingpage.marcenariacriativa.repository;

import com.bialandingpage.marcenariacriativa.model.Client;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends CrudRepository<Client,Long>{
    Client findByNome(String nome);

    Iterable<Client> findAll(Sort email);
}
