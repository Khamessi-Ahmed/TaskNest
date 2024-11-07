package com.example.demo.Entity;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
public class Tache implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private long id;
	  public Tache() {
	        // Default constructor required by Hibernate
	    }
	  @ManyToOne
	  private Colaborateur colaborateur;
	private String Deadline;
	private String Priorite;
	private String Etat;
	private String Description ;
	
	@ManyToOne
	private Board board;
	
	

	public Colaborateur getColaborateur() {
		return colaborateur;
	}

	public void setColaborateur(Colaborateur colaborateur) {
		this.colaborateur = colaborateur;
	}

	public Board getBoard() {
		return board;
	}

	public void setBoard(Board board) {
		this.board = board;
	}

	public String getDeadline() {
		return Deadline;
	}

	public void setDeadline(String deadline) {
		Deadline = deadline;
	}

	public String getPriorite() {
		return Priorite;
	}

	public void setPriorite(String priorite) {
		Priorite = priorite;
	}

	public String getEtat() {
		return Etat;
	}

	public void setEtat(String etat) {
		Etat = etat;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Tache(Colaborateur colaborateur, String deadline, String priorite, String etat, String description,
			Board board) {
		super();
		this.colaborateur = colaborateur;
		Deadline = deadline;
		Priorite = priorite;
		Etat = etat;
		Description = description;
		this.board = board;
	}

	
	
	
	

}
