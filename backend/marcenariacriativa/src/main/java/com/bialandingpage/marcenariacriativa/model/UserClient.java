package com.bialandingpage.marcenariacriativa.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class UserClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "{NotBlank.Client.Nome}")
    @Size(min = 2, max = 255, message = "{Size.Client.Nome}")
    private String nome;

    @NotBlank(message = "{NotBlank.Client.Email}")
    @Email
    private String email;

    @NotEmpty(message = "{NotEmpty.Client.Telefone}")
    @Min(value = 11, message = "{Min.Client.Telefone}")
    private String telefone;

    @Column(name = "data_cadastro", columnDefinition = "DATE")
    @CreationTimestamp
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate data;

}
