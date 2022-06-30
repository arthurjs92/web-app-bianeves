package com.bialandingpage.marcenariacriativa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bialandingpage.marcenariacriativa.model.UserAdmin;

@Repository
public interface UserRepository extends JpaRepository<UserAdmin, Integer> {

    UserAdmin findByUsername(String username);

}
