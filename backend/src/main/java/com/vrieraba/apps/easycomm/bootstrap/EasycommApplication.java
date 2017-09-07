package com.vrieraba.apps.easycomm.bootstrap;

import com.vrieraba.apps.easycomm.configuration.JpaConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"com.vrieraba.apps.easycomm"})
public class EasycommApplication {

	public static void main(String[] args) {
		SpringApplication.run(EasycommApplication.class, args);
	}
}
