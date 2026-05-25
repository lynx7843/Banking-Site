package com.example.backend.repository;

import com.example.backend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByUsername(String username);
}
