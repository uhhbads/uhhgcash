package com.minigcash.userservice.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/")
public class AuthController {

    @PostMapping("/signup")
    public Map<String,String> signup(@RequestBody Map<String,String> body){
        // TODO: implement secure password hashing and save to MongoDB
        return Map.of("status","ok","message","signup stub - implement persistence");
    }

    @PostMapping("/login")
    public Map<String,String> login(@RequestBody Map<String,String> body){
        // TODO: verify credentials and return JWT
        return Map.of("token","stub-token","message","login stub - implement auth");
    }
}
