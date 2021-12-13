package com.example.springtemplate.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="workout")
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer workout_id;
    private Integer plan_id;
    private Integer member_id;
    private String workout_description;
    private String workout_time;
    private Integer workout_timetaken;

    public Integer getId() { return workout_id; }
    public void setId(Integer workout_id) { this.workout_id = workout_id; }

    public Integer getPlan_id() { return plan_id;}
    public void setPlan_id(Integer plan_id){ this.plan_id = plan_id;}

    public Integer getMember_id(){ return member_id;}
    public void setMember_id(Integer member_id) { this.member_id = member_id;}

    public String getWorkout_description() { return workout_description;}
    public void setWorkout_description(String workout_description) { this.workout_description = workout_description;}

    public String getWorkout_time() { return workout_time;}
    public void setWorkout_time(String workout_time) { this.workout_time = workout_time;}

    public Integer getWorkout_timetaken() { return workout_timetaken;}
    public void setWorkout_timetaken(Integer workout_timetaken) { this.workout_timetaken = workout_timetaken;}

    public Workout(Integer plan_id, Integer member_id, String workout_description,
                   String workout_time, Integer workout_timetaken){
        this.workout_id = workout_id;
        this.plan_id = plan_id;
        this.member_id = member_id;
        this.workout_description = workout_description;
        this.workout_time = workout_time;
        this.workout_timetaken = workout_timetaken;
    }

    public Workout(){}

}
