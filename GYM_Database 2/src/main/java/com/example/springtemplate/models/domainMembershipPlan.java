package com.example.springtemplate.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name="membership_plan")
public class domainMembershipPlan {

//    public enum type {
//        MONTHLY,
//        YEARLY,
//        STUDENT,
//        PAY_AS_YOU_GO
//    }

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String membership_type;
    private String membership_description;
    private Integer membership_cost;

    public Integer getId() {
        return id;
    }

    public void setId(Integer membership_id) {
        this.id = membership_id;
    }

    public String getMembership_type(){ return membership_type;}

    public void setMembership_type(String membership_type) { this.membership_type = membership_type;}

    public String getMembership_description() { return membership_description;}

    public void setMembership_description(String membership_description) { this.membership_description = membership_description;}

    public Integer getMembership_cost() { return membership_cost;}

    public void setMembership_cost(Integer membership_cost) { this.membership_cost = membership_cost;}

    public domainMembershipPlan(String membership_type, String membership_description, Integer membership_cost){
        this.membership_type = membership_type;
        this.membership_description = membership_description;
        this.membership_cost = membership_cost;
    }

    public domainMembershipPlan() {}
}
