package com.example.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/app")

public class baw {

	@GetMapping("/baw")
	public String ba() {
		return "baw";
	}
}
