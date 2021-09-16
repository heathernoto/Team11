package com.jpmchase.model;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public class Business {

    private @Id @GeneratedValue Long id;
    private String businessName;
    private Long streetNumber;
    private String streetName;
    private String city;
    private String state;

    public Business(Long id, String businessName, Long streetNumber, String streetName, String city, String state) {
        this.id = id;
        this.businessName = businessName;
        this.streetNumber = streetNumber;
        this.streetName = streetName;
        this.city = city;
        this.state = state;
    }

    private Business() {}



}
