package com.utp.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.utp.demo.Model.Contacto;
import com.utp.demo.Repository.ContactoRepository;

@Service
public class ContactoService {

    @Autowired
    ContactoRepository contactoRepository;

    public Contacto guardar(Contacto contacto) {
        return contactoRepository.save(contacto);
    }
}
