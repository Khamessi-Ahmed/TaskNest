package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Tache;

public interface TacheService  {

	
	 Tache ajouterTache(Tache T,long cId,long bId);
	 void deleteTache(Tache T);

	 List<Tache> getTasksByBoardId(long boardId) ;
}
