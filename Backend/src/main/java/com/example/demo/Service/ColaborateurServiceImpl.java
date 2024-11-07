package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Colaborateur;
import com.example.demo.Repository.ColaborateurRepository;
@Service
public class ColaborateurServiceImpl implements ColaborateurService {

	  @Autowired
	  ColaborateurRepository Colrep;
	  
	  
	@Override
	public Colaborateur AjoutColaborateur(Colaborateur o) {
		Colrep.save(o);
		return null;
	}

	@Override
	public void deleteColaborateur(Colaborateur o) {
		Colrep.delete(o);
		
	}

	@Override
	public List<Colaborateur> getAllColaborateur() {
		
		return (List<Colaborateur>) Colrep.findAll();
	}
    @Override
    public Colaborateur findOrCreateCollaborateur(String email) {
        // Rechercher le collaborateur par email
        Optional<Colaborateur> existingCollaborator = Colrep.findByEmail(email);
        
        // Si le collaborateur existe, le retourner
        if (existingCollaborator.isPresent()) {
            return existingCollaborator.get();
        }

        // Sinon, créer un nouveau collaborateur
        Colaborateur newCollaborateur = new Colaborateur();
        newCollaborateur.setEmail(email);
        // Ajoutez ici d'autres informations nécessaires pour créer un collaborateur

        return Colrep.save(newCollaborateur);
    }

}
