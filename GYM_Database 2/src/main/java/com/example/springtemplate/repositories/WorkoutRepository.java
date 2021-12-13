package com.example.springtemplate.repositories;


import com.example.springtemplate.models.Workout;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WorkoutRepository extends CrudRepository<Workout, Integer> {
    @Query(value = "SELECT * FROM workout",
            nativeQuery = true)
    public List<Workout> findAllWorkouts();
    @Query(value = "SELECT * FROM workout WHERE workout_id=:Id",
            nativeQuery = true)
    public Workout findWorkoutById(@Param("Id") Integer workout_id);
}
