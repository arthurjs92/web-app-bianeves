package com.bialandingpage.marcenariacriativa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

// @SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@SpringBootApplication
@EnableSwagger2
public class MarcenariacriativaApplication extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(MarcenariacriativaApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(MarcenariacriativaApplication.class);
	}
}
