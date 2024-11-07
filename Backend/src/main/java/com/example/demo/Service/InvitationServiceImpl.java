package com.example.demo.Service;

import com.example.demo.Entity.Invitation;
import com.example.demo.Repository.InvitationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class InvitationServiceImpl {
  
	@Autowired
     InvitationRepository invitationRepository;

    public String generateInviteLink(Long boardId, String collaboratorEmail) {
        String token = UUID.randomUUID().toString(); 
        LocalDateTime expiration = LocalDateTime.now().plusHours(24); 
        Invitation invitation = new Invitation(boardId, collaboratorEmail, token, expiration);
        invitationRepository.save(invitation);

      
        return "http://localhost:8080/api/board/access?token=" + token;
    }
    public String generateInviteLinkForAll(long boardId) {
        // Générer un token unique pour l'invitation
        String token = UUID.randomUUID().toString();
        
        // Définir une date d'expiration pour le lien d'invitation (par exemple, 1 jour)
        LocalDateTime expirationDate = LocalDateTime.now().plusDays(1);

        // Créer une nouvelle invitation
        Invitation invitation = new Invitation();
        invitation.setToken(token);
        invitation.setBoardId(boardId);
        invitation.setExpirationDate(expirationDate);
        
        // Sauvegarder l'invitation dans la base de données
        invitationRepository.save(invitation);

        // Construire et retourner le lien d'invitation
        return "http://localhost:8080/api/invite?token=" + token + "&boardId=" + boardId;
    }
    
}
