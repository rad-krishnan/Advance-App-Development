package com.boating.nriaquacruise.model;

import org.springframework.boot.actuate.autoconfigure.wavefront.WavefrontProperties.TokenType;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor 
@Entity
@Table(name = "_token")

public class Token {

    @Id
    @GeneratedValue(strategy = UUID)
    private String id;

    @Column(unique = true)
    private String token;

    @Builder.Default
    @Enumerated(STRING)
    private TokenType tokenType = TokenType.BEARER; 

    private boolean expired;

    private boolean revoked;
}
 