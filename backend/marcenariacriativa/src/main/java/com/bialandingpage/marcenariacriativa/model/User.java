package com.bialandingpage.marcenariacriativa.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id_user;

    private String username;
    private String password;
    private String role;
    private boolean enabled;
}
