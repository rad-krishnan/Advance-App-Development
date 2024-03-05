package com.boating.nriaquacruise.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()


public class UserController {
    @PostMapping()
    public ResponseEntity<?> register(@RequestBody)
}
