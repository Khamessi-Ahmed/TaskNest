package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Tache;
@Repository
public interface TacheRepository  extends CrudRepository<Tache,Long> {
	
	List<Tache> findByBoardId(long boardId);
}
