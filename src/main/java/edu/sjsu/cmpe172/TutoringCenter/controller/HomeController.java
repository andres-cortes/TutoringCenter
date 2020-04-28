package edu.sjsu.cmpe172.TutoringCenter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class HomeController {
 
	@RequestMapping(value = "/employeedashboard")
	public String empDash() {
		return "index.html";
	}
	
	@RequestMapping(value = "/tutor")
	public String tutorDash() {
		return "index.html";
	}
	
	@RequestMapping(value = "/student")
	public String studentDash() {
		return "index.html";
	}
	
	@RequestMapping(value = "/statistics")
	public String statsDash() {
		return "index.html";
	}
}