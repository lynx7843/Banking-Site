package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "account_details")
@Data
public class Account {

    @Id
    private String id; // Changed to String to support custom IDs like "ACC-5001"

    private String customerId; // Links this account to a specific customer
    
    private String accountType; // e.g., "Savings" or "Checking"
    
    private String intention; // e.g., "Emergency Fund", "Daily Expenses"
    
    private Double currentBalance; // Stores the active balance for quick lookups
}