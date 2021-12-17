package com.example.springtemplate.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="trainer")
public class Trainer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String firstName;
  private String lastName;
  private Integer member_id;
  private String username;
  private String password;
  private String email;
  private String dob;

  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }


  public Integer getMember_id() {return member_id;}
  public void setMember_id(Integer member_id) {this.member_id = member_id;}
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

  public String getDob() { return dob; }
  public void setDob(String dob) { this.dob = dob; }

  public Trainer(String username, String password, Integer member_id, String first_name, String last_name, String email, String dob) {

    this.member_id = member_id;
    this.username = username;
    this.password = password;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
    this.dob = dob;
  }

  public Trainer() {}
}


