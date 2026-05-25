package com.example.backend.controller;

import com.example.backend.model.Account;
import com.example.backend.repository.AccountApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    @Autowired
    private AccountApplicationRepository repository;

    @PostMapping("/apply")
    public Account submitApplication(@RequestBody Account application) {
        System.out.println("Received application for: " + application.getFullName());
        return repository.save(application); // Saves to MySQL
    }
}
