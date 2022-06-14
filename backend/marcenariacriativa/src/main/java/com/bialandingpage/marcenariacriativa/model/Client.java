package com.bialandingpage.marcenariacriativa.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cliente;

    @NotBlank(message = "{NotBlank.Client.Nome}")
    @Size(min = 2, max = 255, message = "{Size.Client.Nome}")
    private String nome;

    private String cidade;

    @NotBlank(message = "{NotBlank.Client.Email}")
    @Email
    private String email;

    @NotEmpty(message = "{NotEmpty.Client.Telefone}")
    @Min(value = 11, message = "{Min.Client.Telefone}")
    private String telefone;
    
}
