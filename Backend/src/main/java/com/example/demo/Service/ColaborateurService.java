package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Colaborateur;


public interface ColaborateurService {
	
	Colaborateur AjoutColaborateur(Colaborateur o);
	 
	void deleteColaborateur (Colaborateur o);
	 List<Colaborateur> getAllColaborateur();
	 Colaborateur findOrCreateCollaborateur(String email);

}
