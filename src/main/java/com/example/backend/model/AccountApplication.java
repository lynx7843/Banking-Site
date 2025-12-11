package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data // Lombok automatically generates Getters/Setters
@Table(name = "account_applications")
public class AccountApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // --- Step 1: Personal Details ---
    private String fullName;
    private LocalDate dob;
    private String gender;
    private String nationality;
    private String nicPassport;
    private String email;
    private String mobile;
    private String occupation;

    // --- Step 2: Account Details ---
    private String accountType;
    private String preferredBranch;
    private Double initialDeposit;
    private String savingsGoal;

    // --- Step 6: GenZ Features ---
    private Boolean aiBudget;
    private Boolean autoSavings;
    private String themeColor;

    // --- Step 7: Declaration ---
    private Boolean kycComplete;
}