package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Organisateur;
import com.example.demo.Repository.OrganisateurRepository;


@Service
public class OrganisateurServiceImpl implements OrganisateurService {

    @Autowired
    OrganisateurRepository repOrg;

    @Override
    public Organisateur AjouterOrganisateur(Organisateur O) {
        // Save and return the Organisateur object
        return repOrg.save(O);
    }

    @Override
    public void DeleteOrganisateur(Organisateur o) {
        repOrg.delete(o);
    }

    
    @Override
    public List<Organisateur> getAllOrganisateur() {
        return (List<Organisateur>) repOrg.findAll();
    }

}
