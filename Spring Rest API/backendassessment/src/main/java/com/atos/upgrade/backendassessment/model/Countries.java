package com.atos.upgrade.backendassessment.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Countries {
    
    // Primary Key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;
    
    // Columns
    @Column
    private String name;
    @Column
    private String capital;
    @Column
    private int population;
    
    // Foreign key to Languages(id) 
    @Column
    private int languageId;

    public Countries () {}

    public Countries (CountriesDTO dto) {
        this.id = dto.getId();
        this.name = dto.getName();
        this.capital = dto.getCapital();
        this.population = dto.getPopulation();
        this.languageId = dto.getLanguageId();
    }
    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCapital() {
        return this.capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public int getPopulation() {
        return this.population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

    public int getLanguageId() {
        return this.languageId;
    }

    public void setLanguageId(int languageId) {
        this.languageId = languageId;
    }

    
}
