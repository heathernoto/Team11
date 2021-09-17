package com.jpmchase.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final BusinessRepository businessRepository;
    private final UsersRepository usersRepository;

    @Autowired
    public DatabaseLoader(BusinessRepository businessRepository, UsersRepository usersRepository) {
        this.businessRepository = businessRepository;
        this.usersRepository = usersRepository;
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
