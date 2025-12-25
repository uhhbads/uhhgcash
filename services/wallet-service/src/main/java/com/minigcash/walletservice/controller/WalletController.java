package com.minigcash.walletservice.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/wallet")
public class WalletController {

    @GetMapping("/balance")
    public Map<String,Object> balance(@RequestParam String userId){
        // TODO: integrate with MongoDB and Redis caching
        return Map.of("userId", userId, "balance", 1000.00);
    }

    @PostMapping("/send")
    public Map<String,String> send(@RequestBody Map<String,Object> body){
        return Map.of("status","ok","message","send stub");
    }
}
