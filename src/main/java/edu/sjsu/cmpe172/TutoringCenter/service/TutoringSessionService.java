package edu.sjsu.cmpe172.TutoringCenter.service;

import java.util.List;

import edu.sjsu.cmpe172.TutoringCenter.model.TutoringSession;

public interface TutoringSessionService {
	List<TutoringSession> get();
	
	TutoringSession get(int id);
	
	void save(TutoringSession tutoringSession);
	
	void delete(int id);
}
