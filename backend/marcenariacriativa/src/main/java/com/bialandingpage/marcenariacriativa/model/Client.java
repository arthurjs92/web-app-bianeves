package com.bialandingpage.marcenariacriativa.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cliente;

    @Column(name = "nome")
    private String nome;
    @Column(name = "cidade")
    private String cidade;
    @Column(name = "e_mail")
    private String email;
    @Column(name = "contato")
    private String telefone;
    
}
