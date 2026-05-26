package com.example.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.time.LocalDateTime;

@Document(collection = "transactions")
@Data
public class Transaction {

    @Id
    private String id; // custom IDs like "TXN-8001"

    private String accountId;
    
    private String type; // credit or debit
    
    private Double amount;
    
    private LocalDateTime timestamp;
    
    private String description;
}