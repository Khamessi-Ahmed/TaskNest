package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Board;
import com.example.demo.Entity.Colaborateur;
import com.example.demo.Entity.Organisateur;
import com.example.demo.Entity.Tache;
import com.example.demo.Repository.BoardRepository;
import com.example.demo.Repository.ColaborateurRepository;
import com.example.demo.Repository.TacheRepository;
@Service
public class TacheServiceImpl implements TacheService {
	@Autowired
	TacheRepository repTache;
	
	@Autowired
	ColaborateurRepository repColab;
	
	@Autowired
	BoardRepository repBoard;
	@Override
	public Tache ajouterTache(Tache T,long bId,long cId) {
		Optional <Board> b=repBoard.findById(bId);
		Optional <Colaborateur> c = repColab.findById(cId);
		if (b.isPresent()) {
            Board board = b.get();
            T.setBoard(board);
            if(c.isPresent()) {
            	Colaborateur colab = c.get();
            	T.setColaborateur(colab);
            }else {
            	throw new RuntimeException("collaborateur not found ");
            }

        } else {
            throw new RuntimeException("board not found ");
        }
		
		
		
		
		
		return repTache.save(T);
	}

	@Override
	public void deleteTache(Tache T) {
		repTache.delete(T);
		
	}
	
	
	public List<Tache> getTasksByBoardId(long boardId) {
        return repTache.findByBoardId(boardId);  // Assuming BoardId is used for filtering
    }

	

}
