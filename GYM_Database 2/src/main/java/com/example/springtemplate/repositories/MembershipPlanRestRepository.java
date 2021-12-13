package com.example.springtemplate.repositories;


import com.example.springtemplate.models.domainMembershipPlan;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface MembershipPlanRestRepository extends CrudRepository<domainMembershipPlan, Integer>{

    @Query(value = "SELECT * FROM membership_plan", nativeQuery = true)
    public List<domainMembershipPlan> findAllMembershipPlans();

    @Query(value = "SELECT * FROM membership_plan WHERE id=:Id", nativeQuery = true)
    public domainMembershipPlan findMembershipPlansById(@Param("Id") Integer id);

}
