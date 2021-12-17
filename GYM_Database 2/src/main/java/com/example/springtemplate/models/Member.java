package com.example.springtemplate.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer membership_id;
    //private String userType;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private String level;
    private String dob;

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getMembership_id(){
        return membership_id;
    }
    public void setMembership_id(Integer membership_id) { this.membership_id = membership_id;}
/*
    public String getUserType() { return userType; }
    public void setUserType(String userType) { this.userType = userType; }
*/
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getLevel() { return level;}
    public void setLevel() { this.level = level;}
    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }

    public Member(Integer membership_id, String username, String password, String first_name, String last_name, String email, String level, String dob) {

        this.membership_id = membership_id;

        this.username = username;
        this.password = password;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.level = level;
        this.dob = dob;
    }

    public Member() {}
}
