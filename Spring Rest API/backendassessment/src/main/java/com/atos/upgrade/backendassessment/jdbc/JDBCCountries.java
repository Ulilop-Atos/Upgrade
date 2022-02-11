package com.atos.upgrade.backendassessment.jdbc;

import java.util.ArrayList;
import java.util.List;

import com.atos.upgrade.backendassessment.model.Countries;

import org.springframework.stereotype.Repository;

@Repository
public class JDBCCountries extends JDBCAbstract<Countries> {

	public JDBCCountries() {
		this.tableName = "Countries";
		this.classGeneric = Countries.class;
		this.primaryKey = "id";
		List<String> columns = new ArrayList<>(4);
		columns.add("name");
		columns.add("capital");
		columns.add("population");
		columns.add("languageId");
		this.columns = columns;
	}
	
}
