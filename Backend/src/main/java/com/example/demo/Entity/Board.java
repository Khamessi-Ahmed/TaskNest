package com.example.demo.Entity;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
@Entity
public class Board {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private long idORGANISATEUR;
	private String nom;
	private String Description;
	
	@ManyToMany(mappedBy = "listBoard")

	private List<Colaborateur>  colaborateurs = new ArrayList<>();
	
	
	
	public Board() {
        // Default constructor required by Hibernate
    
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getIdORGANISATEUR() {
		return idORGANISATEUR;
	}

	public void setIdORGANISATEUR(long idORGANISATEUR) {
		this.idORGANISATEUR = idORGANISATEUR;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public List<Colaborateur> getColaborateurs() {
		return colaborateurs;
	}

	public void setColaborateurs(List<Colaborateur> colaborateurs) {
		this.colaborateurs = colaborateurs;
	}

	

	public Board(long idORGANISATEUR, String nom, String description, List<Colaborateur> colaborateurs) {
		super();
		this.idORGANISATEUR = idORGANISATEUR;
		this.nom = nom;
		Description = description;
		this.colaborateurs = colaborateurs;
		
	}




}
