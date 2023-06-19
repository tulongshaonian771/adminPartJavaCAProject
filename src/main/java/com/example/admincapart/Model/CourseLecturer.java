package com.example.admincapart.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "course_lecturer")
@Data
public class CourseLecturer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name ="lecturer_id")
    private Lecturer lecturer;
}
