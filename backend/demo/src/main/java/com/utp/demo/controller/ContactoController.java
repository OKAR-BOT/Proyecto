package com.utp.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utp.demo.Model.Contacto;
import com.utp.demo.Service.ContactoService;

@RestController
@RequestMapping("/api/contactos")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactoController {

    @Autowired
    private ContactoService contactoService;

    @PostMapping
    public ResponseEntity<Contacto> crearContacto(@RequestBody Contacto contacto) {
    Contacto contactoGuardado = contactoService.guardar(contacto);
    return ResponseEntity.ok(contactoGuardado);
}
}
