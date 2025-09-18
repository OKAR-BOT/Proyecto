package com.utp.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.utp.demo.Model.Contacto;

public interface ContactoRepository extends JpaRepository<Contacto, Integer> {

}
