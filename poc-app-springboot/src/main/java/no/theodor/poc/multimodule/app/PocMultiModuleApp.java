package no.theodor.poc.multimodule.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("no.theodor.poc.multimodule")
@SpringBootApplication
public class PocMultiModuleApp {

    public static void main(String[] args) {
        SpringApplication.run(PocMultiModuleApp.class, args);
    }

}