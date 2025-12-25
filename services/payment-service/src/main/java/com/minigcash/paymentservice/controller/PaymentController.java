package com.minigcash.paymentservice.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @GetMapping("/qr/{id}")
    public Map<String,String> genQr(@PathVariable String id){
        // TODO: generate QR payload
        return Map.of("qr","qr-code-payload-for-"+id);
    }

    @PostMapping("/scan")
    public Map<String,String> scan(@RequestBody Map<String,String> body){
        return Map.of("status","ok","message","scan stub");
    }
}
