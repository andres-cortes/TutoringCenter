package edu.sjsu.cmpe172.TutoringCenter.controller;

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

import edu.sjsu.cmpe172.TutoringCenter.model.Tutor;
import edu.sjsu.cmpe172.TutoringCenter.service.TutorService;

@RestController
@RequestMapping("/api")
public class TutorController {
	@Autowired
	private TutorService tutorService;
	
	@GetMapping("/tutor")
	public List<Tutor> get() {
		return tutorService.get();
	}
	
	@PostMapping("/tutor")
	public Tutor save(@RequestBody Tutor tutor) {
		tutorService.save(tutor);
		return tutor;
	}
	
	@GetMapping("/tutor/{id}")
	public Tutor get(@PathVariable int id) {
		return tutorService.get(id);
	}
	
	@DeleteMapping("tutor/{id}")
	public String delete(@PathVariable int id) {
		tutorService.delete(id);
		return "Tutor removed with id " + id;
	}
	
	@PutMapping("/tutor")
	public Tutor update(@RequestBody Tutor tutor) {
		tutorService.save(tutor);
		return tutor;
	}
}
