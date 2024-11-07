package com.example.demo.Entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Invitation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private Long boardId;
     private String collaborateurEmail; ;
    
    private String token; // Token unique pour chaque invitation
    
    private LocalDateTime expirationDate; // Date d'expiration du lien

    public Invitation() {
    }

    public Invitation(Long boardId, String collaboratorEmail, String token, LocalDateTime expirationDate) {
        this.boardId = boardId;
        this.collaborateurEmail = collaboratorEmail;
        this.token = token;
        this.expirationDate = expirationDate;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getBoardId() {
		return boardId;
	}

	public void setBoardId(long boardId2) {
		this.boardId = (long) boardId2;
	}

	
	 public String getCollaborateurEmail() {
	        return collaborateurEmail; // Getter pour l'email
	    }

	    public void setCollaborateurEmail(String collaborateurEmail) {
	        this.collaborateurEmail = collaborateurEmail; // Setter pour l'email
	    }

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public LocalDateTime getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(LocalDateTime expirationDate) {
		this.expirationDate = expirationDate;
	}

  
}
