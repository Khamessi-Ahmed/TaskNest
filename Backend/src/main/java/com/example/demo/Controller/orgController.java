package com.example.demo.Controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Board;
import com.example.demo.Entity.Colaborateur;
import com.example.demo.Entity.Invitation;
import com.example.demo.Entity.Organisateur;
import com.example.demo.Entity.Tache;
import com.example.demo.Repository.InvitationRepository;
import com.example.demo.Service.BoardService;
import com.example.demo.Service.ColaborateurService;
import com.example.demo.Service.OrganisateurService;
import com.example.demo.Service.TacheService;





@RestController

@RequestMapping("/api")

public class orgController {
	
	@GetMapping("/ba")
	public String ba() {
		return "ba";
	}
	
	@Autowired
	OrganisateurService OrgService;
	
	@Autowired
	ColaborateurService ColService;
	
	@Autowired
	TacheService tacheServ;
	@Autowired
	BoardService boardSer;
	
	
	
	
	@GetMapping("/Org")
	public List<Organisateur> getAllOrganisateur() {
	    return OrgService.getAllOrganisateur();
	}


	
 
    @PostMapping("/add")
    @ResponseBody
    public Organisateur addOrganisateur(@RequestBody Organisateur organisateur) {
        return OrgService.AjouterOrganisateur(organisateur);
    }

    // Delete an Organisateur
    @DeleteMapping("/delete")
    public void deleteOrganisateur(@RequestBody Organisateur organisateur) {
        OrgService.DeleteOrganisateur(organisateur);
    }
    
    
    
    @GetMapping("/ListColaborateur")
	 public List<Colaborateur>  getAllColaborateur(){
		return ColService.getAllColaborateur();
		
	}
    
    @PostMapping("/addColaborateur")
    @ResponseBody
    public Colaborateur addColaborateur(@RequestBody Colaborateur colaborateur) {
        return ColService.AjoutColaborateur(colaborateur);
    }

    // Delete a Colaborateur
    @DeleteMapping("/deleteColaborateur")
    public void deleteColaborateur(@RequestBody Colaborateur colaborateur) {
        ColService.deleteColaborateur(colaborateur);
    }
    
    
    
	
    
    
    @GetMapping("/ListTache/{boardId}")
    public List<Tache> getTasksByBoardId(@PathVariable("boardId") long boardId) {
        return tacheServ.getTasksByBoardId(boardId);
    }

    // Add a new Tache
    @PostMapping("/addTache/{boardId}/{colabId}")
    @ResponseBody
    public Tache addTache(@RequestBody Tache tache,@PathVariable("boardId") long boardId,@PathVariable("colabId") long colabId) {
        return tacheServ.ajouterTache(tache,boardId,colabId);
    }

    // Delete a Tache
    @DeleteMapping("/deleteTache")
    public void deleteTache(@RequestBody Tache tache) {
        tacheServ.deleteTache(tache);
    }
    
    
    @PostMapping("/addBoard")
    @ResponseBody
    public Board addBord(@RequestBody Board  board) {
    	
 
    	   	
        return boardSer.AjoutBord(board);
    }

    
    @DeleteMapping("/deleteBoard")
    public void deleteBoard(@RequestBody Board Board) {
    	boardSer.deleteBord(Board);
    	
    	
    }
    @PostMapping("/addColaborateurToBoard/{boardId}")
    @ResponseBody
    public Board addColaborateurToBoard(@PathVariable Long boardId, @RequestBody Colaborateur colaborateur) {
        return boardSer.ajouterColaborateur(boardId, colaborateur);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    @GetMapping("/listBoard/{id_coll}")
    public List<Board> getBoardsByCollaborateur(@PathVariable Long id_coll) {
        return boardSer.getBoardsByCollaborateur(id_coll);
    }
    
    
    
    
    @GetMapping("/listCollaborateur/{id_board}")
    public List<Colaborateur> getCollaborateursByBoard(@PathVariable Long id_board) {
        return boardSer.getCollaborateursByBoard(id_board);
    }
    
    
    @GetMapping("/organisateurByBoard/{id_board}")
    public Long getOrganisateurIdByBoard(@PathVariable Long id_board) {
        return boardSer.getOrganisateurIdByBoard(id_board);
    }
    
    
   
    

       
  
 
    
    
    
    
    
    
    
    
    
    
    
    
    
     
    
   
    
    
    
}
    
    
	
	
	


