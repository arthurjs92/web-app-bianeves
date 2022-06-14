package com.bialandingpage.marcenariacriativa.controller;

import com.bialandingpage.marcenariacriativa.excel.ClientExcelExporter;
import com.bialandingpage.marcenariacriativa.model.Client;
import com.bialandingpage.marcenariacriativa.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@RequestMapping("/administracao/cliente")
public class ClientController {

    @Autowired
    ClientService clientService;

    @GetMapping("/{nome}")
    public ResponseEntity<Client> getClienteByNome(@PathVariable String nome){
        return ResponseEntity.ok().body(clientService.findByNome(nome));
    }

    @GetMapping
    public ResponseEntity<Iterable<Client>> getAllClientes(){
        return ResponseEntity.ok().body(clientService.findAll());
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@Valid @RequestBody Client client){
        return ResponseEntity.ok().body(clientService.create(client));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Client> deleteClient(@PathVariable Long id){
        clientService.delete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client client){
        return ResponseEntity.ok().body(clientService.update(id, client));
    }

    @GetMapping("/export/excel")
    public void exportToExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/octet-stream");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=clientes_" + currentDateTime + ".xlsx";
        response.setHeader(headerKey, headerValue);

        Iterable<Client> listClients = clientService.findAll();

        ClientExcelExporter excelExporter = new ClientExcelExporter(listClients);

        excelExporter.export(response);
    }

}
