package com.utp.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.utp.demo.model.Contacto;
import com.utp.demo.repository.ContactoRepository;

@RestController
@RequestMapping("/api/contactos")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactoController {

    @Autowired
    private ContactoRepository contactoRepository;

    @PostMapping
    public Contacto guardar(@RequestBody Contacto contacto) {
        return contactoRepository.save(contacto);
    }
}

