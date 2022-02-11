package com.atos.upgrade.backendassessment.model;

public class CountriesDTO {
    
    private int id;
    private String name;
    private String capital;
    private int population;
    private int languageId;

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
