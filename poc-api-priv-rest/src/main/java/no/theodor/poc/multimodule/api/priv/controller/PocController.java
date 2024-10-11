package no.theodor.poc.multimodule.api.priv.controller;

import no.theodor.poc.multimodule.business.service.PocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PocController {

    @Autowired
    private PocService pocService;

    @GetMapping("/api/hello-world")
    public String getHelloWorld() {
        return pocService.getHelloWorld();
    }

    @PostMapping("/api/capitalize")
    public String capitalize(@RequestBody String message) {
        return message.toUpperCase();
    }

}