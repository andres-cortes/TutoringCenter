package edu.sjsu.cmpe172.TutoringCenter.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.sjsu.cmpe172.TutoringCenter.model.TutoringSession;

@Repository
public class TutoringSessionDAOImp implements TutoringSessionDAO{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<TutoringSession> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<TutoringSession> query = currSession.createQuery("from TutoringSession", TutoringSession.class);
		List<TutoringSession> list = query.getResultList();
		return list;
	}

	@Override
	public TutoringSession get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		TutoringSession tutoringSession = currSession.get(TutoringSession.class, id);
		return tutoringSession;
	}

	@Override
	public void save(TutoringSession tutoringSession) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(tutoringSession);
	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		TutoringSession tutoringSession = currSession.get(TutoringSession.class, id);
		currSession.delete(tutoringSession);
	}

}
