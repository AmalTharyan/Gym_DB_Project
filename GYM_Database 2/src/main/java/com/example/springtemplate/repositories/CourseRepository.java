package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Course;

import org.springframework.data.repository.CrudRepository;

public interface CourseRepository
        extends CrudRepository<Course, Integer> {
}
