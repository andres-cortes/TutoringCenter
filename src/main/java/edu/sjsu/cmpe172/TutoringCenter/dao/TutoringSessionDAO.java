package edu.sjsu.cmpe172.TutoringCenter.dao;

import java.util.List;

import edu.sjsu.cmpe172.TutoringCenter.model.TutoringSession;

public interface TutoringSessionDAO {
	List<TutoringSession> get();
	
	TutoringSession get(int id);
	
	void save(TutoringSession tutoringSession);
	
	void delete(int id);
}
