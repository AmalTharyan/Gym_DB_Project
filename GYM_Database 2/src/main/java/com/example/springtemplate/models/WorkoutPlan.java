package com.example.springtemplate.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="workout_plan")
public class WorkoutPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String workout_type;
    private String workout_description;

    public Integer getId() { return id; }
    public void setId(Integer workout_id) { this.id = workout_id; }

    public String getWorkout_description() { return workout_description;}
    public void setWorkout_description(String workout_description) { this.workout_description = workout_description;}

    public String getWorkout_type() { return workout_type;}
    public void setWorkout_type(String workout_type) { this.workout_type = workout_type;}


    public WorkoutPlan(Integer id, String workout_type, String workout_description){
        this.id = id;
        this.workout_type = workout_type;
        this.workout_description = workout_description;

    }

    public WorkoutPlan(){}

}
