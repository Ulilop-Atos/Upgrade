package com.atos.upgrade.backendassessment.restcontroller;

import java.util.List;

import com.atos.upgrade.backendassessment.jdbc.JDBCLanguages;
import com.atos.upgrade.backendassessment.model.Languages;
import com.atos.upgrade.backendassessment.model.LanguagesDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/languages")
public class RestControllerLanguages {
    
	@Autowired
	protected JDBCLanguages jdbc;
	
	@GetMapping
	public List<Languages> all() {
		return jdbc.list();
	}

	@GetMapping(value = "/{id}")
	public Languages getLanguages(@PathVariable String id) {
		return jdbc.get(id);
	}
	
	@PostMapping(consumes = "application/json", produces = "application/json")
	public Languages postLanguages(@RequestBody LanguagesDTO dto) {
		return jdbc.insert(new Languages(dto));
	}
	
	@PutMapping(consumes = "application/json", produces = "application/json")
	public String putLanguages(@RequestBody LanguagesDTO dto) {		
		return "Updated \"" +  jdbc.update(new Languages(dto)) + "\" rows in \"" + jdbc.getTable() + "\"";
	}
	
	@DeleteMapping(value = "/{id}")
	public String deleteLanguages(@PathVariable String id) {		
		return "Deleted \"" +  jdbc.delete(id) + "\" rows in \"" + jdbc.getTable() + "\"";  
	}
}
