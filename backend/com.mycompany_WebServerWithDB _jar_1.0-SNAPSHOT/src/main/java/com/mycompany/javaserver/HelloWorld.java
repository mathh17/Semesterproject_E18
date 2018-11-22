/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.javaserver;

/**
 *
 * @author andrea
 */
import io.javalin.Javalin;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/*
   1. Open http://localhost:7000/ in your browers after running this code!
 */
public class HelloWorld {

    static Connection connection = null;
    static Statement statement = null;
    static ResultSet resultSet = null;

    public static void main(String[] args) {
        Javalin app = Javalin.create();
        app.enableCorsForOrigin("*");
        app.start(7000);
        System.out.println("Server running at port 7000...");

// --- 1. answering GET requests for / address ----------
        app.get("/", ctx -> ctx.result("Hi, this is the WebServer With DB!"));

// --- 2. Create Web API to insert and read data from the DB -------------------
        // example1: http://localhost:7000/insert/Andrea
        // example2: http://localhost:7000/read/Andrea
        String dbUrl = "jdbc:mysql://localhost:6666/quiz";
        String dbUser = "sqluser";
        String dbPassword = "sqluserpw";

        
        app.get("/read", ctx -> {
            ctx.result("Result: "
                    + readFromDB(dbUrl, dbUser, dbPassword)
            );
        });

    }

    public static String readFromDB(String url, String user, String password) {
        String textResult = "";
        try {
            // Setup the connection with the DB
            connection = DriverManager.getConnection(url, user, password);

            // Statements allow to issue SQL queries to the database
            statement = connection.createStatement();

            // Result set get the result of the SQL query
            String selectText = "SELECT * FROM quiz.quiztable";
            System.out.println(selectText);
            resultSet = statement.executeQuery(selectText);
            

            // Write result
            while (resultSet.next()) {
                System.out.printf("%d | %s | %s | %s | %s | %s\n",
                        resultSet.getInt("id"),
                        resultSet.getString("spørgsmål"),
                        resultSet.getString("svar1"),
                        resultSet.getString("svar2"),
                        resultSet.getString("svar3"),
                        resultSet.getString("rigtig_svar")
                );
                textResult += resultSet.getInt("id") + "|"
                        + resultSet.getString("spørgsmål") + "|"
                        + resultSet.getString("svar1") + "|"
                        + resultSet.getString("svar2") + "|"
                        + resultSet.getString("svar3") + "|"
                        + resultSet.getString("rigtig_svar") + "|";
            }
        } catch (SQLException ex) {
            System.out.println("SQLException occurred! " + ex);
        } finally {
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException ex) {
                System.out.println("SQLException occurred while closing the connection. " + ex);
            }
        }

        if (textResult.equals("")) {
            textResult = "-nothing found-";
        }
        return textResult;
    }
}