package com.example.demo.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Organisateur;




@Repository
public interface OrganisateurRepository extends CrudRepository<Organisateur, Long> {
}
