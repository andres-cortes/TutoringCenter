package edu.sjsu.cmpe172.TutoringCenter.dao;

import java.util.List;

import edu.sjsu.cmpe172.TutoringCenter.model.Tutor;

public interface TutorDAO {
	List<Tutor> get();
	
	Tutor get(int id);
	
	void save(Tutor tutor);
	
	void delete(int id);
}
