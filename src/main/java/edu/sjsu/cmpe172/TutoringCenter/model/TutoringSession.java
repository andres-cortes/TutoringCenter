package edu.sjsu.cmpe172.TutoringCenter.model;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name="session")
public class TutoringSession {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer id;
	
	/*
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "student_id")
	private Student student;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "tutor_id")
	private Tutor tutor;
	*/
	
	@Column
	private Integer student_id;
	
	@Column
	private Integer tutor_id;
	
	
	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "student_arrive")
	private Date student_arrive;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "check_in")
	private Date check_in;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "check_out")
	private Date check_out;

	@Column
	private String subject;

	@Override
	public String toString() {
		//return "Session [id= " + id + ", student= " + student.getFirstname() + ", tutor= " + tutor.getFirstname() + ", arrived= " + student_arrive +"]";
		return "Session [id= " + id + ", subject= " + subject + ", check_in = "+check_in+"]";
	}

	public Integer getStudent_id() {
		return student_id;
	}

	public void setStudent_id(Integer student_id) {
		this.student_id = student_id;
	}

	public Integer getTutor_id() {
		return tutor_id;
	}

	public void setTutor_id(Integer tutor_id) {
		this.tutor_id = tutor_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	/*
	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Tutor getTutor() {
		return tutor;
	}

	public void setTutor(Tutor tutor) {
		this.tutor = tutor;
	}
	*/
	public Date getStudent_arrive() {
		return student_arrive;
	}

	public void setStudent_arrive(Date student_arrive) {
		this.student_arrive = student_arrive;
	}

	public Date getCheck_in() {
		return check_in;
	}

	public void setCheck_in(Date check_in) {
		this.check_in = check_in;
	}

	public Date getCheck_out() {
		return check_out;
	}

	public void setCheck_out(Date check_out) {
		this.check_out = check_out;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}
	
}
