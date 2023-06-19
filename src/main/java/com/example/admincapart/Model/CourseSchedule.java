package com.example.admincapart.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "course_schedule")
public class CourseSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    @ManyToOne
    @JoinColumn(name = "schedule_id")
    private Schedule schedule;

    private String roomNumber;

}
