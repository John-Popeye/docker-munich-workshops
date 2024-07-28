package com.workshops.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dogfacts")
public class DogFactController {

    @Autowired
    private DogFactService dogFactService;

    @GetMapping()
    public List<DogFact> getDogFacts() {
        return dogFactService.getAllDogFacts();
    }

    @GetMapping("/{id}")
    @Cacheable(value = "dogfact", key = "#id")
    public DogFact getDogFactById(@PathVariable String id) {
        Optional<DogFact> dogFact = dogFactService.getDogFactById(id);
        return dogFact.get();
    }
}