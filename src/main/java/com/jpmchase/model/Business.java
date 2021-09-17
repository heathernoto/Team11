package com.jpmchase.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;


@Entity
public class Business {

    private @Id @GeneratedValue Long id;
    private String businessName;
    private Long streetNumber;
    private String streetName;
    private String city;
    private String state;
    private Boolean rampPresent;
    private Boolean doorWidthAccessible;
    private Boolean stepsOnEntry;
    private Boolean restroomAccessible;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Business business = (Business) o;
        return Objects.equals(businessName, business.businessName) &&
                Objects.equals(streetNumber, business.streetNumber) &&
                Objects.equals(streetName, business.streetName) &&
                Objects.equals(city, business.city) &&
                Objects.equals(state, business.state);
    }

    @Override
    public int hashCode() {
        return Objects.hash(businessName,
                streetNumber,
                streetName,
                city,
                state);
    }

    public Business(String businessName, Long streetNumber, String streetName, String city, String state, Boolean rampPresent, Boolean doorWidthAccessible, Boolean stepsOnEntry, Boolean restroomAccessible) {
        this.businessName = businessName;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.city = city;
        this.state = state;
        this.rampPresent = rampPresent;
        this.doorWidthAccessible = doorWidthAccessible;
        this.stepsOnEntry = stepsOnEntry;
        this.restroomAccessible = restroomAccessible;
    }

    public Business() {}

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public Long getStreetNumber() {
        return streetNumber;
    }

    public void setStreetNumber(Long streetNumber) {
        this.streetNumber = streetNumber;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Boolean getRampPresent() {
        return rampPresent;
    }

    public void setRampPresent(Boolean rampPresent) {
        this.rampPresent = rampPresent;
    }

    public Boolean getDoorWidthAccessible() {
        return doorWidthAccessible;
    }

    public void setDoorWidthAccessible(Boolean doorWidthAccessible) {
        this.doorWidthAccessible = doorWidthAccessible;
    }

    public Boolean getStepsOnEntry() {
        return stepsOnEntry;
    }

    public void setStepsOnEntry(Boolean stepsOnEntry) {
        this.stepsOnEntry = stepsOnEntry;
    }

    public Boolean getRestroomAccessible() {
        return restroomAccessible;
    }

    public void setRestroomAccessible(Boolean restroomAccessible) {
        this.restroomAccessible = restroomAccessible;
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
