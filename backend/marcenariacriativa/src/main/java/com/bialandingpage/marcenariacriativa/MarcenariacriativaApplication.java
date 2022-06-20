package com.bialandingpage.marcenariacriativa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

// @SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@SpringBootApplication
@EnableSwagger2
public class MarcenariacriativaApplication {
	public static void main(String[] args) {
		SpringApplication.run(MarcenariacriativaApplication.class, args);

	}
}
