package com.atos.upgrade.backendassessment.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Languages {
    
    // Primary Key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    // Columns
    @Column
    private String name;

    public Languages() {}
    
    public Languages(LanguagesDTO dto) {
        this.id = dto.getId();
        this.name = dto.getName();
    }

    // Getters and setter for this class
    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
