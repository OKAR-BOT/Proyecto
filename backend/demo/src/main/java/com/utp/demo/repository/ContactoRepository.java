package com.utp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.utp.demo.model.Contacto;

public interface ContactoRepository extends JpaRepository<Contacto, Long> {}
