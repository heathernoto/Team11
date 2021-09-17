package com.jpmchase.controller;

import com.jpmchase.model.Business;
import com.jpmchase.services.H2JdbcConnection;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class GetController {

    private static final String QUERY_BY_NAME =
            "select id," +
            "business_name," +
            "street_number," +
            "street_name," +
            "city," +
            "state," +
            "ramp_present," +
            "door_width_accessible," +
            "steps_on_entry," +
            "restroom_accessible, " +
                    "from business " +
                    "where business_name =?";

    @RequestMapping(value = "/name", method = RequestMethod.GET)
    public String getBusinessByName(@RequestParam String name) throws Exception{
        Business business = new Business();
        Long id = null;
        List<String> listOfBusinesses = new ArrayList<>();
        try (Connection connection = H2JdbcConnection.getConnection()){
            PreparedStatement preparedStatement = connection.prepareStatement(QUERY_BY_NAME); {
                preparedStatement.setString(1, name);
                System.out.println(preparedStatement);
                ResultSet rs = preparedStatement.executeQuery();
                while (rs.next()) {
                    id = rs.getLong("id");
                    business.setBusinessName(rs.getString("business_name"));
                    business.setStreetNumber(rs.getLong("street_number"));
                    business.setStreetName(rs.getString("street_name"));
                    business.setCity(rs.getString("city"));
                    business.setState(rs.getString("state"));
                    business.setRampPresent(rs.getBoolean("ramp_present"));
                    business.setDoorWidthAccessible(rs.getBoolean("door_width_accessible"));
                    business.setStepsOnEntry(rs.getBoolean("steps_on_entry"));
                    business.setRestroomAccessible(rs.getBoolean("restroom_accessible"));
                    System.out.println(business);
                    listOfBusinesses.add(String.valueOf(business));

                }
            }
        } catch(SQLException e) {
            H2JdbcConnection.printSQLException(e);
    }
        return String.valueOf(listOfBusinesses);
    }
}
