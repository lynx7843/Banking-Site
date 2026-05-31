package com.example.backend.controller;

import com.example.backend.model.Account;
import com.example.backend.service.AccountService;
import com.example.backend.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "http://localhost:5173") // Allow access from React
public class AccountController {

    @Autowired
    private AccountService accountService;
    
    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/apply")
    public Account createAccount(@RequestBody Account account) {
        System.out.println("Received account creation request for Customer ID: " + account.getCustomerId());
        
        // Safety check: ensure a new account starts with at least a 0 balance
        if (account.getCurrentBalance() == null) {
            account.setCurrentBalance(0.0);
        }
        
        return accountService.saveAccount(account);
    }
    
    @GetMapping("/customer/{customerId}")
    public List<Account> getCustomerAccounts(@PathVariable String customerId) {
        return accountRepository.findByCustomerId(customerId);
    }
}