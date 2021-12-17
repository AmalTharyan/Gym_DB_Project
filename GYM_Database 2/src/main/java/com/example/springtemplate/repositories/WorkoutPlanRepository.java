package com.example.springtemplate.repositories;


import com.example.springtemplate.models.WorkoutPlan;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface WorkoutPlanRepository extends CrudRepository<WorkoutPlan, Integer> {
    @Query(value = "SELECT * FROM workout_plan",
            nativeQuery = true)
    public List<WorkoutPlan> findAllWorkoutPlans();
    @Query(value = "SELECT * FROM workout_plan WHERE id=:Id",
            nativeQuery = true)
    public WorkoutPlan findWorkoutPlanById(@Param("Id") Integer id);
}
