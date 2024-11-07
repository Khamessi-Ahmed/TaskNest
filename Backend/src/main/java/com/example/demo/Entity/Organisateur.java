package com.example.demo.Entity;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Organisateur implements Serializable {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	private long id;
	private  String nom;
	private String prenon;
	private String email;
	private String password;

    public Organisateur() {
        // Default constructor required by Hibernate
    }
	public Organisateur(String nom, String prenon, String email, String password) {
		super();
		this.nom = nom;
		this.prenon = prenon;
		this.email = email;
		this.password = password;
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
	
	@Override
	public String toString() {
		return "Organisateur [id=" + id + ", nom=" + nom + ", prenon=" + prenon + ", email=" + email + ", password="
				+ password + "]";
	}
}
