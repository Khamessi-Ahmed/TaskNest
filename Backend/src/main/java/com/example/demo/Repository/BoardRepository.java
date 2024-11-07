package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.Entity.Board;

public interface BoardRepository extends CrudRepository<Board,  Long> {
	List<Board> findByIdIn(List<Long> ids);
}
