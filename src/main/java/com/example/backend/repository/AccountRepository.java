package com.example.backend.repository;

import com.example.backend.model.Account;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository extends MongoRepository<Account, String> {
    List<Account> findByCustomerId(String customerId);
}