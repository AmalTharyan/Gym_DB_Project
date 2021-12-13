package com.example.springtemplate.daos;


import com.example.springtemplate.models.domainMembershipPlan;
import com.example.springtemplate.repositories.MembershipPlanRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MembershipPlanRestOrmDao {
    @Autowired
    MembershipPlanRestRepository membershipPlanRepository;

    @GetMapping("/api/membership_plan/create/{type}/{desc}/{cost}")
    public domainMembershipPlan createMembershipId(
        @PathVariable("type") String membership_type,
        @PathVariable("desc") String membership_description,
        @PathVariable("cost") Integer membership_cost){
        domainMembershipPlan membership = new domainMembershipPlan(membership_type, membership_description, membership_cost);
        return membershipPlanRepository.save(membership);
    }

    @GetMapping("/api/membership_plan/find")
    public List<domainMembershipPlan> findAllMembershipPlans() {

        return membershipPlanRepository.findAllMembershipPlans();
    }

    @GetMapping("/api/membership_plan/find/membership_id/{id}")
    public domainMembershipPlan findMembershipPlansById(

            @PathVariable("id") Integer id) {
        return membershipPlanRepository.findMembershipPlansById(id);
    }

    @GetMapping("/api/membership_plan/update/{Id}/{cost}")
    public domainMembershipPlan updateMembership(
            @PathVariable("Id") Integer id,
            @PathVariable("cost") Integer cost) {
            domainMembershipPlan membershipPlan = membershipPlanRepository.findMembershipPlansById(id);
            membershipPlan.setMembership_cost(cost);
        return membershipPlanRepository.save(membershipPlan);
    }

    @DeleteMapping("/api/membership_plan/delete/{Id}")
    @ResponseBody
    public void deleteMembership(
            @PathVariable("Id") Integer membership_id) {
        membershipPlanRepository.deleteById(membership_id);
    }
}
