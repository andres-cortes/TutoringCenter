package edu.sjsu.cmpe172.TutoringCenter.controller;

import java.sql.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.sjsu.cmpe172.TutoringCenter.model.TutoringSession;
import edu.sjsu.cmpe172.TutoringCenter.service.TutoringSessionService;

@RestController
@RequestMapping("/api")
public class TutoringSessionController {
	
	@Autowired
	private TutoringSessionService tutoringSessionService;
	
	@GetMapping("/session")
	public List<TutoringSession> get() {
		return tutoringSessionService.get();
	}
	
	@PostMapping("/session")
	public TutoringSession save(@RequestBody TutoringSession tutoringSession) {
		//System.out.println("POST:" + tutoringSession);
		tutoringSessionService.save(tutoringSession);
		return tutoringSession;
	}
	
	@GetMapping("/session/{id}")
	public TutoringSession get(@PathVariable int id) {
		return tutoringSessionService.get(id);
	}
	
	@DeleteMapping("session/{id}")
	public String delete(@PathVariable int id) {
		tutoringSessionService.delete(id);
		return "TutoringSession removed with id " + id;
	}
	
	@PutMapping("/session/")
	public TutoringSession update(@RequestBody TutoringSession tutoringSession) {
		
		tutoringSessionService.save(tutoringSession);
		return tutoringSession;
	}
	@PutMapping("/session/{id}")
	public TutoringSession update(@PathVariable int id, @RequestBody TutoringSession tutoringSession) {
		TutoringSession ts = tutoringSessionService.get(id);
		//change tutor ID
		if (tutoringSession.getTutor_id() != null){
			ts.setTutor_id(tutoringSession.getTutor_id());
			}
		//change student ID
		if (tutoringSession.getStudent_id() != null){
			ts.setStudent_id(tutoringSession.getStudent_id());
			}
		//change check in and out times
		if (tutoringSession.getCheck_in() != null){
			ts.setCheck_in(tutoringSession.getCheck_in());
			}
		if (tutoringSession.getCheck_out() != null){
			ts.setCheck_out(tutoringSession.getCheck_out());
			}
		//change subject
		if (tutoringSession.getSubject() != null){
			ts.setSubject(tutoringSession.getSubject());
			}
		//not changing id or student arrival
		
		//for some bullshit reason we need to call the toString method to make it save the time in the database
		//this is some grade A bullshit
		System.out.println(ts.toString());
		tutoringSessionService.save(ts);
		return ts;
	}
}
