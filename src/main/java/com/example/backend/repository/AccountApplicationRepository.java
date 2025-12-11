package com.example.backend.repository;

import com.example.backend.model.AccountApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountApplicationRepository extends JpaRepository<AccountApplication, Long> {
}