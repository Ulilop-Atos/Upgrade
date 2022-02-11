package com.atos.upgrade.backendassessment.jdbc;

public class ExceptionMultipleResultsJDBC extends RuntimeException {

    public ExceptionMultipleResultsJDBC() {
        super("Multiple results for query, use " + 
              "JDBC.listBy(String column, String value) instead.");
    }

    public ExceptionMultipleResultsJDBC(String errorMessage, Throwable err) {
        super(errorMessage, err);
    }
}
