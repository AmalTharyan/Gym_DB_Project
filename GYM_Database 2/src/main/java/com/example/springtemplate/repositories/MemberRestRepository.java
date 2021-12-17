package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Member;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberRestRepository
        extends CrudRepository<Member, Integer> {
    @Query(value = "SELECT * FROM member",
            nativeQuery = true)
    public List<Member> findAllMembers();
    @Query(value = "SELECT * FROM member WHERE id=:Id",
            nativeQuery = true)
    public Member findMemberById(@Param("Id") Integer id);
}
