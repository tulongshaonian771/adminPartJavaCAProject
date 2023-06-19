package com.example.admincapart.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "course_student")
public class CourseStudent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name ="course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name ="student_id")
    private Student student;

    private Double grade;
    private Integer status;
}
