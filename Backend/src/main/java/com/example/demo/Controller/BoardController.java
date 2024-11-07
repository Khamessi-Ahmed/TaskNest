package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.InvitationService;
@RestController
public class BoardController {

    @Autowired
    

    //  pour générer un lien d'invitation pour un collaborateur
    
    
	@GetMapping("/bak")
	public String ba() {
		return "ba";
	}
 
}
