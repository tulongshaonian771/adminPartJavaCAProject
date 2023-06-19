package com.example.admincapart.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorController {
    @GetMapping("/Error")
    public String ErrorPage()
    {
        return "Error";
    }

}
