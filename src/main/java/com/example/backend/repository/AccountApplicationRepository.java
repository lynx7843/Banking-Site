package com.example.backend.repository;

import com.example.backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountApplicationRepository extends JpaRepository<Account, Long> {
}