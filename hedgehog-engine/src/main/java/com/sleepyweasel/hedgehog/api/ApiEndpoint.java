package com.sleepyweasel.hedgehog.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
class ApiEndpoint {

    @GetMapping("/status")
    public String status() {
        return "Connection successful";
    }
}
