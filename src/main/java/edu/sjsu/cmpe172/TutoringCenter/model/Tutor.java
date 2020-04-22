package edu.sjsu.cmpe172.TutoringCenter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tutor")
public class Tutor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer id;
	
	@Column
	private String firstname;
	
	@Column
	private String lastname;
	
	@Column 
	private String primary_subject;
	
	@Override
	public String toString() {
		return "Tutor [id= " + id + ", name=" + firstname + " " + lastname 
				+ ", primary subject= " + primary_subject + "]";
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getPrimary_subject() {
		return primary_subject;
	}

	public void setPrimary_subject(String primary_subject) {
		this.primary_subject = primary_subject;
	}
	
	
}
