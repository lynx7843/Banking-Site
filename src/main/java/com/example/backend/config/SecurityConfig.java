package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        // 1. Disable CSRF for non-browser clients (essential for POST from React)
        http.csrf(AbstractHttpConfigurer::disable);

        // 2. Configure Authorization Rules
        http.authorizeHttpRequests(authorize -> authorize
                // Allow POST requests to the account application endpoint WITHOUT authentication
                .requestMatchers("/api/accounts/apply").permitAll()
                // Require authentication for all other requests (or permit all for simpler testing)
                .anyRequest().permitAll()
        );

        // 3. Disable basic HTTP authentication and form login
        http.httpBasic(AbstractHttpConfigurer::disable);
        http.formLogin(AbstractHttpConfigurer::disable);


        return http.build();
    }
}