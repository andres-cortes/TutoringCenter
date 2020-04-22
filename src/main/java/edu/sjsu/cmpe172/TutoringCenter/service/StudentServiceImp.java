package edu.sjsu.cmpe172.TutoringCenter.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.sjsu.cmpe172.TutoringCenter.dao.StudentDAO;
import edu.sjsu.cmpe172.TutoringCenter.model.Student;

@Service
public class StudentServiceImp implements StudentService{
	@Autowired
	private StudentDAO studentDao;
	
	@Transactional
	@Override
	public List<Student> get() {
		return studentDao.get();
	}
	
	@Transactional
	@Override
	public Student get(int id) {
		return studentDao.get(id);
	}

	@Transactional
	@Override
	public void save(Student student) {
		studentDao.save(student);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		studentDao.delete(id);
	}
}
