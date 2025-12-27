package com.minigcash.userservice.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/")
public class AuthController {

    @GetMapping("/")
    public Map<String,String> root() {
        return Map.of("service","user-service","status","running");
    }

    @GetMapping("/health")
    public Map<String,String> health(){
        return Map.of("status","UP");
    }

    @PostMapping("/signup")
    public Map<String,String> signup(@RequestBody Map<String,String> body){
        return Map.of("status","ok","message","signup stub - implement persistence");
    }

    @PostMapping("/login")
    public Map<String,String> login(@RequestBody Map<String,String> body){
        return Map.of("token","stub-token","message","login stub - implement auth");
    }
}
