package com.example.backend;

import com.example.backend.model.Customer;
import com.example.backend.repository.CustomerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class DataLoader {

    @Bean
    CommandLineRunner init(CustomerRepository repository) {
        return args -> {
            // Check if user exists, if not, create one
            if (repository.findByUsername("GenZUser").isEmpty()) {
                Customer user = new Customer();
                user.setUsername("GenZUser");
                user.setPassword("password123"); // Matching your login.jsx hardcoded values
                user.setFullName("Alex Morgan");
                user.setAccountNumber("1234 5678 9999");
                user.setBalance(150000.00);
                repository.save(user);
                System.out.println("Dummy User Created!");
            }
        };
    }
}
