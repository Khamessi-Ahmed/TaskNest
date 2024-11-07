package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Invitation;

public interface InvitationRepository extends CrudRepository<Invitation, Long> {
	Optional<Invitation> findByToken(String token);
	 

}
