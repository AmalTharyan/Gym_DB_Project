package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Trainer;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TrainerRestRepository
        extends CrudRepository<Trainer, Integer> {
  @Query(value = "SELECT * FROM trainer",
          nativeQuery = true)
  public List<Trainer> findAllTrainers();
  @Query(value = "SELECT * FROM trainer WHERE id=:Id",
          nativeQuery = true)
  public Trainer findTrainerById(@Param("Id") Integer id);
}
