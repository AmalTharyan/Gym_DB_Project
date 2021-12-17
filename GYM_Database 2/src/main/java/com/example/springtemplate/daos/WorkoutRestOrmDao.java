package com.example.springtemplate.daos;

import com.example.springtemplate.models.Workout;
import com.example.springtemplate.models.domainMembershipPlan;
import com.example.springtemplate.repositories.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class WorkoutRestOrmDao {
    @Autowired
    WorkoutRepository WorkoutRepository;

    @PostMapping("/api/workout")
    public Workout createWorkout(@RequestBody Workout workout) {
        return WorkoutRepository.save(workout);
    }

    @GetMapping("/api/workout/find")
    public List<Workout> findAllWorkouts() {
        return WorkoutRepository.findAllWorkouts();
    }

    @GetMapping("/api/workout/find/id/{id}")
    public Workout findWorkoutById(
            @PathVariable("id") Integer id) {
        return WorkoutRepository.findWorkoutById(id);
    }

    @PutMapping("/api/workout/update/{Id}")
    public Workout updateMember(
            @PathVariable("Id") Integer id,
            @RequestBody Workout workoutUpdates) {
        Workout workout = WorkoutRepository.findWorkoutById(id);
        workout.setId(workoutUpdates.getId());
        workout.setPlan_id(workoutUpdates.getPlan_id());
        workout.setMember_id(workoutUpdates.getMember_id());
        workout.setWorkout_description(workoutUpdates.getWorkout_description());
        workout.setWorkout_time(workoutUpdates.getWorkout_time());
        workout.setWorkout_timetaken(workoutUpdates.getWorkout_timetaken());
        return WorkoutRepository.save(workout);
    }

    @DeleteMapping("/api/workout/delete/{Id}")
    @ResponseBody
    public void deleteWorkout(@PathVariable("Id") Integer id) {
        WorkoutRepository.deleteById(id);
    }

}
