package com.example.springtemplate.daos;

import com.example.springtemplate.models.Member;
import com.example.springtemplate.models.Workout;
import com.example.springtemplate.repositories.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin(origins = "*")
public class WorkoutRestOrmDao {
    @Autowired
    WorkoutRepository WorkoutRepository;

    @GetMapping("/api/workout/create/{plan}/{member}/{desc}/{time}/{timetaken}")
    public Workout createWorkout(
            @PathVariable("plan") Integer plan_id,
            @PathVariable("member") Integer member_id,
            @PathVariable("desc") String workout_description,
            @PathVariable("time") String workout_time,
            @PathVariable("timetaken") Integer workout_timetaken){
            Workout workout = new Workout(plan_id, member_id, workout_description, workout_time, workout_timetaken);
            return WorkoutRepository.save(workout);
    }

    @GetMapping("/api/workout/find")
    public List<Workout> findAllWorkouts() {
        return WorkoutRepository.findAllWorkouts();
    }

    @GetMapping("/api/workout/find/id/{Id}")
    public Workout findWorkoutById(
            @PathVariable("Id") Integer id) {
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
