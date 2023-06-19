package com.example.admincapart.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Course{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String courseId;

    private String courseName;

    private Integer courseCredits;

    private Integer courseCapacity;

    private Integer courseVacancy;

    private Boolean courseEnrollmentStatus;
    @ManyToOne
    @JoinColumn(name = "course_faculty_id")
    private Faculty faculty;
}
