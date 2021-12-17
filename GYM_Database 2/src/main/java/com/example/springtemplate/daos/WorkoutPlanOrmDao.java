package com.example.springtemplate.daos;

import com.example.springtemplate.models.WorkoutPlan;
import com.example.springtemplate.repositories.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class WorkoutPlanOrmDao {
    @Autowired
    WorkoutPlanRepository workoutPlanRepository;

    @PostMapping("/api/workout_plan")
    public WorkoutPlan createWorkout(@RequestBody WorkoutPlan workoutPlan) {
        return workoutPlanRepository.save(workoutPlan);
    }

    @GetMapping("/api/workout_plan/find")
    public List<WorkoutPlan> findAllWorkouts() {
        return workoutPlanRepository.findAllWorkoutPlans();
    }

    @GetMapping("/api/workout_plan/find/id/{id}")
    public WorkoutPlan findWorkoutPlanById(
            @PathVariable("id") Integer id) {
        return workoutPlanRepository.findWorkoutPlanById(id);
    }

    @PutMapping("/api/workout_plan/update/{Id}")
    public WorkoutPlan updateMember(
            @PathVariable("Id") Integer id,
            @RequestBody WorkoutPlan workoutPlanUpdates) {
        WorkoutPlan workoutPlan = workoutPlanRepository.findWorkoutPlanById(id);
        workoutPlan.setId(workoutPlanUpdates.getId());
        workoutPlan.setWorkout_type(workoutPlanUpdates.getWorkout_type());
        workoutPlan.setWorkout_description(workoutPlanUpdates.getWorkout_description());
        return workoutPlanRepository.save(workoutPlan);
    }

    @DeleteMapping("/api/workout_plan/delete/{Id}")
    @ResponseBody
    public void deleteWorkoutPlan(@PathVariable("Id") Integer id) {
        workoutPlanRepository.deleteById(id);
    }

}
