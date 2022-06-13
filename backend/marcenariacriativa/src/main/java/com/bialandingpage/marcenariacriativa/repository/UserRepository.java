package com.bialandingpage.marcenariacriativa.repository;

import com.bialandingpage.marcenariacriativa.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
