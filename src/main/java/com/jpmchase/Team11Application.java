package com.jpmchase;

import com.jpmchase.services.DbSeed;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;


@SpringBootApplication
public class Team11Application {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(Team11Application.class, args);

		DbSeed seed = new DbSeed();
		seed.readFileAndSeed();
/*		String command =
				"curl -X POST localhost:8080/api/businesses -d \"{\\\"businessName\\\": \\\"TestBusiness\\\", \\\"streetNumber\\\": \\\"6\\\", \\\"streetName\\\": \\\"Magic Street\\\", \\\"city\\\": \\\"New York\\\", \\\"state\\\": \\\"NY\\\", \\\"rampPresent\\\": \\\"true\\\", \\\"doorWidthAccessible\\\": \\\"true\\\", \\\"stepsOnEntry\\\": \\\"false\\\", \\\"restroomAccessible\\\": \\\"true\\\"}\" -H \"Content-Type:application/json\"\n";
		Process process = Runtime.getRuntime().exec(command);*/

	}
}
