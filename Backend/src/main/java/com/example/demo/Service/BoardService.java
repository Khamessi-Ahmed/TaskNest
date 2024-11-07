package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Board;
import com.example.demo.Entity.Colaborateur;


public interface BoardService {
	Board AjoutBord(Board o);
	 
	void deleteBord (Board o);
	 List<Board> getAllBoard();
	  Board ajouterColaborateur(Long boardId, Colaborateur colaborateur) ;
	  Board getBoardById(Long id);
	  public List<Board> getBoardsByCollaborateur (Long id);
	 public List<Colaborateur> getCollaborateursByBoard(Long id_board);
	 Long getOrganisateurIdByBoard(Long id_board);
}
