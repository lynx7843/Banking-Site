package com.example.backend.controller;

import com.example.backend.model.Account;
import com.example.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping("/apply")
    public Account createAccount(@RequestBody Account account) {
        System.out.println("Received account creation request for Customer ID: " + account.getCustomerId());

        if (account.getCurrentBalance() == null) {
            account.setCurrentBalance(0.0);
        }
        
        return accountService.saveAccount(account); 
    }
}