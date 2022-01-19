package com.atos.upgrade.backendassessment.jdbc;

import java.util.ArrayList;
import java.util.List;

import com.atos.upgrade.backendassessment.model.Languages;

import org.springframework.stereotype.Repository;

@Repository
public class JDBCLanguages extends JDBCAbstract<Languages> {

	public JDBCLanguages() {
		this.tableName = "Languages";
		this.classGeneric = Languages.class;
		this.primaryKey = "id";
		List<String> columns = new ArrayList<>(4);
		columns.add("name");
		this.columns = columns;
	}
	
}
