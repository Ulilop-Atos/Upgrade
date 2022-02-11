package com.atos.upgrade.backendassessment.jdbc;

import java.util.List;

public interface JDBC<T> {

	public String getTable();
	
	public List<T> list();
	
	public List<T> listBy(String condition);

	public List<T> listBy(String column, String value);
	
	public T getBy(String column, String value);
	
	public T get(String id);
	
	public T insert(T obj);
	
	public int update(T obj);
	
	public int delete(String executionID);
}