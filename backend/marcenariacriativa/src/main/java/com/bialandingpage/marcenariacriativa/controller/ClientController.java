package com.bialandingpage.marcenariacriativa.controller;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bialandingpage.marcenariacriativa.excel.ClientExcelExporter;
import com.bialandingpage.marcenariacriativa.model.UserClient;
import com.bialandingpage.marcenariacriativa.service.ClientService;

@RestController
@RequestMapping("/home")
@CrossOrigin
public class ClientController {

    @Autowired
    ClientService clientService;

    @GetMapping("/clientes/{nome}")
    public ResponseEntity<UserClient> getClienteByNome(@PathVariable String nome){
        return ResponseEntity.ok().body(clientService.findByNome(nome));
    }

    @GetMapping("/clientes")
    public ResponseEntity<Iterable<UserClient>> getAllClientes(){
        return ResponseEntity.ok().body(clientService.findAll());
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<UserClient> deleteClient(@PathVariable Long id){
        clientService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<UserClient> updateClient(@PathVariable Long id, @RequestBody UserClient client){
        return ResponseEntity.ok().body(clientService.update(id, client));
    }

    @GetMapping("/clientes/export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=clientes_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        Iterable<UserClient> listClients = clientService.findAll();

        ClientExcelExporter excelExporter = new ClientExcelExporter(listClients);

        excelExporter.export(response);
    }

}
