package com.jpmchase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class User {

    //todo add hashcode+equals for userName OR userEmail
    private @Id @GeneratedValue Long id;
    private String userName;
    private String userEmail;
    private Long allyPoints;

    public User(String userEmail, Long allyPoints, String userName) {
        this.userEmail = userEmail;
        this.allyPoints = allyPoints;
        this.userName = userName;
    }

    public User() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(userName, user.userName) && Objects.equals(userEmail, user.userEmail);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userName, userEmail);
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Long getAllyPoints() {
        return allyPoints;
    }

    public void setAllyPoints(Long allyPoints) {
        this.allyPoints = allyPoints;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public String toString() {
        try {
            return new com.fasterxml.jackson.databind.ObjectMapper().writerWithDefaultPrettyPrinter().writeValueAsString(this);
        } catch (com.fasterxml.jackson.core.JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }
}
