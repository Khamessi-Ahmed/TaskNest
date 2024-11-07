package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Colaborateur;

@Repository
public interface ColaborateurRepository extends CrudRepository<Colaborateur, Long> {
	 Optional<Colaborateur> findByEmail(String email);
}
