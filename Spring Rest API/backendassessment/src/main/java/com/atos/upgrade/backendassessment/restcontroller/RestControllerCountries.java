package com.atos.upgrade.backendassessment.restcontroller;

import java.util.List;

import com.atos.upgrade.backendassessment.jdbc.JDBCCountries;
import com.atos.upgrade.backendassessment.model.Countries;
import com.atos.upgrade.backendassessment.model.CountriesDTO;

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
@RequestMapping("/countries")
public class RestControllerCountries {
    
	@Autowired
	protected JDBCCountries jdbc;
	
	@GetMapping
	public List<Countries> all() {
		return jdbc.list();
	}

	@GetMapping(value = "/{id}")
	public Countries getCountries(@PathVariable String id) {
		return jdbc.get(id);
	}
	
	@PostMapping(consumes = "application/json", produces = "application/json")
	public Countries postCountries(@RequestBody CountriesDTO dto) {
		return jdbc.insert(new Countries(dto));
	}
	
	@PutMapping(consumes = "application/json", produces = "application/json")
	public String putCountries(@RequestBody CountriesDTO dto) {		
		return "Updated \"" +  jdbc.update(new Countries(dto)) + "\" rows in \"" + jdbc.getTable() + "\"";
	}

	@DeleteMapping(value = "/{id}")
	public String deleteCountries(@PathVariable String id) {		
		return "Deleted \"" +  jdbc.delete(id) + "\" rows in \"" + jdbc.getTable() + "\"";   
	}

}
