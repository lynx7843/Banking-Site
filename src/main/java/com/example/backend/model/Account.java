package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "account_details")
@Data
public class Account {

    @Id
    private String id; // Custom IDs like "ACC-5001"

    private String customerId;
    
    private String accountType; 
    
    private String intention; 
    
    private Double currentBalance; 
}