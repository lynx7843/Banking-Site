package com.example.backend.service;

import com.example.backend.model.AccountApplication;
import com.example.backend.repository.AccountApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountApplicationService {

    @Autowired
    private AccountApplicationRepository repository;

    // This method saves the entity, which performs the INSERT operation on the database
    public AccountApplication saveApplication(AccountApplication application) {
        return repository.save(application);
    }
}