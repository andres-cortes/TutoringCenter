package edu.sjsu.cmpe172.TutoringCenter.service;

import java.util.List;

import edu.sjsu.cmpe172.TutoringCenter.model.Student;

public interface StudentService {
	List<Student> get();
	
	Student get(int id);
	
	void save(Student student);
	
	void delete(int id);
}
