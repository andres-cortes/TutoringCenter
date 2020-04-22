package edu.sjsu.cmpe172.TutoringCenter.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.sjsu.cmpe172.TutoringCenter.dao.TutoringSessionDAO;
import edu.sjsu.cmpe172.TutoringCenter.model.TutoringSession;

@Service
public class TutoringSessionServiceImp implements TutoringSessionService{
	@Autowired
	private TutoringSessionDAO tutoringSessionDao;
	
	@Transactional
	@Override
	public List<TutoringSession> get() {
		return tutoringSessionDao.get();
	}
	
	@Transactional
	@Override
	public TutoringSession get(int id) {
		return tutoringSessionDao.get(id);
	}

	@Transactional
	@Override
	public void save(TutoringSession tutoringSession) {
		tutoringSessionDao.save(tutoringSession);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		tutoringSessionDao.delete(id);
	}
}
