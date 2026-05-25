package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Document(collection = "customer_info")
@Data
public class Customer {

    @Id
    private String id; // Changed to String to support custom IDs like "CUST-1001"

    private String name;
    
    private String email; // Used for login
    
    private String password; // In a real app, this must be encrypted!
    
    private String nic;
    
    private String phone;
    
    private String address;
}