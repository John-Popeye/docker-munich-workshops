package com.workshops.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DogFactRepository extends MongoRepository<DogFact, String> {
}
