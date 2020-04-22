package edu.sjsu.cmpe172.TutoringCenter.service;

import java.util.List;

import edu.sjsu.cmpe172.TutoringCenter.model.Tutor;

public interface TutorService {
	List<Tutor> get();
	
	Tutor get(int id);
	
	void save(Tutor student);
	
	void delete(int id);
}
