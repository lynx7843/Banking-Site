package com.example.GenZAccountApi.service;

import com.example.GenZAccountApi.model.AccountApplication;
import com.example.GenZAccountApi.repository.AccountApplicationRepository;
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