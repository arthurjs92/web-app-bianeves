package com.bialandingpage.marcenariacriativa.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bialandingpage.marcenariacriativa.model.UserClient;

@Repository
public interface ClientRepository extends CrudRepository<UserClient,Long>{
    UserClient findByNome(String nome);

    Iterable<UserClient> findAll(Sort email);
}
