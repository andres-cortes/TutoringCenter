package edu.sjsu.cmpe172.TutoringCenter.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.sjsu.cmpe172.TutoringCenter.model.Tutor;

@Repository
public class TutorDAOImp implements TutorDAO{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Tutor> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Tutor> query = currSession.createQuery("from Tutor", Tutor.class);
		List<Tutor> list = query.getResultList();
		return list;
	}

	@Override
	public Tutor get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Tutor tutor = currSession.get(Tutor.class, id);
		return tutor;
	}

	@Override
	public void save(Tutor tutor) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(tutor);
	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Tutor tutor = currSession.get(Tutor.class, id);
		currSession.delete(tutor);
	}

}
