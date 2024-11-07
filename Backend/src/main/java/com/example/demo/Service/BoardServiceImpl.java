package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Board;
import com.example.demo.Entity.Colaborateur;
import com.example.demo.Entity.Organisateur;
import com.example.demo.Repository.BoardRepository;
import com.example.demo.Repository.ColaborateurRepository;
import com.example.demo.Repository.OrganisateurRepository;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    BoardRepository br;
    
    @Autowired
 OrganisateurRepository or;
    @Autowired
    ColaborateurRepository colaborateurRepository;

    @Override
    public Board AjoutBord(Board o) {
    
    	Optional<Colaborateur> c=  colaborateurRepository.findById(o.getIdORGANISATEUR());
    	
    	if (c.isPresent()) {
            Colaborateur collaborateur = c.get();
            Organisateur org= new Organisateur();
            org.setNom(collaborateur.getNom());
            org.setEmail(collaborateur.getEmail());
            org.setPassword(collaborateur.getPassword());
            org.setPrenon(collaborateur.getPrenon());
            or.save(org);
            
            collaborateur.ajoutBoard(o);

        } else {
            throw new RuntimeException("Collaborateur not found with ID: " + o.getIdORGANISATEUR());
        }
    	
    	
    	
        return br.save(o);
        
        
        
    }

    @Override
    public void deleteBord(Board o) {
        br.delete(o);
    }

    @Override
    public List<Board> getAllBoard() {
        return (List<Board>) br.findAll();
    }

    // Method to add a collaborator to a board
    public Board ajouterColaborateur(Long boardId, Colaborateur colaborateur) {
        Board board = br.findById(boardId).orElse(null);
        if (board != null) {
            // Add the board to the collaborator's list
            colaborateur.ajoutBoard(board);
            colaborateurRepository.save(colaborateur);
            br.save(board); // Save the updated board
        }
        return board;
    }

    @Override
    public Board getBoardById(Long id) {
        return br.findById(id)
                .orElseThrow(() -> new RuntimeException("Board not found with id: " + id));
    }

    @Override
    public List<Board> getBoardsByCollaborateur(Long id_user) {
        Optional<Colaborateur> collaborateurOpt = colaborateurRepository.findById(id_user);

        if (collaborateurOpt.isPresent()) {
            Colaborateur collaborateur = collaborateurOpt.get();
            List<Board> boards = collaborateur.getListBoard();  // Corrected method name

            return boards;
        } else {
            throw new RuntimeException("Collaborateur not found with ID: " + id_user);
        }
    }

    @Override
    public Long getOrganisateurIdByBoard(Long id_board) {
        Board board = br.findById(id_board)
                .orElseThrow(() -> new RuntimeException("Board not found"));

        // Return the ID of the organizer associated with the board
        return board.getIdORGANISATEUR();
    }

    @Override
    public List<Colaborateur> getCollaborateursByBoard(Long id_board) {
        List<Colaborateur> result = new ArrayList<>();

        // Retrieve all collaborateurs from the repository
        List<Colaborateur> allCollaborateurs = (List<Colaborateur>) colaborateurRepository.findAll();

        // Iterate over each collaborateur
        for (Colaborateur collaborateur : allCollaborateurs) {
            // Check if the collaborateur has the given board in their list of boards
            for (Board board : collaborateur.getListBoard()) {
                if (board.getId() == id_board) {
                    result.add(collaborateur);
                    break;  // Found the board, no need to check further
                }
            }
        }

        return result;
    }
}
