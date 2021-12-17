package com.example.springtemplate.daos;


import com.example.springtemplate.models.domainMembershipPlan;
import com.example.springtemplate.repositories.MembershipPlanRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class MembershipPlanRestOrmDao {
    @Autowired
    MembershipPlanRestRepository membershipPlanRepository;

    @PostMapping("/api/membership_plan")
    public domainMembershipPlan createMembership(@RequestBody domainMembershipPlan membershipPlan) {
        return membershipPlanRepository.save(membershipPlan);
    }



    @GetMapping("/api/membership_plan/find")
    public List<domainMembershipPlan> findAllMembershipPlans() {

        return membershipPlanRepository.findAllMembershipPlans();
    }

    @GetMapping("/api/membership_plan/find/id/{Id}")
    public domainMembershipPlan findMembershipPlansById(

            @PathVariable("Id") Integer id) {
        return membershipPlanRepository.findMembershipPlansById(id);
    }

    @PutMapping("/api/membership_plan/update/{Id}")
    public domainMembershipPlan updateMembership(
            @PathVariable("Id") Integer id,
            @RequestBody domainMembershipPlan membershipUpdates) {
            domainMembershipPlan membershipPlan = membershipPlanRepository.findMembershipPlansById(id);
            membershipPlan.setId(membershipUpdates.getId());
            membershipPlan.setMembership_type(membershipUpdates.getMembership_type());
            membershipPlan.setMembership_description(membershipUpdates.getMembership_description());
            membershipPlan.setMembership_cost(membershipUpdates.getMembership_cost());
        return membershipPlanRepository.save(membershipPlan);
    }

    @DeleteMapping("/api/membership_plan/delete/{Id}")
    @ResponseBody
    public void deleteMembership(
            @PathVariable("Id") Integer membership_id) {
        membershipPlanRepository.deleteById(membership_id);
    }
}
