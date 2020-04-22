package edu.sjsu.cmpe172.TutoringCenter.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.sjsu.cmpe172.TutoringCenter.dao.TutorDAO;
import edu.sjsu.cmpe172.TutoringCenter.model.Tutor;

@Service
public class TutorServiceImp implements TutorService{
	@Autowired
	private TutorDAO tutorDao;
	
	@Transactional
	@Override
	public List<Tutor> get() {
		return tutorDao.get();
	}
	
	@Transactional
	@Override
	public Tutor get(int id) {
		return tutorDao.get(id);
	}

	@Transactional
	@Override
	public void save(Tutor tutor) {
		tutorDao.save(tutor);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		tutorDao.delete(id);
	}
}
