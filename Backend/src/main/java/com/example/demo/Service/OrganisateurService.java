package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Organisateur;



public interface OrganisateurService {
            
	       Organisateur  AjouterOrganisateur(Organisateur O); 
	       void DeleteOrganisateur (Organisateur O);
	       List<Organisateur> getAllOrganisateur();
}
