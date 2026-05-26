package com.example.backend;

import com.example.backend.model.Account;
import com.example.backend.model.Customer;
import com.example.backend.repository.AccountRepository;
import com.example.backend.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    @Bean
    CommandLineRunner init(CustomerRepository customerRepository, AccountRepository accountRepository) {
        return args -> {
            if (customerRepository.findByEmail("admin@mybank.com").isEmpty()) {
                
                // 1. Create the Dummy Customer
                Customer customer = new Customer();
                customer.setId("CUST-1001");
                customer.setName("Admin User");
                customer.setEmail("admin@mybank.com");
                customer.setPassword("password123");
                customer.setNic("199912345678");
                customer.setPhone("+94 77 123 4567");
                customer.setAddress("123 Main Street, Colombo");
                
                customerRepository.save(customer);
                System.out.println("Dummy Customer Created!");

                // 2. Create a Dummy Account linked to this Customer
                if (accountRepository.findById("ACC-5001").isEmpty()) {
                    Account account = new Account();
                    account.setId("ACC-5001");
                    account.setCustomerId("CUST-1001");
                    account.setAccountType("Savings");
                    account.setIntention("Emergency Fund");
                    account.setCurrentBalance(150000.00);
                    
                    accountRepository.save(account);
                    System.out.println("Dummy Account Created!");
                }
            }
        };
    }
}