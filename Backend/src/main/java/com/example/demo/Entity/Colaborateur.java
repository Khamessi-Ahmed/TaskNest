package com.example.demo.Entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonBackReference; 
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
@Entity
public class Colaborateur implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private long id;
	private  String nom;
	private String prenon;
	private String email;
	private String password;
	private String Avertissement;
	@ManyToMany
    @JoinTable(
        name = "colaborateur_board",  // The name of the join table
        joinColumns = @JoinColumn(name = "colaborateur_id"),  // FK to the current entity (Colaborateur)
        inverseJoinColumns = @JoinColumn(name = "board_id")  // FK to the other entity (Board)
    )
    @JsonBackReference
	private List<Board> listBoard = new ArrayList<>();

	
	
	
	public List<Board> getListBoard() {
		return listBoard;
	}
	public void setListBoard(List<Board> listBoard) {
		this.listBoard = listBoard;
	}
	public Colaborateur() {
	        // Default constructor required by Hibernate
	    }
	
	public void ajoutBoard(Board boardId) {
		listBoard.add(boardId);
	}
	
	
	public Colaborateur(String nom, String prenon, String email, String password, String avertissement,
			List<Board> listBoard) {
		super();
		this.nom = nom;
		this.prenon = prenon;
		this.email = email;
		this.password = password;
		Avertissement = avertissement;
		this.listBoard = listBoard;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenon() {
		return prenon;
	}
	public void setPrenon(String prenon) {
		this.prenon = prenon;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAvertissement() {
		return Avertissement;
	}
	public void setAvertissement(String avertissement) {
		Avertissement = avertissement;
	}
	
	@Override
	public String toString() {
		return "Colaborateur [id=" + id + ", nom=" + nom + ", prenon=" + prenon + ", email=" + email + ", password="
				+ password + ", Avertissement=" + Avertissement + "]";
	}

	
}
