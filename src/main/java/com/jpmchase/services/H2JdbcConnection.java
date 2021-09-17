package com.jpmchase.services;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class H2JdbcConnection {

    private static String dbUrl = "jdbc:h2:mem:allydb";
    private static String User = "sa";
    private static String dpPass = "password";

    public static Connection getConnection() {
        Connection connection = null;
        try {
            connection = DriverManager.getConnection(dbUrl, User, dpPass);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public static void printSQLException(SQLException ex) {
        for (Throwable e: ex) {
            if (e instanceof SQLException) {
                e.printStackTrace(System.err);
                System.err.println("SQLState: " + ((SQLException) e).getSQLState());
                System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
                System.err.println("Message: " + e.getMessage());
                Throwable throwable = ex.getCause();
                while (throwable != null) {
                    System.out.println("Cause: " + throwable);
                    throwable = throwable.getCause();
                }
            }
        }
    }
}
