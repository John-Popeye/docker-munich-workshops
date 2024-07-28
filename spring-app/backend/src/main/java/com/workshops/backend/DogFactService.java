package com.workshops.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogFactService {

    @Autowired
    private DogFactRepository dogFactRepository;


    public List<DogFact> getAllDogFacts() {
        return dogFactRepository.findAll();
    }

    public Optional<DogFact> getDogFactById(String id) {
        return dogFactRepository.findById(id);
    }
}
