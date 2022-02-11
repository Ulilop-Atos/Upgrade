package com.atos.upgrade.backendassessment.jdbc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

abstract class JDBCAbstract<T> implements JDBC<T> {

    @Autowired
	private JdbcTemplate jdbcTemplate;

    // Storing the class of the model
    protected Class<T> classGeneric;
    
    // Storing the table name and primary key
    protected String tableName;
    protected String primaryKey;
    protected List<String> columns;

	public String getTable() {
		return tableName;
	}

    private List<T> listQuery(String sql) {
		return jdbcTemplate.query(sql, 
               BeanPropertyRowMapper.newInstance(classGeneric));
	}
	
	public List<T> list() {
		return listQuery("SELECT * FROM " + tableName + 
                         " ORDER BY " + primaryKey +  " ASC");
	}
	
	public List<T> listBy(String condition) {
		return listQuery("SELECT * FROM " + tableName + 
                         " WHERE " + condition + 
                         " ORDER BY " + primaryKey + " ASC");
	}

	public List<T> listBy(String column, String value) {    
		return listBy(column + " = '" + value + "'");
	}
	
	public T getBy(String column, String value) {
		String sql = "SELECT * FROM " + tableName + 
                     " WHERE " + column + " = '" + value + "'";
		List<T> resultQuery = listQuery(sql);
		if (resultQuery.isEmpty()) {
			return null;
		} else if (resultQuery.size() == 1) {
			return resultQuery.get(0);
		} else {
			throw new ExceptionMultipleResultsJDBC();
		}
	}
	
	public T get(String id) {
		return getBy(primaryKey, id);
	}
	
	public T insert(T obj) { 
		SimpleJdbcInsert insertActor = 
            new SimpleJdbcInsert(jdbcTemplate);
		    insertActor.withTableName(tableName)
			.usingGeneratedKeyColumns(primaryKey);
		BeanPropertySqlParameterSource param = 
            new BeanPropertySqlParameterSource(obj);
		return get(insertActor.executeAndReturnKey(param).toString());
	}
	
	public int update(T obj) {
		StringBuilder sql = new StringBuilder("UPDATE " + tableName + " SET ");
		
        for (String str : columns) {
            sql.append(str);
            sql.append("=:");
            sql.append(str);
			sql.append(",");
        }
		sql.setLength(sql.length() - 1);
        sql.append(" WHERE "); 
        sql.append(primaryKey);
        sql.append("=:");
        sql.append(primaryKey);
		BeanPropertySqlParameterSource param = 
            new BeanPropertySqlParameterSource(obj);
		NamedParameterJdbcTemplate template = 
            new NamedParameterJdbcTemplate(jdbcTemplate);
		return template.update(sql.toString(), param);
	}

	
	public int delete(String executionID) {
		String sql = "DELETE FROM " + tableName + " WHERE " + primaryKey + " = ?";
		return jdbcTemplate.update(sql, executionID);
	}


}