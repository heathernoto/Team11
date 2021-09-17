package com.jpmchase.services;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Scanner;

public class DbSeed {

    public void readFileAndSeed() throws IOException {
        String fileToRead = "C:\\Users\\rb974\\Projects\\Team11\\src\\main\\java\\com\\jpmchase\\services\\bus-seed.txt";
        FileInputStream fis = new FileInputStream(fileToRead);
        Scanner scanner = new Scanner(fis);
        String command;

        while(scanner.hasNext()) {
            command = scanner.nextLine();
            Process process = Runtime.getRuntime().exec(command);

        }
    }
}
