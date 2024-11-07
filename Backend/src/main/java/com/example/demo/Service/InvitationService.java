package com.example.demo.Service;

import org.springframework.stereotype.Service;


public interface InvitationService {
	String generateInviteLink(Long boardId, Long collaboratorId);
	 String generateInviteLinkForAll(Long boardId);

}
