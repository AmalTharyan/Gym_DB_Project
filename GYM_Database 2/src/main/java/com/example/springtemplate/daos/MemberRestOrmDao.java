package com.example.springtemplate.daos;

import com.example.springtemplate.models.Member;
import com.example.springtemplate.repositories.MemberRestRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class MemberRestOrmDao {
  @Autowired
  MemberRestRepository MemberRepository;

  @GetMapping("/api/member/create/{membership}/{fn}/{ln}/{un}/{pw}/{email}/{lvl}/{dob}")
  public Member createMember(

          @PathVariable("membership") Integer membership_id,
          @PathVariable("fn") String first,
          @PathVariable("ln") String last,
          @PathVariable("un") String uname,
          @PathVariable("pw") String pass,
          @PathVariable("email") String email,
          @PathVariable("lvl") String level,
          @PathVariable("dob") String dob) {
    Member member = new Member(membership_id, uname, pass, first, last, email, level, dob);
    return MemberRepository.save(member);
  }


  @GetMapping("/api/member/find")
  public List<Member> findAllMembers() {
    return MemberRepository.findAllMembers();
  }

  @GetMapping("/api/member/find/id/{Id}")
  public Member findMemberById(
          @PathVariable("Id") Integer id) {
    return MemberRepository.findMemberById(id);
  }

  @PutMapping("/api/member/update/{Id}")
  public Member updateMember(
          @PathVariable("Id") Integer id,
          @RequestBody Member memberUpdates) {
    Member member = MemberRepository.findMemberById(id);
    member.setMembership_id(memberUpdates.getMembership_id());
    //member.setUserType(memberUpdates.getUserType());
    member.setFirstName(memberUpdates.getFirstName());
    member.setLastName(memberUpdates.getLastName());
    member.setUsername(memberUpdates.getUsername());
    member.setPassword(memberUpdates.getPassword());
    member.setEmail(memberUpdates.getEmail());
    member.setDob(memberUpdates.getDob());
    return MemberRepository.save(member);
  }

  @DeleteMapping("/api/member/delete/{Id}")
  @ResponseBody
  public void deleteMember(@PathVariable("Id") Integer id) {
    MemberRepository.deleteById(id);
  }
}
